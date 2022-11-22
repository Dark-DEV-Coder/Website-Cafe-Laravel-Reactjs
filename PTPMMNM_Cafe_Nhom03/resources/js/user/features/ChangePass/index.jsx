import React from 'react';
import Header from '../../components/header/Header';
import HeroListProduct from '../Shop/components/Hero/Hero';
import Herowrap from '../Herowrap/Herowrap';
import DetailChangPass from './components/DetailChangPass';
import Footer from '../../components/footer/Footer';
const ChangePass = () => {
    return (
        <div>
            <Header />
            <HeroListProduct />
            <Herowrap title={"Change Password"} />
            <DetailChangPass />
            <Footer />
        </div>
    )
}

export default ChangePass
