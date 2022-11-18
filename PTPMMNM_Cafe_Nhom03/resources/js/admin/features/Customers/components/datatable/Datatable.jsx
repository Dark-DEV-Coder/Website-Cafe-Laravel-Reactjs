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
const Datatable = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [customers, setCustomer] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/khhang").then((response) => {
            setCustomer(response.data.data);
        });
    }, []);

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/customer/single/"+params.row.MaKH}>
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>
                    </div>
                );
            },
        },
    ]

    const [inputtenkh, setInputTenKH] = React.useState("");
    const onChangeTenKH = event => {
        setInputTenKH(event.target.value);
    };
    async function FindCustomer() {
        await axios.get("http://127.0.0.1:8000/api/khhang/" + inputtenkh).then((response) => {
            setCustomer(response.data.data);
        });
    }

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Danh sách khách hàng
            </div>
            <div className="search">
                <input type="text" placeholder="Nhập tên khách hàng cần tìm ..." value={inputtenkh} onChange={onChangeTenKH} onKeyUp={FindCustomer} />
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaKH}
                rows={customers}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
