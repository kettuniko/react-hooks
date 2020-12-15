import React, { useState, useContext } from 'react'

const UserContext = React.createContext()
UserContext.displayName = 'UserContext'

const Header = () => {
  const { user, setUser } = useContext(UserContext)
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
    <UserContext.Provider value={{ user, setUser }}>
      <Header/>
    </UserContext.Provider>
  )
}

export default App
