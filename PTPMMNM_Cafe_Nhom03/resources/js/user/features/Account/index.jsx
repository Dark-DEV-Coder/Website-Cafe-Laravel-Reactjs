import React from 'react'
import '../../../../css/bootstrap.min.css';
import Header from '../../components/header/Header';
import HeroListProduct from '../Shop/components/Hero/Hero';
import Herowrap from '../Herowrap/Herowrap';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import SingleCustomerUser from './components/singlecustomer/Single';
const AccountUser = () => {
    return (
        <div>
            <Header />
            <HeroListProduct />
            <Herowrap title={"Account User"} />
            <SingleCustomerUser />
            <Footer />

        </div>
    )
}

export default AccountUser
