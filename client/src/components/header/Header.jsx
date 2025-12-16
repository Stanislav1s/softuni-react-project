import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";

export default function Header() {
    const { isAuthenticated } = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    My<span>Foody</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">
                                Recipes
                            </Link>
                        </li>
                        {!isAuthenticated
                            ? (<>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </li> </>) :
                            (<>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/favourites">
                                        Favourites
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">
                                        Logout
                                    </Link>
                                </li>
                            </>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}