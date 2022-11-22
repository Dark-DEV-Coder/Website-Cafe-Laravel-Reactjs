import React from 'react';
import "./DetailCart.scss";
import "../../../../../css/bootstrap2.min.css";
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import { useState } from 'react';
import cf1 from "./cf1.jpg";
import cf2 from "./cf2.jpg";
import cf5 from "./cf5.jpg";
const DetailCart = () => {
    const [valueinit, setValueinit] = useState(1);
    const handleAdd = () => {
        setValueinit(valueinit + 1);
    }
    const handleDelete = () => {
        { valueinit < 0 || valueinit === 0 ? setValueinit(1) : setValueinit(valueinit - 1); }

    }
    return (
        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
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
                                            <h5>Vegetable’s Package</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            $55.00
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input type="number" />
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
                                                    <input type="number" />
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
                                                    <input type="number" />
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
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="/shop" className="primary-btn cart-btn">TIẾP TỤC MUA HÀNG</a>
                            <a href="#" className="primary-btn cart-btn cart-btn-right" style={{ marginTop: '-10px' }} >
                                <RotateLeftOutlinedIcon style={{ fontSize: '22px', marginRight: '5px' }} />
                                Cập Nhật Giỏ Hàng</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout">
                            <h5>Thanh toán</h5>
                            <ul>
                                <li>Tổng tiền <span>$454.98</span></li>
                            </ul>
                            <a href="#" className="primary-btn">TIẾP TỤC THANH TOÁN</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailCart
