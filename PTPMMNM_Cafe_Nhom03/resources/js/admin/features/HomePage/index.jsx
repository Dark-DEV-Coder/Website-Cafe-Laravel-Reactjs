import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/widget/dashboard/Dashboard";
import Featured from "./components/feature/Featured";
import Chart from "./components/chart/Chart";
import "./homepage.scss"
const HomeAdmin = () => {

    return (
        <div className="home">
            <Sidebar />
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
            </div>
        </div>
    )
}
export default HomeAdmin