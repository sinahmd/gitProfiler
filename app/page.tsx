import SearchBar from "./SearchBar";
export default function Home() {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        Enter a GitHub username to see their profile and repositories.
      </p>
      <SearchBar />
    </div>
  );
}
