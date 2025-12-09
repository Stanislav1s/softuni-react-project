import { useNavigate } from "react-router"

export default function Login({
    onLogin
}) {
    const navigate = useNavigate()
    const submitAction = (formData) => {
        const email = formData.get('email')
        const password = formData.get('password')

        if (!email || !password) {
            alert('Email and password is required!')
        }

        try {
            onLogin(email, password)
            navigate('/')
        }
        catch (err) {
            alert(err.message)
        }

    }
    return (<>
        <div className="container login-wrapper">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <div className="login-card">
                        <h2 className="fw-bold text-center mb-4">Welcome Back</h2>
                        <p className="text-center mb-4 text-muted">
                            Login to your Foody account
                        </p>
                        <form action={submitAction}>
                            {/* Email */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="example@mail.com"
                                    required=""
                                    name="email"
                                />
                            </div>
                            {/* Password */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    required=""
                                    name="password"
                                />
                            </div>
                            {/* Login Button */}
                            <div className="d-grid mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {/* Extra Links */}
                        <div className="text-center mt-4">
                            <p className="mb-1">
                                Don't have an account?{" "}
                                <a href="register.html" className="text-primary fw-semibold">
                                    Register here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}