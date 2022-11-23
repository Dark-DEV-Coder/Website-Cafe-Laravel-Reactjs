import React from 'react';
import "./OrderConfirmation.scss";
import "../../../../../css/bootstrap2.min.css";
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import { useState } from 'react';
import axios from 'axios';
const DetailOrderCon = () => {

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
    function ThanhToan(){
        let thongtin = JSON.parse(localStorage.getItem('thongtin'));
        let sp = JSON.parse(localStorage.getItem('cart'));
        const hd = {
            ho: thongtin.ho,
            ten: thongtin.ten,
            ngaysinh: thongtin.ngaysinh,
            gioitinh: thongtin.gioitinh,
            sdt: thongtin.sdt,
            email: thongtin.email,            
            diachi: thongtin.diachi,
            cthd: sp,
        };
        axios.post("http://127.0.0.1:8000/api/hdon", hd).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                localStorage.removeItem('thongtin');
                localStorage.removeItem('cart');
                window.location.assign("http://127.0.0.1:8000/home");
            }

        });
    }
    return (
        <section className="shoping-cart spad">
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
                                    {cart.map((item) => (
                                        <tr key={item.productid}>
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
                                                        <input type="number" value={item.productcount} disabled />
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
                                <li>Tổng tiền <span>{total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></li>
                            </ul>
                            <a onClick={ThanhToan} className="primary-btn">HOÀN TẤT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailOrderCon
