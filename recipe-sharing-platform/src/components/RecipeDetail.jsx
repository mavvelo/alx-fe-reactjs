import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecipeDetail = ({ match }) => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(`/data.json`); // Adjust the path as needed
                const recipeData = response.data.find(item => item.id === parseInt(match.params.id));
                setRecipe(recipeData);
            } catch (error) {
                console.error('Error fetching recipe data:', error);
            }
        };

        fetchRecipe();
    }, [match.params.id]);

    return (
        <div className="max-w-4xl mx-auto p-4">
            {recipe ? (
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} className="rounded-lg w-full mb-4 shadow-lg" />
                    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
                        <ul className="list-disc pl-4">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="mb-2">{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Cooking Instructions:</h3>
                        <ol className="list-decimal pl-6">
                            {recipe.instructions.map((instruction, index) => (
                                <li key={index} className="mb-2">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RecipeDetail;