import React from "react";
import { useNavigate } from 'react-router-dom';
const LoginAdmin = () => {
    const navigate = useNavigate()
    const clickLogin = () => {
        navigate("/admin/home")
    }
    return (
        <div className="main-wrapper" >
            <div className="account-content">
                <div className="container">
                    <div className="account-box">
                        <div className="account-wrapper">
                            <h3 className="account-title">Login</h3>
                            <form action="index.html">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Password</label>
                                        </div>
                                        <div className="col-auto">
                                            <a className="text-muted" href="forgot-password.html">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <input className="form-control" type="password" />
                                </div>
                                <div className="form-group text-center">

                                    <button className="btn btn-primary account-btn" onClick={() => clickLogin()} >Login</button>
                                </div>
                                <div className="account-footer">
                                    <p>Don't have an account yet? <a href="register.html">Register</a></p>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginAdmin