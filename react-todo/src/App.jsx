// src/App.js
import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm'; // Adjust the path based on your project structure
import TodoList from './components/TodoList'; // Importing the TodoList component

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      {/* Render the TodoList component and pass necessary props */}
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;