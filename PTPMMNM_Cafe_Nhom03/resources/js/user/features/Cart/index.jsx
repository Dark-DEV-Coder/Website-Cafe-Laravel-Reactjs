import React from 'react';
import Header from '../../components/header/Header';
import HeroListProduct from '../Shop/components/Hero/Hero';
import Herowrap from '../Herowrap/Herowrap';
import DetailCart from './components/DetailCart';
import Footer from '../../components/footer/Footer';
const Cart = () => {
    return (
        <div>
            <Header />
            <HeroListProduct />
            <Herowrap title={"Cart"} />
            <DetailCart />
            <Footer />
        </div>
    )
}

export default Cart
