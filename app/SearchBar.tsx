'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username) {
      router.push(`/profile/${username}`);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={username}
        className='search-input'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '8px' }}>
        Search
      </button>
    </form>
  );
}