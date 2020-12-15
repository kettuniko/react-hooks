import { useEffect, useState, useDebugValue } from 'react'
import { getUnreadEmailCount } from './api'
import './App.css'

const useLabeledState = (label, initialState) => {
  useDebugValue(label)
  return useState(initialState)
}

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')
  const [unreadEmailCount, setUnreadEmailCount] = useState()
  const [darkModeOn, setDarkModeOn] = useState(false)
  // const [firstName, setFirstName] = useLabeledState('Firstname', 'Lisa')
  // const [unreadEmailCount, setUnreadEmailCount] = useLabeledState('Unread count')
  // const [darkModeOn, setDarkModeOn] = useLabeledState('Dark mode', false)

  const handleNameChange = e => setFirstName(e.target.value)
  const handleCheckboxChange = () => setDarkModeOn(!darkModeOn)

  useEffect(() => {
    const handleEmailFetch = async () => {
      console.log('Fetching email')
      const count = await getUnreadEmailCount(firstName)
      setUnreadEmailCount(count)
    }

    handleEmailFetch()
  }, [firstName, setUnreadEmailCount])

  return (
    <div className={darkModeOn ? 'dark' : ''}>
      First name: <input value={firstName} onChange={handleNameChange}/>
      <div className="app__greeting">Hello {firstName}!</div>
      Use dark mode: <input type="checkbox" checked={darkModeOn} onChange={handleCheckboxChange}/>
      <div>
        {unreadEmailCount !== undefined ? `You have ${unreadEmailCount} unread email` : <i>Fetching...</i>}
      </div>
    </div>
  )
}

export default App
