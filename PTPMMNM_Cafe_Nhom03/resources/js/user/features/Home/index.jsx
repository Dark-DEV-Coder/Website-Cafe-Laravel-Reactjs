import React from 'react';
import "./home.scss";
import Header from '../../components/header/Header';
import Hero from './components/Hero/Hero';
import ProductHome from './components/ProductsHome/ProductHome';
// import CategoriesSection from './components/CategoriesSection/CategoriesSection';
import Blog from './components/Blog/Blog';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ProductHome />
            <Blog />
            {/* <CategoriesSection /> */}
            <Footer />
        </div >
    )
}

export default Home;
