import React from 'react';
import Header from '../../components/header/Header';
import HeroListProduct from '../Shop/components/Hero/Hero';
import Herowrap from '../Herowrap/Herowrap';
import DetailAbout from './components/DetailAbout';
import Footer from '../../components/footer/Footer';
const About = () => {
    return (
        <div>
            <Header />
            <HeroListProduct />
            <Herowrap title={"About"} />
            <DetailAbout />
            <Footer />
        </div>
    )
}

export default About
