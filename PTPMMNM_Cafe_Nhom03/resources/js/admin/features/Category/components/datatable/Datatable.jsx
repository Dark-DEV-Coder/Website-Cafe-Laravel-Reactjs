import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { productColumns } from './dataresource';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Datatable = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [categorys, setCategory] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/lspham").then((response) => {
                    setCategory(response.data.data);
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


    const [deletecate, setDeleteCategory] = React.useState(null);
    function DeleteCategory(id) {
        if (window.confirm('Bạn có chắc muốn xóa loại sản phẩm này?')) {
            axios.delete("http://127.0.0.1:8000/api/lspham/" + id).then((response) => {
                setDeleteCategory(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            });
        }
    }

    const [inputtenlsp, setInputTenLSP] = React.useState("");
    const onChangeTenLSP = event => {
        setInputTenLSP(event.target.value);
    };
    async function FindCategory() {
        await axios.get("http://127.0.0.1:8000/api/lspham/" + inputtenlsp).then((response) => {
            setCategory(response.data.data);
        });
    }

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/admin/category/single/" + params.row.MaLoaiSP}>
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>

                        <div onClick={() => DeleteCategory(params.row.MaLoaiSP)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }} >
                            Xóa
                        </div>
                    </div >
                );
            },
        },
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Danh sách loại sản phẩm
                <Link to="/admin/category/new" className="newcategory">Thêm Mới</Link>

            </div>
            <div className="search">
                <input type="text" placeholder="Nhập tên cần tìm ..." value={inputtenlsp} onChange={onChangeTenLSP} onKeyUp={FindCategory} />
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaLoaiSP}
                rows={categorys}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
