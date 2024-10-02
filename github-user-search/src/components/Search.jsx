// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Reset error message before each search
        setUserData(null); // Clear previous user data
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            // Assuming that the error from GitHub API indicates user not found
            if (err.response && err.response.status === 404) {
                setError("Looks like we can't find the user"); // Set the error message
            } else {
                setError("An error occurred while fetching data."); // Generic error message
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>} {/* Display the error message */}
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <p>Login: {userData.login}</p> {/* Display user login */}
                    <img src={userData.avatar_url} alt={userData.name} width="100" />
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
