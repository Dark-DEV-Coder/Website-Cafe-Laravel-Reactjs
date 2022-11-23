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
const SingleCustomerUser = () => {
    const [file, setFile] = useState("");
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    const params = useParams();
    const [inputmakh, setInputMaKH] = React.useState("");
    const [inputmatk, setInputMaTK] = React.useState("");
    const [inputhokh, setInputHoKH] = React.useState("");
    const [inputtenkh, setInputTenKH] = React.useState("");
    const [inputngaysinhkh, setInputNgaySinhKH] = React.useState("");
    const [inputgioitinhkh, setInputGioiTinhKH] = React.useState("");
    const [inputsdtkh, setInputSDTKH] = React.useState("");
    const [inputemailkh, setInputEmailKH] = React.useState("");
    const [inputdiachikh, setInputDiaChiKH] = React.useState("");

    const onChangeMaKH = event => {
        setInputMaKH(event.target.value);
    };
    const onChangeMaTK = event => {
        setInputMaTK(event.target.value);
    };
    const onChangeHoKH = event => {
        setInputHoKH(event.target.value);
    };
    const onChangeTenKH = event => {
        setInputTenKH(event.target.value);
    };
    const onChangeNgaySinhKH = event => {
        setInputNgaySinhKH(event.target.value);
    };
    const onChangeGioiTinhKH = event => {
        setInputGioiTinhKH(event.target.value);
    };
    const onChangeSDTKH = event => {
        setInputSDTKH(event.target.value);
    };
    const onChangeEmailKH = event => {
        setInputEmailKH(event.target.value);
    };
    const onChangeDiaChiKH = event => {
        setInputDiaChiKH(event.target.value);
    };
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitietkhhang/" + params.id).then((response) => {
                    setInputMaKH(response.data.data.MaKH);
                    setInputMaTK(response.data.data.MaTK);
                    setInputHoKH(response.data.data.HoKH);
                    setInputTenKH(response.data.data.TenKH);
                    setInputNgaySinhKH(response.data.data.NgaySinh);
                    setInputGioiTinhKH(response.data.data.GioiTinh);
                    setInputSDTKH(response.data.data.SoDienThoai);
                    setInputEmailKH(response.data.data.Email);
                    setInputDiaChiKH(response.data.data.DiaChi);
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
    return (
        <div className="single">
            <div className="singleContainer">
                <div className="singletop">
                    <h1 style={{ color: 'black' }}>Thông tin tài khoản</h1>

                </div>
                <div className="singlebottom" style={{ height: "510px" }}>
                    <div className="singleright">
                        <form>
                            <div className='singleformInput'>
                                <label>Họ</label>
                                <input type={"text"} disabled={input} />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên</label>
                                <input type={"text"} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Ngày sinh</label>
                                <input type={"date"} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Giới tính</label>
                                <select className="select-css" disabled={input}>
                                    <option value='-1'  >Chọn Giới Tính</option>
                                    <option value='0'  >Nam</option>
                                    <option value='1'  >Nữ</option>
                                </select>
                            </div>
                            <div className='singleformInput'>
                                <label>Địa chỉ</label>
                                <input type={"text"} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Số điện thoại</label>
                                <input type={"text"} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Email</label>
                                <input type={"email"} disabled={input} />
                            </div>
                            <div className="singleformInput"   >
                                {showButtonEdit ? <button className='singleformInputCus'>Lưu</button> : null}

                            </div>

                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCustomerUser;