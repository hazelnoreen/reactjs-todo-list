import React, { useState } from 'react'
import { v4 as uuid} from "uuid"


function TodoForm({ addTodo }) {
    const [list, setList] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e) {
        setList({ ...list, task: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (list.task.trim()) {
            addTodo({ ...list, id: uuid() })
            //reset task input
            setList({ ...list, task: "" })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="task"
                type="text"
                value={list.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default TodoForm