
import { Link, useNavigate } from 'react-router'
import useForm from '../../hooks/useForm.js'
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext.jsx';


export default function Register() {
    const navigate = useNavigate();
    const { registerHandler } = useContext(UserContext)


    const registerSubmitHandler = async (values) => {
        const { email, password, confirmPass } = values;


        if (!email || !password) {
            alert('Email and password are required!')
        }
        if (password !== confirmPass) {
            alert('password missmatch')
        }
        try {
            await registerHandler(email, password)
            navigate('/')
        }
        catch (err) {
            alert(err.message)
        }
    }
    const {
        register, formAction } = useForm(registerSubmitHandler, {
            email: '',
            password: '',
            confirmPass: '',

        })
    return (<>
        <div className="container register-wrapper">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <div className="register-card">
                        <h2 className="fw-bold text-center mb-4">Create an Account</h2>
                        <p className="text-center mb-4 text-muted">
                            Join Foody and share your recipes
                        </p>
                        <form action={formAction}>
                            {/* Email */}
                            <div className="mb-4">
                                <label className="form-label fw-semibold">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="example@mail.com"
                                    required=""
                                    {...register('email')}

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
                                    {...register('password')}
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
                                    {...register('confirmPass')}
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
                                <Link to="/login" className="text-primary fw-semibold">
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}