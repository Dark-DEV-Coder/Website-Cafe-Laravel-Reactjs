import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { historyColumns } from './dataresource';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import DetailBillHis from '../DetailBillHis/DetailBillHis';

const DatatableHistory = () => {
    const [search, setSearch] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [bills, setBill] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    // React.useEffect(() => {
    //     (async () => {
    //         try {
    //             await axios.get("http://127.0.0.1:8000/api/hdon").then((response) => {
    //                 setBill(response.data.data);
    //             });
    //         }
    //         catch (error) {
    //             setError(error.message);
    //         }
    //         finally {
    //             setLoaded(true);
    //         }
    //     })();

    // }, []);

    // const [inputtenkh, setInputTenKH] = React.useState("");
    // const onChangeTenKH = event => {
    //     setInputTenKH(event.target.value);
    // };
    // async function FindBill() {
    //     await axios.get("http://127.0.0.1:8000/api/hdon/" + inputtenkh).then((response) => {
    //         setBill(response.data.data);
    //     });
    // }
    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 200, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/admin/bill/single/" + params.row.MaHD}>
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>
                    </div>
                );
            },
        },
    ]
    return (
        <>
            <div className='datatable'>
                <div className="datatableTitle">
                    <h3 style={{ color: 'black', textAlign: 'center', width: '100%', marginTop: '20px' }}>Lịch sử mua hàng</h3>

                </div>
                <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "40px", marginLeft: '15%', height: "450px", width: "70%" }}
                    getRowId={(row) => row.MaHD}
                    rows={bills}
                    columns={historyColumns.concat(actionColumn)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
            {/* <DetailBillHis /> */}
        </>

    )
}

export default DatatableHistory
