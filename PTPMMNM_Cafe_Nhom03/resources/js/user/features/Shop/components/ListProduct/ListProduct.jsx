import React from 'react';
import "./ListProduct.scss";
import "../../../../../../css/bootstrap2.min.css";
import "../../../../../../css/bootstrap2.min.css";
import anh1 from "../../../Home/components/img/features/feature-1.jpg";
import anh2 from "../../../Home/components/img/features/feature-2.jpg";
import anh3 from "../../../Home/components/img/features/feature-3.jpg";
import anh4 from "../../../Home/components/img/features/feature-4.jpg";
import anh5 from "../../../Home/components/img/features/feature-5.jpg";
import anh6 from "../../../Home/components/img/features/feature-6.jpg";
import anh7 from "../../../Home/components/img/features/feature-7.jpg";
import anh8 from "../../../Home/components/img/features/feature-8.jpg";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const ListProduct = () => {
    return (
        <section className="ftco-section" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 mb-5 text-center">
                        <ul className="product-category">
                            <li><a href="#" className="active">All</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruits</a></li>
                            <li><a href="#">Juice</a></li>
                            <li><a href="#">Dried</a></li>
                        </ul>
                    </div>
                </div>
                {/* List product */}
                <div className="row featured__filter">
                    {/* Từng ô product */}
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    {/* Từng ô product */}
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
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
                                <Stack spacing={1}>
                                    <Rating name="half-rating" defaultValue={1.6} precision={0.5} readOnly style={{ justifyContent: 'center' }} />
                                </Stack>
                                <h6><a href="#">Crab Pool Security</a></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li className="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default ListProduct
