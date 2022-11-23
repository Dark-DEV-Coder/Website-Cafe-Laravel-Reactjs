import React from 'react';
import Header from '../../components/header/Header';
import HeroListProduct from '../Shop/components/Hero/Hero';
import Herowrap from '../Herowrap/Herowrap';
import DatatableHistory from './components/datatable/Datatable';
import Footer from '../../components/footer/Footer';
const History = () => {
    return (
        <div>
            <Header />
            <HeroListProduct />
            <Herowrap title={"History"} />
            <DatatableHistory />
            <Footer />
        </div>
    )
}

export default History
