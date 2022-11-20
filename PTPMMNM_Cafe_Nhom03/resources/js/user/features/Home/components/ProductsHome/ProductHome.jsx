import React, { useState } from 'react';
import "./ProductHome.scss";
import "../../../../../../css/bootstrap2.min.css";
import anh1 from "../img/features/feature-1.jpg";
import anh2 from "../img/features/feature-2.jpg";
import anh3 from "../img/features/feature-3.jpg";
import anh4 from "../img/features/feature-4.jpg";
import anh5 from "../img/features/feature-5.jpg";
import anh6 from "../img/features/feature-6.jpg";
import anh7 from "../img/features/feature-7.jpg";
import anh8 from "../img/features/feature-8.jpg";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
const ProductHome = () => {

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh1})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh2})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh3})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh4})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh5})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh6})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh7})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                        <div className="featured__item">
                            <div className="featured__item__pic set-bg" style={{
                                backgroundImage: `url(${anh8})`, backgroundRepeat: 'no-repeat'
                            }}>
                                <ul className="featured__item__pic__hover">
                                    <li><a href="#"><FavoriteRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                </ul>
                            </div>
                            <div className="featured__item__text">
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProductHome
