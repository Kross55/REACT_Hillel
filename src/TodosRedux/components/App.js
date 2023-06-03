import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div className="todo-list">
        <VisibleTodoList />
        <AddTodo />
        <Footer />
    </div>
);

export default App;