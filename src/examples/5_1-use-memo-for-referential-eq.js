import { useEffect, useState, useMemo } from 'react'
import { getUnreadEmailCount } from './api'
import './App.css'

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')
  const [darkModeOn, setDarkModeOn] = useState(false)
  const [unreadEmailCount, setUnreadEmailCount] = useState()
  const fetchOpts = { token: 'asd' } // TODO "unstable", wrap in useMemo with an empty dependency array

  const handleNameChange = e => setFirstName(e.target.value)
  const handleCheckboxChange = () => setDarkModeOn(!darkModeOn)

  useEffect(() => {
    const handleEmailFetch = async () => {
      console.log('Fetching email')
      const count = await getUnreadEmailCount(firstName, fetchOpts)
      setUnreadEmailCount(count)
    }

    handleEmailFetch()
  }, [firstName, fetchOpts])

  return (
    <div>
      First name: <input value={firstName} onChange={handleNameChange}/>
      <div className="app__greeting">Hello {firstName}!</div>
      Use dark mode: <input type="checkbox" checked={darkModeOn} onChange={handleCheckboxChange}/>
      <div>
        {unreadEmailCount !== undefined ? `You have ${unreadEmailCount} unread email` :
          <i>Fetching...</i>}
      </div>
    </div>
  )
}

export default App
