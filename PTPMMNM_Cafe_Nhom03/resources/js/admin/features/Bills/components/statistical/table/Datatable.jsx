import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { productColumns } from './dataresource';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const DataTableStatistical = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [bills, setBill] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/hdon").then((response) => {
            setBill(response.data.data);
        });
    }, []);

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/products/single">
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>

                        <div className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Thống kê hóa đơn

            </div>
            <div className="searchStatistical">
                <label>Ngày lập hóa đơn từ : </label>
                <input type="date" placeholder="Search ..." />
                --
                <input type="date" placeholder="Search ..." />
                <button className='timKiem'>Thống kê</button>
            </div>
            <div className="searchStatistical" style={{ marginTop: "20px" }}>
                <h5 >Tổng Doanh Thu :  {"50000000"} </h5>

            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "470px" }}
                getRowId={(row) => row.MaHD}
                rows={bills}
                columns={productColumns.concat(actionColumn)}
                pageSize={6}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTableStatistical
