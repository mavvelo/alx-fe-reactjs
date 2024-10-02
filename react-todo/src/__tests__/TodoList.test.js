import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList correctly with initial state', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(2); // Two initial todos
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', { name: /add todo/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3);
    expect(todoItems[2]).toHaveTextContent('New Todo');
  });

  test('toggles a todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByRole('button', { name: /delete/i })[0];

    fireEvent.click(deleteButton);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(1);
  });
});
