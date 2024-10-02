import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;