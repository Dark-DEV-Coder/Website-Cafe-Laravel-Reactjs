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

    const [imports, setImport] = React.useState([]);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/pnhang").then((response) => {
            setImport(response.data.data);
        });
    }, []);

    const [deleteimport, setDeleteImport] = React.useState(null);
    async function DeleteImport(id) {
        if (window.confirm('Bạn có chắc muốn xóa phiếu nhập hàng này?')) {
            await axios.delete("http://127.0.0.1:8000/api/pnhang/" + id).then((response) => {
                setDeleteImport(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            });
        }
    }

    const [inputtenncc, setInputTenNCC] = React.useState('');
    const onChangeTenNCC = event => {
        setInputTenNCC(event.target.value);
    };
    async function FindImport() {
        await axios.get("http://127.0.0.1:8000/api/pnhang/" + inputtenncc).then((response) => {
            setImport(response.data.data);
        });
    }


    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/admin/imports/single/"+params.row.MaPNH}>
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>

                        <div onClick={() => DeleteImport(params.row.MaPNH)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
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
                Danh sách phiếu nhập hàng
                <Link to="/admin/imports/new" className="newimport">Thêm Mới</Link>
            </div>
            <div className="search">

                <input type="text" placeholder="Nhập tên nhà cung cấp cần tìm ..." value={inputtenncc} onChange={onChangeTenNCC} onKeyUp={FindImport} />
                <button type='button' className='timKiem' onClick={FindImport}>Tìm kiếm</button>
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaPNH}
                rows={imports}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
