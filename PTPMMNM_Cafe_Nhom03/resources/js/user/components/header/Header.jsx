import React from "react";
import "./Header.scss";
import "../../../../css/bootstrap.min.css";
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
const Header = () => {
    const [showShop, setShowShop] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/home">Mizuuu</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="/home" className="nav-link">Trang chủ</a></li>
                        <li className="nav-item dropdown">
                            <div onClick={() => setShowShop(!showShop)} className="nav-link dropdown-toggle" style={{ cursor: "pointer" }} >Cửa hàng</div>
                            {showShop ?
                                <div className="showShopMenu" style={{ position: "absolute" }} >
                                    <a className="dropdown-item" href="/shop">Cửa hàng</a>
                                    <a className="dropdown-item" href="/cart">Giỏ hàng</a>
                                    <a className="dropdown-item" href="/checkout">Thủ tục thanh toán</a>
                                </div>
                                : null}
                            {/* <div className="dropdown-menu" >
                                <a className="dropdown-item" href="shop.html">Shop</a>
                                <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                <a className="dropdown-item" href="cart.html">Cart</a>
                                <a className="dropdown-item" href="checkout.html">Checkout</a> */}
                            {/* {show ?
                                    <>

                                        <a className="dropdown-item" href="shop.html">Shop</a>
                                        <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                        <a className="dropdown-item" href="cart.html">Cart</a>
                                        <a className="dropdown-item" href="checkout.html">Checkout</a>
                                    </>
                                    : null} */}

                            {/* </div> */}

                        </li>
                        <li className="nav-item"><a href="/about" className="nav-link">Thông tin</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Liên lạc</a></li>
                        <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><ShoppingCartOutlinedIcon style={{ fontSize: "18px" }} />[0]</a></li>
                        <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><AssignmentIndOutlinedIcon style={{ fontSize: "18px", marginRight: '5px' }} />Tài khoản</a></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Header
