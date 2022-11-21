import React from 'react';
import "./ForgotPassword.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../../../css/bootstrap2.min.css"
import axios from 'axios';
const ForgotPassword = () => {

    const [inputemail, setInputEmail] = React.useState("");
    const onChangeEmail = event => {
        setInputEmail(event.target.value);
    };
    async function ForgotPassword() {
        const user = {
            email: inputemail,
        };
        await axios.post("http://127.0.0.1:8000/api/reset-password", user).then((response) => {
            alert(response.data.message);
        });
    }
    return (
        <div className="maincontainer">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-7 mx-auto">
                        <div class="bg-white rounded-lg shadow-sm p-5">

                            <h3>Quên mật khẩu</h3>

                            <div class="tab-content">

                                <div id="nav-tab-card" class="tab-pane fade show active">
                                    <form role="form">
                                        <div class="form-group">
                                            <label for="username">Email</label>
                                            <input type="text" value={inputemail} onChange={onChangeEmail} placeholder="Vui lòng nhập email ..." required class="form-control" />
                                        </div>
                                        <button onClick={ForgotPassword} type="button" class="btxacnhan subscribe btn btn-primary btn-block rounded-pill shadow-sm" style={{
                                            background: ""
                                        }}> Xác nhận  </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
