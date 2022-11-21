import React from 'react';
import "./ForgotPassword.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../../../css/bootstrap2.min.css"
const ForgotPassword = () => {
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
                                            <input type="text" name="username" placeholder="Vui lòng nhập email ..." required class="form-control" />
                                        </div>
                                        <button type="button" class="btxacnhan subscribe btn btn-primary btn-block rounded-pill shadow-sm" style={{
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
