import { useEffect, useState } from 'react'
import { getUnreadEmailCount } from './api'
import './App.css'

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')
  const [unreadEmailCount, setUnreadEmailCount] = useState()
  const [darkModeOn, setDarkModeOn] = useState(false)

  const handleNameChange = e => setFirstName(e.target.value)
  const handleCheckboxChange = () => setDarkModeOn(!darkModeOn)

  useEffect(() => {
    const handleEmailFetch = async () => {
      console.log('Fetching email')
      const count = await getUnreadEmailCount(firstName)
      setUnreadEmailCount(count)
    }

    handleEmailFetch()
  }) // TODO Updates with dark mode, which is unwanted. Pls fix by passing a second parameter, an array of dependencies, [firstName]!

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
