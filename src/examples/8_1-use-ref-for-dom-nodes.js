import { useState, useRef } from 'react'
import './App.css'

const App = () => {
  const inputRef = useRef()
  const [firstName, setFirstName] = useState('Lisa')

  const handleNameChange = e => {
    setFirstName(e.target.value)
  }

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      First name: <input ref={inputRef} value={firstName} onChange={handleNameChange}/>
      <div className="app__greeting">Hello {firstName}!</div>
      <button onClick={handleClick}>Gain focus</button>
    </div>
  )
}

export default App
