import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList'; // Added import statement
import './App.css';

// Function to fetch user data (replace with actual API call if needed)
const fetchUsers = async () => {
  const response = await fetch('your-api-endpoint');
  const data = await response.json();
  return data;
};

function App() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState([]);

  // Fetch user data on component mount
  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setFoundUsers(users);
    };
    getUsers();
  }, []);

  const filter = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== '') {
      const results = foundUsers.filter((user) => user.name.toLowerCase().startsWith(keyword));
      setFoundUsers(results);
    } else {
      setFoundUsers(foundUsers);
    }
    setName(keyword);
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link> | <Link to="/add-recipe">Add Recipe</Link>
        </nav>

        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Filter Users"
        />
        <div className="user-list">
          {foundUsers.length > 0 ? (
            <ul>
              {foundUsers.map((user) => (
                <li key={user.id} className="user">
                  <span className="user-id">{user.id}</span>
                  <span className="user-name">{user.name}</span>
                  <span className="user-age">{user.age} years old</span>
                  <Link to={`/recipe/${user.id}`}>View Details</Link> {/* Link to user details */}
                </li>
              ))}
            </ul>
          ) : (
            <h1>No users found!</h1>
          )}
        </div>

        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Use RecipeList component on home route */}
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails recipeId={match.params.id} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;