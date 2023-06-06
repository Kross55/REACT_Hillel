import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addTodo } from '../actions/todoActions';

const TodoForm = ({ addTodo }) => {
  const initialValues = {
    text: '',
  };

  const validationSchema = Yup.object({
    text: Yup.string().required('Please enter a todo.'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addTodo(values.text);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className="form">
        <Field type="text" name="text" placeholder="Enter todo" />
        <button 
            className="form-buttons" 
            type="submit">
                Add Todo
        </button>
        </div>
        <ErrorMessage 
            name="text" 
            component="div"
            className='error' />
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);
