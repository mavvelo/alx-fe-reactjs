// RecipeCard.jsx
import React from 'react';

const RecipeCard = ({ image, title, summary }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-gray-200 transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            {summary}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 hover:shadow-lg transition duration-300 ease-in-out">
            View Recipe
          </button>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;