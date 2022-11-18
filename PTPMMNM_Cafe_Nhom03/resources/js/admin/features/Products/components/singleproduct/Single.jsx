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
const SingleProduct = ({ title }) => {
    const [file, setFile] = useState("");
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    console.log(file);
    const options = [
        { value: 'ad', label: 'Admin' },
        { value: 'nv', label: 'Nhân viên' },
        { value: 'ql', label: 'Quản lý' }
    ]
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "550px" }}>

                    <div className="singleleft">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>

                    <div className="singleright">

                        <form>
                            <div className="singleformInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            <div className="singleformInput" >

                            </div>
                            <div className='singleformInput'>
                                <label>Mã Sản Phẩm</label>
                                <input type={"text"} placeholder={"ABC"} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên sản phẩm</label>
                                <input type={"text"} placeholder={"ABC"} disabled={input} />
                            </div>

                            <div className="singleformInput" >
                                <label>Mã Loại Sản Phẩm</label>
                                <select value={12} className="select-css" disabled={input}>
                                    <option value='-1'  >Chọn Mã Loại Sản Phẩm</option>

                                </select>
                            </div>
                            <div className="singleformInput" >
                                <label>Mã Nhà Cung Cấp</label>
                                <select value={12} className="select-css" disabled={input} >
                                    <option value='-1'  >Chọn Mã Nhà Cung Cấp</option>

                                </select>
                            </div>
                            <div className='singleformInput'>
                                <label>Số Lượng</label>
                                <input type={"number"} placeholder={"123000"} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Giá</label>
                                <input type={"number"} placeholder={"123000"} disabled={input} />
                            </div>
                            <div className='singleformInput'>
                                <label>Mô Tả</label>
                                <textarea className="form-input" placeholder="Tell us about yourself" rows={4} disabled={input}></textarea>
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

export default SingleProduct;