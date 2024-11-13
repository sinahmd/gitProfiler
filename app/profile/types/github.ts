export interface GitHubProfile {
    login: string;
    name: string;
    bio: string | null;
    followers: number;
    following: number;
    public_repos: number;
  }
  
  export interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    // map?: () => void
  }