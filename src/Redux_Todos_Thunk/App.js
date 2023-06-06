import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { fetchTodos } from './actions/todoActions';

const App = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default connect(null, { fetchTodos })(App);
