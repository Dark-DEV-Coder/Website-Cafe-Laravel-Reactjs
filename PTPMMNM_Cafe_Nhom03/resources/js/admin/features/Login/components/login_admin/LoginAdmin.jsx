import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginAdmin = () => {
    const navigate = useNavigate()
    const clickLogin = () => {
        navigate("/admin/home")
    }

    const [auth_token, setItems] = React.useState("");

    React.useEffect(() => {
        if (localStorage['auth_token'])
            localStorage.removeItem('auth_token');
    }, [auth_token]);

    const [loginuser, setLoginUser] = React.useState(null);
    const [inputemail, setInputEmail] = React.useState("");
    const [inputpass, setInputPass] = React.useState("");
    const onChangeEmail = event => {
        setInputEmail(event.target.value);
    };
    const onChangePass = event => {
        setInputPass(event.target.value);
    };
    async function Login() {
        const user = {
            email: inputemail,
            password: inputpass,
        };
        await axios.post("http://127.0.0.1:8000/api/user/login", user).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                if (response.data.data.MaQuyen == 'KH') {
                    alert("Tài khoản này không có quyền truy cập");
                }
                else {
                    setLoginUser(response.data);
                    localStorage.setItem('auth_token', JSON.stringify(response.data.data.auth_token));
                    localStorage.setItem('quyentk', JSON.stringify(response.data.data.MaQuyen));
                    alert(JSON.stringify(response.data.message));
                    window.location.assign("http://127.0.0.1:8000/admin/home");
                    //headers: { 'Authorization': 'Bearer ' + token }           
                }
            }

        });
    }
    return (
        <div className="main-wrapper" >
            <div className="account-content">
                <div className="container">
                    <div className="account-box">
                        <div className="account-wrapper">
                            <h3 className="account-title">Login</h3>
                            <form>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="form-control" value={inputemail} onChange={onChangeEmail} type="text" />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Password</label>
                                        </div>
                                        <div className="col-auto">
                                            <a className="text-muted" href="/forgot">
                                                Forgot password?
                                            </a>
                                        </div>
                                    </div>
                                    <input className="form-control" value={inputpass} onChange={onChangePass} type="password" />
                                </div>
                                <div className="form-group text-center">

                                    <button type="button" className="btn btn-primary account-btn" onClick={Login} >Login</button>
                                </div>
                                <div className="account-footer">
                                    <p>Don't have an account yet? <a href="/register">Register</a></p>
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