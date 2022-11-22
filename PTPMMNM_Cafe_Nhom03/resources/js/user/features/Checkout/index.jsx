import React from 'react';
import Header from '../../components/header/Header';
import HeroListProduct from '../Shop/components/Hero/Hero';
import Herowrap from '../Herowrap/Herowrap';
import DetailCheckout from './components/DetailCheckout';
import Footer from '../../components/footer/Footer';
const Checkout = () => {
    return (
        <div>
            <Header />
            <HeroListProduct />
            <Herowrap title={"Check Out"} />
            <DetailCheckout />
            <Footer />
        </div>
    )
}

export default Checkout
