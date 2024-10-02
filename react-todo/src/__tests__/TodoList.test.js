import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList component', () => {
  test('renders todos and allows a todo to be deleted', () => {
    render(<TodoList />);
    
    // Ensure initial todos are rendered
    expect(screen.getByText('Retrieve the lost artifact')).toBeInTheDocument();
    expect(screen.getByText('Conquer the dragon')).toBeInTheDocument();
    expect(screen.getByText('Brew a potion of courage')).toBeInTheDocument();

    // Simulate clicking the delete button for the first todo
    fireEvent.click(screen.getAllByText('Delete')[0]);

    // Check if the todo item is removed from the document
    expect(screen.queryByText('Retrieve the lost artifact')).not.toBeInTheDocument();
  });

  test('allows a todo to be added', () => {
    render(<TodoList />);
    
    // Add a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo...'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));

    // Ensure the new todo is rendered
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('allows a todo to be toggled between completed and not completed', () => {
    render(<TodoList />);
    
    // Ensure the todo is initially not completed
    expect(screen.getByText('Retrieve the lost artifact')).toHaveStyle('text-decoration: none');

    // Toggle the todo
    fireEvent.click(screen.getByText('Retrieve the lost artifact'));

    // Ensure the todo is now completed
    expect(screen.getByText('Retrieve the lost artifact')).toHaveStyle('text-decoration: line-through');

    // Toggle the todo again
    fireEvent.click(screen.getByText('Retrieve the lost artifact'));

    // Ensure the todo is back to not completed
    expect(screen.getByText('Retrieve the lost artifact')).toHaveStyle('text-decoration: none');
  });
});