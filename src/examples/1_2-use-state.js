import { useState } from 'react'
import './App.css'

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')

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
