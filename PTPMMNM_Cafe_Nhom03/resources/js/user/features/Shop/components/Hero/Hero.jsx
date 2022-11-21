import React, { useState } from 'react';
import "./Hero.scss";
import "../../../../../../css/bootstrap2.min.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import 'react-slideshow-image/dist/styles.css'
const HeroListProduct = () => {
    const [showCate, SetShowCate] = useState(false);

    return (
        <section className="heroShop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories" >
                            <div className="hero__categories__all" onClick={() => SetShowCate(!showCate)}>
                                <div className='iconmenu'>
                                    <MenuOutlinedIcon style={{
                                        fontSize: "25px",
                                        color: "#ffffff",
                                        marginBottom: "3px",
                                    }} />
                                    <span className='spas'>All departments</span>
                                </div>
                            </div>
                            {showCate ?
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
                                : null
                            }

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
                    </div>
                </div>
            </div >
        </section >
    )
}

export default HeroListProduct
