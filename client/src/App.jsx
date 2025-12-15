import { Route, Routes } from 'react-router'
import { useContext } from 'react'
import Home from './components/home/Home.jsx'
import Header from './components/header/Header.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import Register from './components/register/register.jsx'
import Login from './components/login/login.jsx'
import Details from './components/details/details.jsx'
import Favourites from './components/favourites/Favourites.jsx'
import Edit from './components/edit/edit.jsx'
import Logout from './components/logout/Logout.jsx'
import UserContext from './contexts/UserContext.jsx'


function App() {
  const { user } = useContext(UserContext)
  return (
    <>

      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/:recipeId/details' element={<Details user={user} />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/:recipeId/edit' element={<Edit />} />
      </Routes>

    </>
  )
}
export default App
