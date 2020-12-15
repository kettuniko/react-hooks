import { useState } from 'react'
import './App.css'

const App = () => {
  // React relies on the order of the hooks to store the state internally
  const [firstName, setFirstName] = useState('Lisa') // App.states[0] = 'Lisa'
  const [lastName, setLastName] = useState('Smith') // App.states[1] = 'Smith'

  const handleNameChange = e => {
    setFirstName(e.target.value) // App.states[0] = e.target.value
    // State update will be skipped if it’s the same value
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value) // App.states[1] = e.target.value
  }

  return (
    <div>
      First name: <input value={firstName} onChange={handleNameChange}/>
      Last name: <input value={lastName} onChange={handleLastNameChange}/>
      <div className="app__greeting">Hello {firstName} {lastName}!</div>
    </div>
  )
}

export default App
