import React, { useState } from 'react'
import { data } from './data'

export default function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('David')

  const plusCount = () => {
    setCount(count + 1)
  }

  const minusCount = () => {
    setCount(count - 1)
  }

  return (
    <div className='app'>
      <h1>Counter: {count}</h1>
      <button onClick={plusCount}>Increase</button>
      <button onClick={minusCount}>Decrease</button>
      <h1 onClick={() => setName('Myrat')}>{name}</h1>
      <button>Add</button>
    </div>
  )
}
