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
function App() {

  const [user, setUser] = useState(null)

  const registerHandler = (email) =>
    setUser({ email })
  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register user={user} onRegister={registerHandler} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:id/details' element={<Details />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>

    </>
  )
}
export default App
