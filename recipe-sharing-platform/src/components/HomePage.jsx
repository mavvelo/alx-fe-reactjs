import React, { useState, useEffect } from 'react';

function HomePage() {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      fetch('data.json')
        .then(response => response.json())
        .then(data => setRecipes(data));
    }, []);
  
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Display recipes here */}
      </div>
    );
  }
  
  export default HomePage;