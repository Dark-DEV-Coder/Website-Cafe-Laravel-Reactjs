import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { productColumns } from './dataresource';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
const DataTableStatistical = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [bills, setBill] = React.useState([]);
    const [inputtungay, setInputTuNgay] = React.useState("");
    const [inputdenngay, setInputDenNgay] = React.useState("");
    const [inputtongtien, setInputTongTien] = React.useState("");
    const onChangeTuNgay = event => {
        setInputTuNgay(event.target.value);
    };
    const onChangeDenNgay = event => {
        setInputDenNgay(event.target.value);
    };
    const onChangeTongTien = event => {
        setInputTongTien(event.target.value);
    };
    async function Thongke() {        
        const staff = {
            tungay: inputtungay,
            denngay: inputdenngay,
        };
        await axios.post("http://127.0.0.1:8000/api/thongke", staff).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setBill(response.data.data);
                setInputTongTien(response.data.price);
            }

        });
    }
    

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Thống kê hóa đơn

            </div>
            <div className="searchStatistical">
                <label>Ngày lập hóa đơn từ : </label>
                <input type="date" value={inputtungay} onChange={onChangeTuNgay} />
                --
                <input type="date" value={inputdenngay} onChange={onChangeDenNgay} />
                <button className='timKiem' onClick={Thongke}>Thống kê</button>
            </div>
            <div className="searchStatistical" style={{ marginTop: "20px" }}>
                <h5 >Tổng Doanh Thu :  {inputtongtien + " VND"} </h5>

            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "470px" }}
                getRowId={(row) => row.MaHD}
                rows={bills}
                columns={productColumns}
                pageSize={6}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTableStatistical
