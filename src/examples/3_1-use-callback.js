import { useEffect, useState, useCallback } from 'react'
import { getUnreadEmailCount } from './api'
import './App.css'

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')
  const [showUnread, setShowUnread] = useState(true)
  const [unreadEmailCount, setUnreadEmailCount] = useState()

  const handleNameChange = e => setFirstName(e.target.value)

  useEffect(() => {
    const handleEmailFetch = async () => {
      console.log('Fetching email')
      const count = await getUnreadEmailCount(firstName)
      setUnreadEmailCount(count)
    }

    handleEmailFetch()
  }, [firstName])

  const closeOnEscPress = event => { // TODO stable function needed, wrap in useCallback. Remember to add dependencies, which is an empty array
    if (event.key === 'Escape') {
      setShowUnread(false)
    }
  }

  useEffect(() => {
    console.log('Attaching event listener')
    document.addEventListener('keydown', closeOnEscPress)
    return () => document.removeEventListener('keydown', closeOnEscPress)
  }, [closeOnEscPress])

  return (
    <div>
      First name: <input value={firstName} onChange={handleNameChange}/>
      <div className="app__greeting">Hello {firstName}!</div>
      <div>
        {showUnread ? unreadEmailCount !== undefined ? `You have ${unreadEmailCount} unread email` :
          <i>Fetching...</i> : null}
      </div>
    </div>
  )
}

export default App
