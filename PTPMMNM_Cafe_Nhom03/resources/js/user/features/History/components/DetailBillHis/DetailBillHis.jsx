import React from 'react';
import "./DetailBillHis.scss";
import "../../../../../../css/bootstrap2.min.css";
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import { useState } from 'react';
import cf1 from "./cf1.jpg";
import cf2 from "./cf2.jpg";
import cf5 from "./cf5.jpg";
const DetailBillHis = () => {
    return (
        <section className="shoping-cart spad" style={{ border: 'solid', width: '70%', marginLeft: '15%' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <h3 className='xacnhan' style={{ textAlign: 'center', marginTop: '-50px' }}>Xác nhận đơn hàng</h3>
                            <table style={{ marginTop: '40px' }}>
                                <thead>
                                    <tr>
                                        <th className="shoping__product" style={{ textAlign: 'left' }}>Sản phẩm</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="shoping__cart__item">
                                            <img src={cf1} alt="" />
                                            <h5>Vegetables Package</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            $55.00
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty" >
                                                    <input type="number" disabled='true' />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            $110.00
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className="icon_close"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="shoping__cart__item">
                                            <img src={cf2} alt="" />
                                            <h5>Fresh Garden Vegetable</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            $39.00
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="number" disabled='true' />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            $39.99
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className="icon_close"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="shoping__cart__item">
                                            <img src={cf5} alt="" />
                                            <h5>Organic Bananas</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            $69.00
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="number" disabled='true' />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            $69.99
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span className="icon_close"></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailBillHis
