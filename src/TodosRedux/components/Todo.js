import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <div className="todo">
        <span
            onClick={onClick}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
            className="todo-text"
        >
            {text}
        </span>
        <button onClick={() => { }}>Remove ToDo</button>
    </div>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo