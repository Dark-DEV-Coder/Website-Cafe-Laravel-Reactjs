import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from './components/datatable/Datatable';
import "./accounts.scss";
import { listChucNang } from '../../../listTest';
import axios from 'axios';
const Account = () => {
    
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

export default Account
