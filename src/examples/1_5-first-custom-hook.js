import { useState } from 'react'
import './App.css'

// Reusing stateful logic
const useInput = initialState => {
  const [state, setState] = useState(initialState)
  const handleFormEvent = e => setState(e.target.value)
  return [state, handleFormEvent] // It's your api, can return anything
}

const App = () => {
  const [firstName, setFirstName] = useInput('Lisa')
  const [lastName, setLastName] = useInput('Smith')

  return (
    <div>
      First name: <input value={firstName} onChange={setFirstName}/>
      Last name: <input value={lastName} onChange={setLastName}/>
      <div className="app__greeting">Hello {firstName} {lastName}!</div>
    </div>
  )
}

export default App
