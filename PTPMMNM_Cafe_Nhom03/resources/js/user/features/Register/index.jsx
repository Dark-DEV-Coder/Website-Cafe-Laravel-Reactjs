import React from 'react';
import "./Register.scss"
const Register = () => {
    return (
        <div className="maincontainer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-5">

                            <h3 style={{ textAlign: 'center' }}>Đăng ký tài khoản</h3>

                            <div className="tab-content">

                                <div id="nav-tab-card" className="tab-pane fade show active">
                                    <form role="form">
                                        <div className="form-group">
                                            <label for="username">Email</label>
                                            <input type="text" name="username" placeholder="Jassa@gmail.com ..." required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Mật khẩu</label>
                                            <input type="password" required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Xác nhận mật khẩu</label>
                                            <input type="password" required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Họ</label>
                                            <input type="text" name="hokh" placeholder="Nguyễn Văn Minh ..." required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Tên</label>
                                            <input type="text" name="tenkh" placeholder="Đức ..." required className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label for="ngaysinh">Ngày sinh</label>
                                            <input type="date" name="tenkh" placeholder="Đức ..." required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Giới tính</label>
                                            <select value={12} className="select-css" >
                                                <option value='-1'>Chọn giới tính</option>
                                                <option value='0'>Nam</option>
                                                <option value='1'>Nữ</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Số điện thoại</label>
                                            <input type="text" name="tenkh" placeholder="09632719 ..." required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Địa chỉ</label>
                                            <input type="text" name="tenkh" placeholder="abc/1a,HCM ..." required className="form-control" />
                                        </div>
                                        <button type="button" className=" buttonRis subscribe btn btn-primary btn-block rounded-pill shadow-sm"> ĐĂNG KÝ  </button>
                                    </form>
                                </div>


                                <div id="nav-tab-paypal" className="tab-pane fade">
                                    <p>Paypal is easiest way to pay online</p>
                                    <p>
                                        <button type="button" className="btn btn-primary rounded-pill"><i className="fa fa-paypal mr-2"></i> Log into my Paypal</button>
                                    </p>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                                <div id="nav-tab-bank" className="tab-pane fade">
                                    <h6>Bank account details</h6>
                                    <dl>
                                        <dt>Bank</dt>
                                        <dd> THE WORLD BANK</dd>
                                    </dl>
                                    <dl>
                                        <dt>Account number</dt>
                                        <dd>7775877975</dd>
                                    </dl>
                                    <dl>
                                        <dt>IBAN</dt>
                                        <dd>CZ7775877975656</dd>
                                    </dl>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
