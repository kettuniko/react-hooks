import React, { useState } from 'react'

const UserContext = React.createContext()
UserContext.displayName = 'UserContext'

const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContext Provider`)
  }
  return context
}

const Header = () => {
  const { user, setUser } = useUser()
  return (
    <div className="header">
      {user ?
        <>
          {user && `Hello ${user}`}
          <button onClick={() => setUser(null)}>Logout</button>
        </> : null
      }
    </div>
  )
}

const App = () => {
  const [user, setUser] = useState('Bart')
  return (
    // "forgotten" context
      <Header/>
  )
}

export default App
