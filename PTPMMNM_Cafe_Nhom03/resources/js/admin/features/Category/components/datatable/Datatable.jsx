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
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/lspham").then((response) => {
            setCategory(response.data.data);
        });
    }, []);

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/products/single">
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>

                        <div className="deleteButton" style={{ padding: "8px 20px 8px 20px" }} >
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
                <Link to="/category/new" className="newcategory">Thêm Mới</Link>

            </div>
            <div className="search">
                <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                    <InputLabel id="demo-select-small">Chọn kiểu tìm kiếm</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={search}
                        label="Chọn kiểu tìm kiếm"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <input type="text" placeholder="Search ..." />
                <button className='timKiem'>Tìm kiếm</button>
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
