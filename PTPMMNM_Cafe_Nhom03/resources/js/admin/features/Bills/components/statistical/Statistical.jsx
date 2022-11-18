import "./Statistical.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from '../../../../components/navbar/Navbar';
import { listChucNang } from "../../../../../listTest";
import DataTableStatistical from "./table/Datatable";
const Statistical = () => {
    return (
        <div className="list">
            <Sidebar chucNangList={listChucNang} />
            <div className="listContainer">
                <Navbar />
                <div className="title">
                </div>

                <DataTableStatistical />
            </div>
        </div>
    );
};

export default Statistical;