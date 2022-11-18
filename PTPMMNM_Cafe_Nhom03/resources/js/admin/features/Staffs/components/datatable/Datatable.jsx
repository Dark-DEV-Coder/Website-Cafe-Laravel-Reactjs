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

    const [staffs, setStaff] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() =>  {
        (async() => {
            try{
                await axios.get("http://127.0.0.1:8000/api/nvien").then((response) => {
                    setStaff(response.data.data);
                });
            }
            catch(error){
                setError(error.message);
            }
            finally{
                setLoaded(true);
            }
        })();
        
    }, []);

    const   [deletestaff, setDeleteStaff] = React.useState(null);
    function DeleteStaff(id){
        if (window.confirm('Bạn có chắc muốn xóa nhân viên này?')){
            axios.delete("http://127.0.0.1:8000/api/nvien/"+ id).then((response) => {                    
                setDeleteStaff(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();                        
            });
        }
    }

    const   [inputtennv, setInputTenNV] = React.useState("");
    const onChangeTenNV = event => {
        setInputTenNV(event.target.value);
     };
    async function FindStaff(){
        await axios.get("http://127.0.0.1:8000/api/nvien/"+ inputtennv).then((response) => {                    
            setStaff(response.data.data);                     
        });        
    }

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

                        <div onClick={() => DeleteStaff(params.row.MaNV)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
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
                Danh sách nhân viên
                <Link to="/staff/new" className="newstaff">Thêm Mới</Link>
            </div>
            <div className="search">                
                <input type="text" placeholder="Nhập tên nhân viên cần tìm" value={inputtennv} onChange={onChangeTenNV} onKeyUp={FindStaff} />
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaNV} 
                rows={staffs}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
