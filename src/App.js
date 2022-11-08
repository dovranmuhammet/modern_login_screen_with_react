import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState('')
  const [inputValue, setInputValue] = useState('')

  const addTodo = (e) => {
    console.log('Add')
    e.preventDefault()
  }

  const changeTodo = () => {
    console.log('Input Change')
  }

  return (
    <header style={{ background: 'green' }}>
      <h1>App</h1>
      <input
        onChange={changeTodo}
        type='text'
        placeholder='Todo'
        imputValue={todos}
      />
      <button onClick={addTodo}>Add</button>
    </header>
  )
}

export default App
