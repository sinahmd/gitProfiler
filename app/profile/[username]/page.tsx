// app/profile/[username]/page.js
import axios from 'axios';
import { GitHubProfile, GitHubRepo } from '../types/github';

interface ProfilePageProps {
    params: { username: string };
  }

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;

  try {
    const profileResponse = await axios.get<GitHubProfile>(
      `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/users/${username}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        },
      }
    );
    const reposResponse = await axios.get<GitHubRepo[]>(
      `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/users/${username}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        },
      }
    );

    const profile = profileResponse.data;
    const repos = reposResponse.data;

    return (
      <div style={{ padding: '20px' }}>
        <h2>{profile.name} (@{profile.login})</h2>
        <p>{profile.bio}</p>
        <p>Followers: {profile.followers} | Following: {profile.following}</p>
        <p>Public Repositories: {profile.public_repos}</p>

        <h3 style={{}}>Repositories</h3>
        <ul>
          {repos.map((repo: GitHubRepo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Error loading profile</h2>
        <p>The profile could not be found or there was an issue fetching data.</p>
      </div>
    );
  }
}
