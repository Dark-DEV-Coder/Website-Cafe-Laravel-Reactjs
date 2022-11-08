import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from './components/datatable/Datatable';
import "./customer.scss";
import { listChucNang } from '../../../listTest';
const Customer = () => {
    return (
        <div className="list">
            <Sidebar chucNangList={listChucNang} />
            <div className="listContainer">
                <Navbar />
                <div className="title">
                </div>

                <Datatable />
            </div>
        </div>
    )
}

export default Customer
