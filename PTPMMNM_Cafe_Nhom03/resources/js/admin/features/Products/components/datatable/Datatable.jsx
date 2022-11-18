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
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [products, setProduct] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() =>  {
        (async() => {
            try{
                await axios.get("http://127.0.0.1:8000/api/sp").then((response) => {
                    setProduct(response.data.data);
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

    const   [deleteproduct, setDeleteProduct] = React.useState(null);
    async function DeleteProduct(id){
        if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')){
            await axios.delete("http://127.0.0.1:8000/api/sp/"+ id).then((response) => {                    
                setDeleteProduct(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();                        
            });
        }
    }

    const   [inputtensp, setInputTenSP] = React.useState("");
    const onChangeTenSP = event => {
        setInputTenSP(event.target.value);
     };
    async function FindProduct(){
        await axios.get("http://127.0.0.1:8000/api/sp/"+ inputtensp).then((response) => {                    
            setProduct(response.data.data);                     
        });        
    }

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={'/products/single/'+params.row.MaSP}  >
                            <button className="viewButtonProduct"  >
                                Xem chi tiết
                            </button>
                        </Link>

                        <div onClick={() => DeleteProduct(params.row.MaSP)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
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
                Danh sách sản phẩm
                <Link to="/products/new" className="newproduct">Thêm Mới</Link>
            </div>
            <div className="search">               
                <input type="text" placeholder="Nhập tên sản phẩm cần tìm" value={inputtensp} onChange={onChangeTenSP} onKeyUp={FindProduct} />
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaSP}
                rows={products}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />

        </div>
    )
}

export default Datatable;
