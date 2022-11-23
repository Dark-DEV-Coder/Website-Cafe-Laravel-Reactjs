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
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ListProduct = () => {

    // const clickDetailProduct = (link) => {
    //     navigate("/admin/" + link)
    // }
    const navigate = useNavigate()
    const clickDetailProduct = () => {
        navigate("/product/single/")
    }
    const [products, setProduct] = React.useState([]);
    const [page, SetPage] = React.useState([]);
    const [currentpage, SetCurrentPage] = React.useState('1');
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/sp/page/1").then((response) => {
                    setProduct(response.data.data);
                });
                await axios.get("http://127.0.0.1:8000/api/sp").then((response) => {
                    const pro = response.data.data;
                    const m = (pro.length) / 8;
                    const totalpage = Math.ceil(m);
                    const arr = [];
                    for (let i = 1; i <= totalpage; i++) {
                        arr.push(i);
                    }
                    SetPage(arr);
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

    function PageProduct(p) {
        axios.get("http://127.0.0.1:8000/api/sp/page/" + p).then((response) => {
            setProduct(response.data.data);
            SetCurrentPage(p);
        });
    }

    function AddToCart(id,hinh,ten,gia){
        let giohang = [];        
        if (localStorage['cart'])
            giohang=JSON.parse(localStorage.getItem('cart'));               
        const temp={productid:id,productname:ten,productprice:gia,productcount:1,productimg:hinh};
        giohang.push(temp);        
        for (let i=0;i<giohang.length-1;i++){
            for (let j=i+1;j<giohang.length;j++)
                if (giohang[i].productid==giohang[j].productid){
                    giohang.splice(j,1);
                    giohang[i].productcount++;
                }
        }
        localStorage.setItem('cart',JSON.stringify(giohang));
    }

    return (
        <section className="ftco-section" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 mb-5 text-center">
                        <h3>Tất cả sản phẩm</h3>
                    </div>
                </div>
                {/* List product */}
                <div className="row featured__filter">
                    {products.map((item) => (
                        <div key={item.MaSP} className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" style={{ height: '380px' }}>
                            <div className="featured__item">
                                <div className="featured__item__pic set-bg" style={{
                                    backgroundImage: `url(${'http://127.0.0.1:8000/' + item.Hinh})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain',
                                }}>
                                    <ul className="featured__item__pic__hover">
                                        <li onClick={() => AddToCart(item.MaSP,item.Hinh,item.TenSP,item.GiaBan)}><a href="/cart"><ShoppingCartRoundedIcon style={{ marginBottom: "6px", fontSize: "20px" }} /></a></li>
                                    </ul>
                                </div>
                                <div className="featured__item__text1">
                                    <h6><a href={"http://127.0.0.1:8000/product/single/"+item.MaSP}>{item.TenSP}</a></h6>
                                    <h6 style={{ color: 'red' }}>{item.GiaBan.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h6>
                                </div>
                            </div>
                        </div>
                        // </Link>
                    ))}
                    <div className="row mt-5">
                        Trang {currentpage}
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    {page.map((p) => (
                                        <li key={p} onClick={() => PageProduct(p)}><a href="#">{p}</a></li>
                                    ))}
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
