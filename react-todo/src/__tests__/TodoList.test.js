import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders initial todos', () => {
  render(<TodoList />);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);
});

test('adds a new todo', () => {
  render(<TodoList />);

  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  fireEvent.change(input, { target: { value: 'Complete this task' } });
  fireEvent.click(button);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);
  expect(todoItems[2].textContent).toContain('Complete this task');
});

// Add more tests for toggling and deleting todos