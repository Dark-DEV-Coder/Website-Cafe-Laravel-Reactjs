import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import Select from "react-select";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
import { ModalFooter } from 'react-bootstrap';
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
const SingleStaff = ({ title }) => {
    const [input, setInput] = useState(true);
    const [selectMaTK, setSelectMaTK] = useState(false);
    const [buttonOK, setButtonOK] = useState(false);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    const handleCapMaTK = () => {
        setSelectMaTK(true);
        setButtonOK(true);
    }
    const params = useParams();
    const [inputmanv, setInputMaNV] = React.useState("");
    const [inputmatk, setInputMaTK] = React.useState("");
    const [inputhonv, setInputHoNV] = React.useState("");
    const [inputtennv, setInputTenNV] = React.useState("");
    const [inputngaysinhnv, setInputNgaySinhNV] = React.useState("");
    const [inputgioitinhnv, setInputGioiTinhNV] = React.useState("");
    const [inputsdtnv, setInputSDTNV] = React.useState("");
    const [inputemailnv, setInputEmailNV] = React.useState("");
    const [inputluong, setInputLuong] = React.useState("");
    const [inputdiachinv, setInputDiaChiNV] = React.useState("");

    const onChangeMaNV = event => {
        setInputMaNV(event.target.value);
    };
    const onChangeMaTK = event => {
        setInputMaTK(event.target.value);
    };
    const onChangeHoNV = event => {
        setInputHoNV(event.target.value);
    };
    const onChangeTenNV = event => {
        setInputTenNV(event.target.value);
    };
    const onChangeNgaySinhNV = event => {
        setInputNgaySinhNV(event.target.value);
    };
    const onChangeGioiTinhNV = event => {
        setInputGioiTinhNV(event.target.value);
    };
    const onChangeSDTNV = event => {
        setInputSDTNV(event.target.value);
    };
    const onChangeEmailNV = event => {
        setInputEmailNV(event.target.value);
    };
    const onChangeLuong = event => {
        setInputLuong(event.target.value);
    };
    const onChangeDiaChiNV = event => {
        setInputDiaChiNV(event.target.value);
    };
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitietnvien/" + params.id).then((response) => {
                    setInputMaNV(response.data.data.MaNV);
                    setInputMaTK(response.data.data.MaTK);
                    setInputHoNV(response.data.data.HoNV);
                    setInputTenNV(response.data.data.TenNV);
                    setInputNgaySinhNV(response.data.data.NgaySinh);
                    setInputGioiTinhNV(response.data.data.GioiTinh);
                    setInputSDTNV(response.data.data.SoDienThoai);
                    setInputEmailNV(response.data.data.Email);
                    setInputLuong(response.data.data.Luong);
                    setInputDiaChiNV(response.data.data.DiaChi);
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

    const [editstaff, setEditStaff] = React.useState(null);
    async function EditStaff() {
        if (inputgioitinhnv == -1) {
            alert('Chưa chọn giới tính');
            return false;
        }
        const staff = {
            matk: inputmatk,
            honv: inputhonv,
            tennv: inputtennv,
            ngaysinhnv: inputngaysinhnv,
            gioitinhnv: inputgioitinhnv,
            sdtnv: inputsdtnv,
            emailnv: inputemailnv,
            luong: inputluong,
            diachinv: inputdiachinv,
        };
        await axios.put("http://127.0.0.1:8000/api/nvien/" + inputmanv, staff).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setEditStaff(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }

        });
    }

    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "700px" }}>
                    <div className="singleright">
                        <form>
                            <div className='singleformInput'>
                                <label>Mã nhân viên</label>
                                <input type={"text"} value={inputmanv} onChange={onChangeMaNV} disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Mã tài khoản</label>
                                <input type={"text"} value={inputmatk} onChange={onChangeMaTK} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Họ nhân viên</label>
                                <input type={"text"} value={inputhonv} onChange={onChangeHoNV} disabled={input} />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên nhân viên</label>
                                <input type={"text"} value={inputtennv} onChange={onChangeTenNV} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Ngày sinh</label>
                                <input type={"date"} value={inputngaysinhnv} onChange={onChangeNgaySinhNV} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Giới tính</label>
                                <select value={inputgioitinhnv} onChange={onChangeGioiTinhNV} className="select-css" disabled={input}>
                                    <option value='-1'  >Chọn Giới Tính</option>
                                    <option value='0'  >Nam</option>
                                    <option value='1'  >Nữ</option>
                                </select>
                            </div>
                            <div className='singleformInput'>
                                <label>Địa chỉ</label>
                                <input type={"text"} value={inputdiachinv} onChange={onChangeDiaChiNV} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Số điện thoại</label>
                                <input type={"text"} value={inputsdtnv} onChange={onChangeSDTNV} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Email</label>
                                <input type={"email"} value={inputemailnv} onChange={onChangeEmailNV} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Lương</label>
                                <input type={"number"} value={inputluong} onChange={onChangeLuong} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                {selectMaTK ?
                                    <><label>Mã tài khoản </label>
                                        <select value={inputgioitinhnv} onChange={onChangeGioiTinhNV} className="select-css" disabled={input}>
                                            <option value='-1'>Chọn Mã Tài Khoản</option>
                                        </select>
                                    </> : null
                                }

                            </div>
                            <div className="singleformInput"   >
                                {showButtonEdit ? <button type='button' onClick={EditStaff}>Lưu</button> : null}
                                {showButtonEdit ? <button type='button' style={{ marginLeft: "20px" }} onClick={() => handleCapMaTK()}>Cấp Tài Khoản</button> : null}

                            </div>
                            <div className="singleformInput"   >
                                {buttonOK ? <button type='button' className='buttonOK'>OK</button> : null}

                            </div>
                            <div className="singleformInput"   >

                            </div>


                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
            </div>
        </div>
    );
};

export default SingleStaff;