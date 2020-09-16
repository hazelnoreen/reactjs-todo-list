import React, { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [lists, setLists] = useState([])

  useEffect(() => {
    const storageLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageLists) {
      setLists(storageLists)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lists))
  }, [lists])

  function addTodo(list) {
    setLists([list, ...lists])
  }

  function toggleComplete(id) {
    setLists(
      lists.map(list => {
        if (list.id === id) {
          return {
            ...list,
            completed: !list.completed
          }
        }
        return list
      })
    )
  }

  function deleteTodo(id) {
    setLists(lists.filter(list => list.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
          <TodoForm addTodo={addTodo} />
          <TodoList 
            lists={lists} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}
          />
      </header>
    </div>
  )
}

export default App
