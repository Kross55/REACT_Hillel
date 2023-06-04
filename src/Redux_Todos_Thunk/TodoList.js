import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './actions/todoActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  todo: Yup.string().required('Todo is required'),
});

const TodoList = ({ todos, addTodo, deleteTodo, toggleTodo }) => {
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (values, actions) => {
    addTodo(values.todo);
    actions.resetForm();
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  const handleTodoClick = (id) => {
    toggleTodo(id);
  };

  return (
    <div>
      <Formik
        initialValues={{ todo: '' }}
        validationSchema={validationSchema}
        onSubmit={handleAddTodo}
      >
        <Form>
          <Field type="text" name="todo" placeholder="Enter a todo" />
          <ErrorMessage name="todo" component="div" />
          <button type="submit">Add Todo</button>
        </Form>
      </Formik>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleTodoClick(todo.id)}
          >
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
