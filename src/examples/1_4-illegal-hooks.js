import { useState } from 'react'
import './App.css'

// Rule1: No hook calls outside components
const [something1, setSomething1] = useState('Foo') // App.states[???] = 'Foo'

const App = () => {
  // React relies on the order of the hooks to store the state internally
  const [firstName, setFirstName] = useState('Lisa') // App.states[0] = 'Lisa'
  // Rule2: No nested hook calls
  if('foo' !== 'bar') {
    const [something2, setSomething2] = useState('Foo') // App.states[???] = 'Foo'
  }
  const [lastName, setLastName] = useState('Smith') // App.states[1] = 'Smith'

  const handleNameChange = e => {
    setFirstName(e.target.value) // App.states[0] = e.target.value
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
