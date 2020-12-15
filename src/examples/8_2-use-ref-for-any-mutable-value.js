import { useState, useEffect, useRef } from 'react'
import './App.css'

const usePrevious = value => {
  const ref = useRef()
  console.log('Ref created')
  useEffect(() => {
    ref.current = value
    console.log('Ref updated')
  })
  console.log('Ref returned')
  return ref.current
}

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')
  const previousName = usePrevious(firstName)

  const handleNameChange = e => {
    setFirstName(e.target.value)
  }

  return (
    <div>
      First name: <input value={firstName} onChange={handleNameChange}/>
      <div className="app__greeting">Hello {firstName}!</div>
      It was {previousName}
    </div>
  )
}

export default App
