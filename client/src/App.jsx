import { Route, Router, Routes } from 'react-router'
import { useState } from 'react'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Register from './components/register/register.jsx'
import Login from './components/login/login.jsx'
import Details from './components/details/details.jsx'
import Favourites from './components/favourites/Favourites.jsx'
import Edit from './components/edit/edit.jsx'
import Logout from './components/logout/Logout.jsx'
import UserContext from './contexts/UserContext.js'

function App() {
  const [user, setUser] = useState(null)


  const registerHandler = async (email, password) => {

    const newUser = { email, password };

    const response = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    const result = await response.json()
    console.log(result);

    setUser(result);

  }


  const loginHandler = (email, password) => {
    const user = registeredUsers.find(u => u.email === email && u.password === password)
    if (!user) {
      throw new error('Invalid username or password!')
    }
    setUser(user)
  }
  const logoutHandler = () => {
    setUser(null)
  }
  const userContextValues = {
    user,
    isAuthenticated: !!user?.accesToken,
    registerHandler,
    loginHandler,
    logoutHandler
  }
  return (
    <>
      <UserContext.Provider value={userContextValues}>
        <Header user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login onLogin={loginHandler} />} />
          <Route path='/logout' element={<Logout onLogout={logoutHandler} />} />
          <Route path='/:recipeId/details' element={<Details />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/:recipeId/edit' element={<Edit />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}
export default App
