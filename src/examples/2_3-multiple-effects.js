import { useEffect, useState } from 'react'
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

  const closeOnEscPress = (event) => { // We'll fix this soon
    if (event.key === 'Escape') {
      setShowUnread(false)
    }
  }

  // Another useEffect in the same component! (So not to be confused with lifecycle methods with classes which are limited to 1)
  // With classes you'd use componentDidMount, componentDidUpdate, componentWillUnmount, everything in one package now
  useEffect(() => {
    console.log('Attaching event listener')
    document.addEventListener('keydown', closeOnEscPress)

    // Runs on each update too, otherwise could cause bugs "subscribed to something that was defined based on previous state"
    return () => document.removeEventListener('keydown', closeOnEscPress)
  }, [closeOnEscPress]) // Rule 3: deps are important, react-hook eslint-rules help

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
