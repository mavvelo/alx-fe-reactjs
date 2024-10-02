import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        if (!title.trim()) {
            errors.title = 'Title is required';
        }
        if (!ingredients.trim()) {
            errors.ingredients = 'Ingredients are required';
        } else if (ingredients.split('\n').length < 2) {
            errors.ingredients = 'At least two ingredients are required';
        }
        if (!steps.trim()) {
            errors.steps = 'Preparation steps are required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log({ title, ingredients, steps });
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <label className="block mb-4">
                Recipe Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded-md" />
                {errors.title && <div className="text-red-500 mt-1">{errors.title}</div>}
            </label>

            <label className="block mb-4">
                Ingredients:
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
                {errors.ingredients && <div className="text-red-500 mt-1">{errors.ingredients}</div>}
            </label>

            <label className="block mb-4">
                Preparation Steps:
                <textarea value={steps} onChange={(e) => setSteps(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
                {errors.steps && <div className="text-red-500 mt-1">{errors.steps}</div>}
            </label>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Submit</button>
        </form>
    );
};

export default AddRecipeForm;