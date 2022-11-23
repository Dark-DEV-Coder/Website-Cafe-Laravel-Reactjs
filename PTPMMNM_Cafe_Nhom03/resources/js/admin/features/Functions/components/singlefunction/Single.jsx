import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
const SingleFunction = ({title}) => {
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    const params = useParams();
    const [chucnangs, setChucNang] = React.useState([]);
    const [detailifunction, setDetailFunction] = React.useState([]);
    const [inputmaqtk, setInputMaQTK] = React.useState("");
    const [inputtenqtk, setInputTenQTK] = React.useState("");
    const [inputctquyen, setInputCTQuyen] = React.useState("");
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);

    const onChangeMaQTK = event => {
        setInputMaQTK(event.target.value);
    };
    const onChangeTenQTK = event => {
        setInputTenQTK(event.target.value);
    };
    const onChangeCTQuyen = event => {
        setInputCTQuyen(event.target.value);
    };
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitietqtkhoan/" + params.id).then((response) => {
                    setInputMaQTK(response.data.data.MaQuyen);
                    setInputTenQTK(response.data.data.TenQuyen);
                });
                await axios.get("http://127.0.0.1:8000/api/dschucnang").then((response) => {
                    setChucNang(response.data.data);
                });
                await axios.get("http://127.0.0.1:8000/api/chitietquyen/"+ params.id).then((response) => {
                    setDetailFunction(response.data.data);
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

    async function ThemChiTietQuyen(){
        if (inputctquyen == -1){
            alert("Chọn chức năng cần thêm chi tiết");
            return false;
        }
        const ctqtk = {
            maqtk: inputmaqtk,
            macn: inputctquyen,
        };
        await axios.post("http://127.0.0.1:8000/api/ctqtkhoan",ctqtk).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }
        });
    }

    async function CapNhapQuyenTaiKhoan(){       
        const qtk = {
            tenqtk: inputtenqtk,
        };
        await axios.put("http://127.0.0.1:8000/api/qtkhoan/"+params.id,qtk).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }
        });
    }

    async function XoaChiTietQuyen(maqtk,macn){
        if (window.confirm('Bạn có chắc muốn xóa chi tiết quyền tài khoản này?')) {
            const ctqtk = {
                maqtk: maqtk,
                macn: macn,
            };
            await axios.post("http://127.0.0.1:8000/api/xoachitietqtkhoan",ctqtk).then((response) => {
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            });
        }
    }

    const productColumns = [
        { field: 'MaChucNang', headerName: 'Mã chức năng', width: 150 }, 
        { field: 'TenChucNang', headerName: 'Tên chức năng', width: 200 },      
    ];    
    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div onClick={() => XoaChiTietQuyen(params.row.MaQuyen,params.row.MaChucNang)} className="deleteButton" style={{ padding: "8px 20px 8px 20px" }}>
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ]
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>
                </div>
                <div className="singlebottom" style={{ height: "200px" }}>
                    <div className="singleright">
                        <form>
                            <div className='singleformInput'>
                                <label>Mã quyền</label>
                                <input type={"text"} value={inputmaqtk} onChange={onChangeMaQTK} disabled />
                            </div>
                            <div className="singleformInput" >
                                <label>Chức năng quyền tài khoản</label>
                                <select value={inputctquyen} onChange={onChangeCTQuyen} className="select-css">
                                    <option value='-1'  >Chọn chức năng</option>
                                    {chucnangs.map((cn) => (
                                        <option key={cn.MaChucNang} value={cn.MaChucNang}>{cn.TenChucNang}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='singleformInput'>
                                <label>Tên quyền</label>
                                <input type={"text"} value={inputtenqtk} onChange={onChangeTenQTK} disabled={input} />
                            </div>
                            <div className="singleformInput"   >
                                <button type='button' onClick={ThemChiTietQuyen}>Thêm chi tiết</button>
                                {showButtonEdit ? <button style={{marginLeft: "50px"}} onClick={CapNhapQuyenTaiKhoan} type='button'>Lưu</button> : null}
                            </div>
                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
                <div className='datatable'>
                    <div className="datatableTitle">
                        Danh sách chi tiết quyền
                    </div>
                    <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                        getRowId={(row) => row.MaChucNang}                                           
                        rows={detailifunction}
                        columns={productColumns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>  
            </div>                
        </div>
    );
};

export default SingleFunction;