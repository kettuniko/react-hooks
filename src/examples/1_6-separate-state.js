import { useState } from 'react'
import './App.css'

const App = () => {
  // General recommendation from React devs:
  // Split state into multiple state variables based on which values tend to change together.
  // So, not like this
  const [state, setState] = useState({firstName: 'Lisa', lastName: 'Smith'})
  const {firstName, lastName} = state

  // Difference to class component setState is that the class equivalent does merging by default
  const handleNameChange = e => {
    setState({...state, firstName: e.target.value})
  }

  const handleLastNameChange = e => {
    setState({...state, lastName: e.target.value})
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
