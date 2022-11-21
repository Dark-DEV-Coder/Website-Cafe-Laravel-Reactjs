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
import axios from 'axios';
const ProductHome = () => {

    const [products, setProduct] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/sp").then((response) => {
                    setProduct(response.data.data);
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
                    {products.map((item) => (      
                        <div key={item.MaSP} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" style={{
                                    backgroundImage: `url(${'http://127.0.0.1:8000/'+item.Hinh})`, backgroundRepeat: 'no-repeat', backgroundSize:'contain',
                                }}>
                                    <ul className="featured__item__pic__hover">                                        
                                        <li><a href="#"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6><a href="#">{item.TenSP}</a></h6>
                                    <h5>{item.GiaBan.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h5>
                                </div>
                            </div>
                        </div>                             
                    ))}                     
                </div>
            </div>
        </section >
    )
}

export default ProductHome
