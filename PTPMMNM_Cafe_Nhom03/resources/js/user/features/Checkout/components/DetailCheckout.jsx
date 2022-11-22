import React from 'react';
import "./DetailCheckout.scss";
import "../../../../../css/bootstrap2.min.css";
const DetailCheckout = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 ftco-animate">
                        <form action="#" className="billing-form">
                            <h3 className="mb-4 billing-heading">Chi tiết thanh toán</h3>
                            <div className="row align-items-end">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Họ khách hàng</label>
                                        <input type={"text"} className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Tên khách hàng</label>
                                        <input type={"text"} className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Ngày sinh</label>
                                        <input type={"date"} className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Giới tính</label>
                                        <select className="select-css">
                                            <option value='-1'  >Chọn Giới Tính</option>
                                            <option value='0'  >Nam</option>
                                            <option value='1'  >Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-100"></div>

                                <div className="w-100"></div>

                                <div className="w-100"></div>

                                <div className="w-100"></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type={"text"} className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type={"text"} className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="country">Địa chỉ</label>
                                        <div className="select-wrap">
                                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                            <input type={"text"} className="form-control" placeholder="" ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100"></div>

                            </div>
                        </form>
                    </div>
                    <div className="col-xl-5">
                        <div className="row mt-5 pt-3">
                            <div className="col-md-12 d-flex mb-5">
                                <div className="cart-detail cart-total p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Tổng hóa đơn</h3>
                                    <p className="d-flex">
                                        <span>Tổng giá trị sản phẩm</span>
                                        <span>$20.60</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Thuế (VAT)</span>
                                        <span>$0.00</span>
                                    </p>
                                    <hr />
                                    <p className="d-flex total-price">
                                        <span>Tổng cộng</span>
                                        <span>$17.60</span>
                                    </p>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="cart-detail p-3 p-md-4">
                                    {/* <h3 className="billing-heading mb-4">Payment Method</h3> */}
                                    <p><a href="/checkout/OrderCon" className="btn btn-primary py-3 px-4">TIẾP TỤC</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailCheckout
