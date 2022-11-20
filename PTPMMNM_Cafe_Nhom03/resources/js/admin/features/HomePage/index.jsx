import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Dashboard from "./components/widget/Dashboard";
import Featured from "./components/feature/Featured";
import Chart from "./components/chart/Chart";
import "./homepage.scss"
import Table from "./components/table/Table";
import { listChucNang } from "../../../listTest";
const HomeAdmin = () => {
    
    return (
        <div className="home">
            <Sidebar chucNangList={listChucNang} />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Dashboard type={"user"} />
                    <Dashboard type={"order"} />
                    <Dashboard type={"erarning"} />
                    <Dashboard type={"balance"} />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">
                        Latest Transactions
                    </div>
                    <Table />
                </div>
            </div>
        </div>
    )
}
export default HomeAdmin