import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { productColumns } from './dataresource';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Datatable = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [functions, setFunction] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/qtkhoan").then((response) => {
                    setFunction(response.data.data);
                });
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();

    }, []);

    const [deletefun, setDeleteFunction] = React.useState(null);
    function DeleteFunciton(id) {
        if (window.confirm('Bạn có chắc muốn xóa quyền tài khoản này?')) {
            axios.delete("http://127.0.0.1:8000/api/qtkhoan/" + id).then((response) => {
                setDeleteFunction(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            });
        }
    }

    const [inputtenqtk, setInputTenQTK] = React.useState("");
    const onChangeTenQTK = event => {
        setInputTenQTK(event.target.value);
    };
    async function FindFunction() {
        await axios.get("http://127.0.0.1:8000/api/qtkhoan/" + inputtenqtk).then((response) => {
            setFunction(response.data.data);
        });
    }

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/admin/functions/single/"+params.row.MaQuyen}>
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>

                        <div onClick={() => DeleteFunciton(params.row.MaQuyen)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
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
                Danh sách quyền tài khoản
                <Link to="/admin/functions/new" className="newfunction">Thêm Mới</Link>
            </div>
            <div className="search">

                <input type="text" placeholder="Nhập tên quyền tài khoản cần tìm ..." value={inputtenqtk} onChange={onChangeTenQTK} onKeyUp={FindFunction} />
                <button className='timKiem' onClick={FindFunction}>Tìm kiếm</button>
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaQuyen}
                rows={functions}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
