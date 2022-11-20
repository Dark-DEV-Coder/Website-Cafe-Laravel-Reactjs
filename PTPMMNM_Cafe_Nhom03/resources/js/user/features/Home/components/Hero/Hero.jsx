import React from 'react';
import "./Hero.scss";
import "../../../../../../css/bootstrap2.min.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide3 from "../img/BannerWeb2.jpg";
const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <div className='iconmenu'>
                                    <MenuOutlinedIcon style={{
                                        fontSize: "25px",
                                        color: "#ffffff",
                                        marginBottom: "3px",
                                    }} />
                                    <span className='spas'>All departments</span>
                                </div>



                            </div>
                            <ul>
                                <li><a href="#">Fresh Meat</a></li>
                                <li><a href="#">Vegetables</a></li>
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Fresh Berries</a></li>
                                <li><a href="#">Ocean Foods</a></li>
                                <li><a href="#">Butter & Eggs</a></li>
                                <li><a href="#">Fastfood</a></li>
                                <li><a href="#">Fresh Onion</a></li>
                                <li><a href="#">Papayaya & Crisps</a></li>
                                <li><a href="#">Oatmeal</a></li>
                                <li><a href="#">Fresh Bananas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"></span>
                                        <KeyboardArrowDownOutlinedIcon style={{
                                            marginLeft: "20px"
                                        }} />
                                    </div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                        </div>
                        <div className="hero__item set-bg" style={{
                            backgroundImage: `url(${slide3})`, backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="hero__text" style={{ marginLeft: "420px", marginTop: "100px" }}>
                                <span>Coffee Fresh</span>
                                <h4>100% NGUYÊN CHẤT </h4>
                                <a href="#" className="primary-btn">MUA NGAY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Hero
