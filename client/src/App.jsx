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
function App() {
  const [registeredUsers, setRegisteredUsers] = useState([])
  const [user, setUser] = useState(null)


  const registerHandler = (email, password) => {
    if (registeredUsers.some(user => user.email === email)) {
      throw new Error("Email is alredy taken");
    }
    const newUser = { email, password };
    setRegisteredUsers(state => [...state, newUser]);
    setUser(newUser);
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

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register onRegister={registerHandler} />} />
        <Route path='/login' element={<Login onLogin={loginHandler} />} />
        <Route path='/logout' element={<Logout onLogout={logoutHandler} />} />
        <Route path='/:id/details' element={<Details />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>

    </>
  )
}
export default App
