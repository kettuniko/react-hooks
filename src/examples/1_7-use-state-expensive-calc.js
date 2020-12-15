import { useState } from 'react'
import './App.css'

const calculateExpensiveInitialState = name => {
  console.log('long running!')
  let i
  for (i = 0; i < 9999999; i++) {
  }
  return name
}

const App = () => {
  // Lazy initializer
  const [firstName, setFirstName] = useState(calculateExpensiveInitialState('Lisa')) // TODO heavy calculation, pass a function to useState, useState(() => yourFn())

  const handleNameChange = e => {
    setFirstName(e.target.value)
  }

  return (
    <div>
      First name: <input value={firstName} onChange={handleNameChange}/>
      <div className="app__greeting">Hello {firstName}!</div>
    </div>
  )
}

export default App
