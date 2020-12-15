import React, { useReducer } from 'react'

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
  const { state: { user, isLoggedIn }, dispatch } = useUser()
  return (
    <div className="header">
      {isLoggedIn ?
        <>
          {user && `Hello ${user}`}
          <button onClick={() => dispatch({ type: SET_NAME, value: 'BATMAN' })}>I'm batman</button>
          <button onClick={() => dispatch({ type: LOGOUT })}>Logout</button>
        </> : null
      }
    </div>
  )
}

const initialState = { user: 'Bart', isLoggedIn: true }

const LOGOUT = 'LOGOUT'
const SET_NAME = 'SET_NAME'

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, isLoggedIn: false }
    case 'SET_NAME':
      return { ...state, user: action.value }
    default:
      throw new Error()
  }
}

// Rule of thumb: avoid putting much data to an app-wide global context, it's better to have sub-contexts and their own reducers!
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Header/>
    </UserContext.Provider>
  )
}

export default App
