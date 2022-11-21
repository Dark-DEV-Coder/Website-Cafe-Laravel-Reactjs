import React from 'react'
import "./Shop.scss";
import Header from '../../components/header/Header';
import HeroListProduct from './components/Hero/Hero';
import Footer from '../../components/footer/Footer';
import Herowrap from './components/Herowrap/Herowrap';
import ProductHome from '../Home/components/ProductsHome/ProductHome';
import ListProduct from './components/ListProduct/ListProduct';
const Shop = () => {
    return (
        <div>

            <Header />
            <HeroListProduct />
            <Herowrap />
            <ListProduct />
            {/* <ListProduct /> */}
            <Footer />
        </div>
    )
}
export default Shop