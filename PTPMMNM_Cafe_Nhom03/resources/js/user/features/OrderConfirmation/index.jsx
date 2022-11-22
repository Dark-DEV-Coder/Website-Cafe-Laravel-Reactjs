import React from 'react';
import Header from '../../components/header/Header';
import HeroListProduct from '../Shop/components/Hero/Hero';
import Herowrap from '../Herowrap/Herowrap';
import Footer from '../../components/footer/Footer';
import DetailOrderCon from './components/OrderConfirmation';
const OrderConfirmation = () => {
    return (
        <div>
            <Header />
            <HeroListProduct />
            <Herowrap title={"Order Confirmation"} />
            <DetailOrderCon />
            <Footer />
        </div>
    )
}

export default OrderConfirmation
