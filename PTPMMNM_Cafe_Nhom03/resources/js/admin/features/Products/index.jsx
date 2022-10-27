import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "./components/datatable/Datatable";
import "./products.scss";
const Products = () => {

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="title">
                </div>

                <Datatable />
            </div>
        </div>
    )
}
export default Products