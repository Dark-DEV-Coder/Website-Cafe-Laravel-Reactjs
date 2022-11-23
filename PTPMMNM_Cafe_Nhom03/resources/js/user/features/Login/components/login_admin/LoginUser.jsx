import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginUser = () => {
    const navigate = useNavigate()
    const clickLogin = () => {
        navigate("/admin/home")
    }

    const [auth_token, setItems] = React.useState("");

    React.useEffect(() => {
        if (localStorage['auth_token']) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('quyyentk');
            localStorage.removeItem('IDNV');
        }
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
                    localStorage.setItem('idnv', JSON.stringify(response.data.data.MaNV));
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
                            <h4 className="account-title" style={{ fontSize: '24px' }}>ĐĂNG NHẬP</h4>
                            <form>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" value={inputemail} onChange={onChangeEmail} type="text" />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label>Mật khẩu</label>
                                        </div>
                                        <div className="col-auto">
                                            <a className="text-muted" href="/forgot">
                                                Quên mật khẩu ?
                                            </a>
                                        </div>
                                    </div>
                                    <input className="form-control" value={inputpass} onChange={onChangePass} type="password" />
                                </div>
                                <div className="form-group text-center">

                                    <button type="button" className="btn btn-primary account-btn" style={{ fontSize: '20px' }} onClick={Login} >Đăng Nhập </button>
                                </div>
                                <div className="account-footer">
                                    <p>Bạn chưa có tài khoản ? <a href="/register">Đăng Ký</a></p>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginUser