import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import "../datatable/Datatable.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { listChucNang } from '../../../../../listTest';
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const SingleBill = ({title}) => {
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    const params = useParams();
    const [inputmahd, setInputMaHD] = React.useState("");
    const [inputmanv, setInputMaNV] = React.useState("");
    const [inputmakh, setInputMaKH] = React.useState("");
    const [inputhokh, setInputHoKH] = React.useState("");
    const [inputtenkh, setInputTenKH] = React.useState("");
    const [inputngaysinh, setInputNgaySinh] = React.useState("");
    const [inputgioitinh, setInputGioiTinh] = React.useState("");
    const [inputdiachi, setInputDiaChi] = React.useState("");
    const [inputsdt, setInputSDT] = React.useState("");
    const [inputemail, setInputEmail] = React.useState("");
    const [inputngaylaphoadon, setInputNgayLapHoaDon] = React.useState("");
    const [inputtongtien, setInputTongTien] = React.useState("");
    const [inputtrangthai, setInputTrangThai] = React.useState("");
    const [detailbills, setDetailBill] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitiethdon/" + params.id).then((response) => {
                    setInputMaHD(response.data.data.MaHD);
                    setInputMaNV(response.data.data.MaNV);
                    setInputMaKH(response.data.data.MaKH);
                    setInputHoKH(response.data.data.HoKH);
                    setInputTenKH(response.data.data.TenKH);
                    setInputNgaySinh(response.data.data.NgaySinh);
                    if (response.data.data.GioiTinh == 0)
                        setInputGioiTinh("Nam");
                    else
                        setInputGioiTinh("Nữ");
                    setInputDiaChi(response.data.data.DiaChi);
                    setInputSDT(response.data.data.SoDienThoai);
                    setInputEmail(response.data.data.Email);
                    setInputNgayLapHoaDon(response.data.data.NgayLapHD);
                    setInputTongTien(response.data.data.TongTien);
                    setInputTrangThai(response.data.data.TrangThai);
                });
                await axios.get("http://127.0.0.1:8000/api/chitiethoadon/"+ params.id).then((response) => {
                    setDetailBill(response.data.data);
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
    
    const onChangeTrangThai = event => {
        setInputTrangThai(event.target.value);
    };

    async function CapNhapHoaDon(){       
        const hd = {
            trangthai: inputtrangthai,
            manv: JSON.parse(localStorage.getItem('idnv')),
        };
        await axios.put("http://127.0.0.1:8000/api/hdon/"+inputmahd,hd).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }
        });
    }    

    const productColumns = [
        { field: 'MaSP', headerName: 'Mã sản phẩm', width: 150 }, 
        { field: 'SoLuong', headerName: 'Số lượng', width: 150 },
        {field: "DonGia", headerName: "Đơn giá", width: 250,},
        {field: "ThanhTien", headerName: "Thành tiền", width: 250,},        
    ];       
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "690px" }}>
                    <div className="singleright">

                        <form>
                            <div className='singleformInput'>
                                <label>Mã hóa đơn</label>
                                <input type={"text"} value={inputmahd}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Mã khách hàng</label>
                                <input type={"text"} value={inputmakh}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Mã nhân viên</label>
                                <input type={"text"} value={inputmanv}  disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Họ tên khách hàng</label>
                                <input type={"text"} value={inputhokh + " " + inputtenkh} disabled />
                            </div>                            
                            <div className='singleformInput'>
                                <label>Ngày sinh</label>
                                <input type={"date"} value={inputngaysinh} disabled />                                                            
                            </div>                            
                            <div className='singleformInput'>
                                <label>Giới tính</label>
                                <input type={"text"} value={inputgioitinh} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Địa chỉ</label>
                                <input type={"text"} value={inputdiachi} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Số điện thoại</label>
                                <input type={"text"} value={inputsdt} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Email</label>
                                <input type={"text"} value={inputemail} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Ngày lập hóa đơn</label>
                                <input type={"text"} value={inputngaylaphoadon} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Tổng tiền</label>
                                <input type={"text"} value={inputtongtien} disabled /> 
                            </div>
                            <div className='singleformInput'>
                                <label>Trạng thái</label>
                                <select className="select-css" value={inputtrangthai} onChange={onChangeTrangThai} disabled={input}>
                                    <option value='1'>Đang chờ xác nhận</option>
                                    <option value='2'>Đã xác nhận</option>   
                                    <option value='3'>Đang giao hàng</option>  
                                    <option value='4'>Hoàn thành</option>                               
                                </select>
                            </div>
                            <div className="singleformInput">                                
                                                               
                            </div>
                            <div className="singleformInput">                                
                                {showButtonEdit ? <button type='button' onClick={CapNhapHoaDon}>Lưu</button> : null}                                
                            </div>
                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
                <div className='datatable'>
                    <div className="datatableTitle">
                        Danh sách chi tiết hóa đơn
                    </div>
                    <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                        getRowId={(row) => row.MaSP}                                           
                        rows={detailbills}
                        columns={productColumns}
                        pageSize={9}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>                
            </div>
        </div>
    );
};

export default SingleBill;