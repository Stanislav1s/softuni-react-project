import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import UserContext from "../../contexts/UserContext.jsx"

export default function Logout() {
    const { logoutHandler } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        logoutHandler()
            .then(() => navigate('/'))
            .catch(() => {
                alert('Problem with logout')
                navigate('/')
            })
    }, [])
    return null
}