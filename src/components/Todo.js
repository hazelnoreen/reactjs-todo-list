import React from 'react'


function Todo({ list, toggleComplete, deleteTodo }) {

    function handleCheckbox() {
        toggleComplete(list.id)
    }

    function handleDelete() {
        deleteTodo(list.id)
    }

    return (
        <div style={{ display: "flex" }}>
            <input type="checkbox" onClick={handleCheckbox} />
            <li 
                style={{ 
                    textDecoration: list.completed ? "line-through" : null,
                    color: "red"
                }}>
                {list.task}
            </li>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Todo