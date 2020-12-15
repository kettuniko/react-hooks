import { useEffect, useState } from 'react'
import { getUnreadEmailCount } from './api'
import './App.css'

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')
  const [unreadEmailCount, setUnreadEmailCount] = useState()

  const handleNameChange = e => setFirstName(e.target.value)

  // Effects are consistent by default
  useEffect(() => {
    // Can't use async-await directly in the useEffect callback, because the return value has a special meaning
    const handleEmailFetch = async () => {
      console.log('Fetching email')
      const count = await getUnreadEmailCount(firstName)
      setUnreadEmailCount(count)
    }

    handleEmailFetch()
  })

  return (
    <div>
      First name: <input value={firstName} onChange={handleNameChange}/>
      <div className="app__greeting">Hello {firstName}!</div>
      {unreadEmailCount !== undefined ? `You have ${unreadEmailCount} unread email` : <i>Fetching...</i>}
    </div>
  )
}

export default App
