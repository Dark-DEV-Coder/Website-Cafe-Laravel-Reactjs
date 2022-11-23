import React from 'react';
import "./DetailCart.scss";
import "../../../../../css/bootstrap2.min.css";
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import { useState } from 'react';
import cf1 from "./cf1.jpg";
import cf2 from "./cf2.jpg";
import cf5 from "./cf5.jpg";
const DetailCart = () => {
    const [cart, SetCart] = React.useState([]);
    const [total, SetTotal] = React.useState("");
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                if (localStorage['cart']){
                    let sp = JSON.parse(localStorage.getItem('cart'));
                    SetCart(sp);
                    let t= 0;                     
                    for (let i=0;i<sp.length;i++){
                        t+=(sp[i].productcount * sp[i].productprice);
                    }
                    SetTotal(t);
                }
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();
    }, []);    
    return (
        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <h3 style={{ textAlign: 'center', marginTop: '-50px' }}>Giỏ hàng</h3>
                            <table style={{ marginTop: '30px' }}>
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
                                    {cart.map((item) => (
                                            <tr>
                                                <td className="shoping__cart__item">
                                                    <img src={"http://127.0.0.1:8000/"+item.productimg} alt="" />
                                                    <h5>{item.productname}</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    {item.productprice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty" >
                                                            <input type="number" defaultValue={item.productcount} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    {(item.productcount * item.productprice).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close"></span>
                                                </td>
                                            </tr>
                                        ))}       
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="/shop" className="primary-btn cart-btn">TIẾP TỤC MUA HÀNG</a>                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout1">
                            <h5>Thanh toán</h5>
                            <ul>
                                <li>Tổng tiền <span>{total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></li>
                            </ul>
                            <a href="/checkout" className="primary-btn">TIẾP TỤC THANH TOÁN</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailCart
