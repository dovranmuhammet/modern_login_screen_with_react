import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState('')

  return (
    <header>
      <h1>App</h1>
      <input type='text' placeholder='Todo' />
    </header>
  )
}

export default App
