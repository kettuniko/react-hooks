import { useEffect, useState, useMemo } from 'react'
import { getUnreadEmailCount } from './api'
import './App.css'

const getComplicatedOpts = name => {
  console.log('long running!')
  let i
  for (i = 0; i < name.length * 999999; i++) {
  }
}

const App = () => {
  const [firstName, setFirstName] = useState('Lisa')
  const [darkModeOn, setDarkModeOn] = useState(false)
  const [unreadEmailCount, setUnreadEmailCount] = useState()
  const fetchOpts = getComplicatedOpts(firstName) // TODO only recreate based on dependencies by wrapping to useMemo and having firstName as a dependency

  const handleNameChange = e => setFirstName(e.target.value)
  const handleCheckboxChange = () => setDarkModeOn(!darkModeOn)

  useEffect(() => {
    const handleEmailFetch = async () => {
      console.log('Fetching email')
      const count = await getUnreadEmailCount(firstName)
      setUnreadEmailCount(count, fetchOpts)
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
