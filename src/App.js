import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState('')

  const addTodo = () => {
    console.log('Add')
  }

  const changeTodo = () => {
    console.log('Input Change')
  }

  return (
    <header>
      <h1>App</h1>
      <input onChange={changeTodo} type='text' placeholder='Todo' />
      <button onClick={addTodo}>Add</button>
    </header>
  )
}

export default App
