import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
      setError(null);
    } catch (error) {
      setUser(null);
      setError('User not found.');
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {user && (
        <div>
          <h2>{user.login}</h2>
          <img src={user.avatar_url} alt={user.login} />
          <p>Name: {user.name}</p>
          <p>Bio: {user.bio}</p>
          <p>Location: {user.location}</p>
          <p>Public Repositories: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchPage;