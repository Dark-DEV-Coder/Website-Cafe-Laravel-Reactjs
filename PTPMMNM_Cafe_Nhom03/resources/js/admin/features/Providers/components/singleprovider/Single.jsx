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
const SingleProvider = ({ title }) => {
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
                <div className="singlebottom" style={{ height: "280px" }}>
                    <div className="singleright">
                        <form>
                            <div className='singleformInput'>
                                <label>Mã Nhà Cung Cấp</label>
                                <input type={"text"} placeholder={"NCC1"} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên Nhà Cung Cấp</label>
                                <input type={"text"} placeholder={"Cafe Trung Nguyên"} disabled={input} />
                            </div>

                            <div className="singleformInput" >
                                <label>Địa Chỉ</label>
                                <input type={"text"} placeholder={"abc/1 ... "} disabled={input} />
                            </div>
                            <div className="singleformInput" >
                                <label>Số Điện Thoại</label>
                                <input type={"text"} placeholder={"abc/1 ... "} disabled={input} />
                            </div>
                            <div className="singleformInput" >

                            </div>
                            <div className="singleformInput"   >
                                {showButtonEdit ? <button>Lưu</button> : null}

                            </div>



                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
            </div>
        </div>
    );
};

export default SingleProvider;