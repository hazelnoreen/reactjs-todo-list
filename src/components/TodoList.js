import React from 'react'
import Todo from './Todo'


function TodoList({ lists, toggleComplete, deleteTodo }) {
    return (
        <ul>
            {lists.map(list => (
                <Todo 
                    key={list.id} 
                    list={list} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                />
            ))}
        </ul>
    )
}

export default TodoList