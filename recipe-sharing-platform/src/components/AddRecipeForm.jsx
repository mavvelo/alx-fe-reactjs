import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Use steps instead of instructions
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here
    const newErrors = {};
    if (!title) {
      newErrors.title = 'Title is required';
    }
    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    }
    if (!steps) {
      newErrors.steps = 'Steps are required'; // Use steps instead of instructions
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit the form data here (e.g., send it to a server)
    console.log('Form submitted:', { title, ingredients, steps });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input type="text" id="title" className="w-full border rounded-lg px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">Ingredients</label>
        <textarea id="ingredients" className="w-full border rounded-lg px-3 py-2" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 font-bold mb-2">Steps</label>
        <textarea id="steps" className="w-full border rounded-lg px-3 py-2" value={steps} onChange={(e) => setSteps(e.target.value)}></textarea>
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">Submit</button>
    </form>
  );
}

export default AddRecipeForm;