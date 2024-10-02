// src/components/AddTodoForm.js
import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to add the new todo (passed as a prop)
    onAddTodo(newTodo);
    // Clear the input field
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo..."
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;