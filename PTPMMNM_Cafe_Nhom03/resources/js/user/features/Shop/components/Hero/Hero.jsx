import React, { useState } from 'react';
import "./Hero.scss";
import "../../../../../../css/bootstrap2.min.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import 'react-slideshow-image/dist/styles.css';
import axios from 'axios';
const HeroListProduct = () => {
    const [showCate, SetShowCate] = useState(false);

    const [categorys, setCategory] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/lspham").then((response) => {
                    setCategory(response.data.data);
                });
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
                                    <span className='spas'>Các loại sản phẩm</span>
                                </div>
                            </div>
                            {showCate ?
                                 <ul>
                                 {categorys.map((cate) => (      
                                     <li key={cate.MaLoaiSP}><a href="#">{cate.TenLoai}</a></li>                              
                                 ))}                                                                                                        
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
