function RecipeCard({ recipe }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium mb-2">{recipe.title}</h3>
          <p className="text-gray-700">{recipe.summary}</p>
        </div>
      </div>
    );
  }
  
  export default RecipeCard;