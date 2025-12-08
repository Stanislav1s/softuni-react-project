
import { useNavigate } from 'react-router'
import './register.css'
export default function Register({ onRegister }
) {
    const navigate = useNavigate()
    const registerSubmit = (formData) => {

        const email = formData.get('email')
        const password = formData.get('password')
        const confirmPass = formData.get('confirmPass')

        if (!email || !password) {
            alert('Email and password are required!')
        }
        if (password !== confirmPass) {
            alert('password missmatch')
        }
        try {
            onRegister(email, password)
            navigate('/')
        }
        catch (err) {
            alert(err.message)
        }
    }
    return (<>
        <div className="container register-wrapper">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <div className="register-card">
                        <h2 className="fw-bold text-center mb-4">Create an Account</h2>
                        <p className="text-center mb-4 text-muted">
                            Join Foody and share your recipes
                        </p>
                        <form action={registerSubmit}>
                            {/* Email */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="example@mail.com"
                                    required=""
                                    name='email'

                                />
                            </div>
                            {/* Password */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Create password"
                                    required=""
                                    name='password'
                                />
                            </div>
                            {/* Confirm Password */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repeat password"
                                    required=""
                                    name='confirmPass'
                                />
                            </div>


                            {/* Register Button */}
                            <div className="d-grid mt-4">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        {/* Login Link */}
                        <div className="text-center mt-4">
                            <p className="mb-1">
                                Already have an account?{" "}
                                <a href="login.html" className="text-primary fw-semibold">
                                    Login here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}