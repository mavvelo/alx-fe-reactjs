import React, { useState } from 'react';

const TodoList = () => {
  // Initial todo items
  const [todos, setTodos] = useState([
    { id: 1, text: 'Retrieve the lost artifact', completed: false },
    { id: 2, text: 'Conquer the dragon', completed: false },
    { id: 3, text: 'Brew a potion of courage', completed: false },
  ]);

  // Add new todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Toggle completion status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}>Delete</button>
          </li>
        ))}
      </ul>
      <AddTodoForm onAddTodo={addTodo} />
    </div>
  );
};

const AddTodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoList;