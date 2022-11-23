import React from 'react';
import "./ChangePass.scss";
import "../../../../css/bootstrap2.min.css"
const ChangePass = () => {
    return (
        <div className="maincontainer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-5">

                            <p className="alert alert-success" style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold' }}>Thay đổi mật khẩu</p>
                            <div className="tab-content">

                                <div id="nav-tab-card" className="tab-pane fade show active">

                                    <form role="form">
                                        <div className="form-group">
                                            <label for="username">Mật khẩu cũ</label>
                                            <input type="password" required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="cardNumber">Mật khẩu mới</label>
                                            <input type="password" required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="cardNumber"> Xác nhận mật khẩu mới</label>
                                            <input type="password" required className="form-control" />
                                        </div>
                                        <button style={{ padding: "13px" }} type="button" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm">HOÀN TẤT </button>
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

export default ChangePass
