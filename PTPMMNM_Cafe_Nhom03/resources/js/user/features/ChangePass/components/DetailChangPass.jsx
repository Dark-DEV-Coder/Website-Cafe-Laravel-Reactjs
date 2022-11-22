import React from 'react';
import "./DetailChangPass.scss";
import "../../../../../css/bootstrap2.min.css";
const DetailChangPass = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 ftco-animate">
                        <form action="#" className="billing-form">
                            <h3 className="mb-4 billing-heading">Đổi mật khẩu</h3>
                            <div className="row align-items-end">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Mật khẩu hiện tại</label>
                                        <input type={"password"} className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Mật khẩu mới</label>
                                        <input type={"password"} className="form-control" placeholder="" />
                                    </div>

                                </div>
                                <div className="col-md-6">


                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Xác nhận mật khẩu mới</label>
                                        <input type={"password"} className="form-control" placeholder="" />
                                    </div>

                                </div>
                                <div className="w-100"></div>

                            </div>
                        </form>
                    </div>
                    <div className="col-xl-5">
                        <div className="row mt-5 pt-5" style={{ width: 'max-content' }}>
                            <div className="col-md-12">
                                {/* <h3 className="billing-heading mb-4">Payment Method</h3> */}
                                <p><a href="/checkout/OrderCon" className="btnChangPass btn btn-primary py-3 px-4">HOÀN TẤT</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailChangPass
