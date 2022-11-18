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
const SingleCustomer = ({ title }) => {
    const [file, setFile] = useState("");
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "510px" }}>
                    <div className="singleright">
                        <form>
                            <div className='singleformInput'>
                                <label>Mã Khách Hàng</label>
                                <input type={"text"} placeholder={"KH01"} disabled />
                            </div>
                            <div className='singleformInput'>

                            </div>

                            <div className='singleformInput'>
                                <label>Họ Khách Hàng</label>
                                <input type={"text"} placeholder={"Nguyễn Văn ... "} disabled={input} />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên Khách Hàng</label>
                                <input type={"text"} placeholder={"A ..."} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Ngày Sinh</label>
                                <input type={"date"} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Giới tính</label>
                                <select value={12} className="select-css" disabled={input}>
                                    <option value='-1'  >Chọn Giới Tính</option>
                                    <option value='0'  >Nam</option>
                                    <option value='1'  >Nữ</option>
                                </select>
                            </div>
                            <div className='singleformInput'>
                                <label>Địa Chỉ</label>
                                <input type={"text"} placeholder={"abc/1 ..."} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Số Điện Thoại</label>
                                <input type={"text"} placeholder={"0981826381 ..."} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Email</label>
                                <input type={"email"} placeholder={"Diencute@gmail.com ..."} disabled={input} />
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

export default SingleCustomer;