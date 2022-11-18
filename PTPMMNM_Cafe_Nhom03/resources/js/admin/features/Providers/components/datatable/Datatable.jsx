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
    
    const [providers, setProvider] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() =>  {
        (async() => {
            try{
                await axios.get("http://127.0.0.1:8000/api/nccap").then((response) => {
                    setProvider(response.data.data);
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

    const   [deleteprovider, setDeleteProvider] = React.useState(null);
    async function DeleteProvider(id){
        if (window.confirm('Bạn có chắc muốn xóa nhà cung cấp này?')){
            await axios.delete("http://127.0.0.1:8000/api/nccap/"+ id).then((response) => {                    
                setDeleteProvider(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();                        
            });
        }
    }

    const   [inputtenncc, setInputTenNCC] = React.useState("");
    const onChangeTenNCC = event => {
        setInputTenNCC(event.target.value);
     };
    async function FindProvider(){
        await axios.get("http://127.0.0.1:8000/api/nccap/"+ inputtenncc).then((response) => {                    
            setProvider(response.data.data);                     
        });        
    }

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/provider/single/"+params.row.MaNCC}>
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>

                        <div onClick={() => DeleteProvider(params.row.MaNCC)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
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
                Danh sách nhà cung cấp
                <Link to="/provider/new" className="newprovider">Thêm Mới</Link>
            </div>
            <div className="search">                
                <input type="text" placeholder="Nhập tên cần tìm ..." value={inputtenncc} onChange={onChangeTenNCC} onKeyUp={FindProvider} />                
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaNCC} 
                rows={providers}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection            
            />
        </div>
    )
}

export default Datatable
