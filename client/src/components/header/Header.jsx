import { Link } from "react-router";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    My<span>Recipes</span>
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

                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}