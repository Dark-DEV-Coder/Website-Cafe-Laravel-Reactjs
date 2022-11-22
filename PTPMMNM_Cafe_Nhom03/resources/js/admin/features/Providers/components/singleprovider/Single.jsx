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
const SingleProvider = ({ title }) => {
    const [file, setFile] = useState("");
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }

    const params = useParams();
    const [inputmancc, setInputMaNCC] = React.useState("");
    const [inputtenncc, setInputTenNCC] = React.useState("");
    const [inputdcncc, setInputDiaChiNCC] = React.useState("");
    const [inputsdtncc, setInputSDTNCC] = React.useState("");

    const onChangeMaNCC = event => {
        setInputMaNCC(event.target.value);
    };
    const onChangeTenNCC = event => {
        setInputTenNCC(event.target.value);
    };
    const onChangeDiaChiNCC = event => {
        setInputDiaChiNCC(event.target.value);
    };
    const onChangeSDTNCC = event => {
        setInputSDTNCC(event.target.value);
    };
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitietncc/" + params.id).then((response) => {
                    setInputMaNCC(response.data.data.MaNCC);
                    setInputTenNCC(response.data.data.TenNCC);
                    setInputDiaChiNCC(response.data.data.DiaChi);
                    setInputSDTNCC(response.data.data.SoDienThoai);
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

    const [editprovider, setEditProvider] = React.useState(null);
    async function EditProvider() {
        const provi = {
            mancc: inputmancc,
            tenncc: inputtenncc,
            diachincc: inputdcncc,
            sdtncc: inputsdtncc,
        };
        await axios.put("http://127.0.0.1:8000/api/nccap/" + inputmancc, provi).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setEditProvider(response.data);
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
                <div className="singlebottom" style={{ height: "320px" }}>
                    <div className="singleright">
                        <form>
                            <div className='singleformInput'>
                                <label>Mã Nhà Cung Cấp</label>
                                <input type={"text"} value={inputmancc} onChange={onChangeMaNCC} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên Nhà Cung Cấp</label>
                                <input type={"text"} value={inputtenncc} onChange={onChangeTenNCC} disabled={input} />
                            </div>
                            <div className="singleformInput" >
                                <label>Số Điện Thoại</label>
                                <input type={"text"} value={inputsdtncc} onChange={onChangeSDTNCC} disabled={input} />
                            </div>
                            <div className="singleformInput" >
                                <label>Địa Chỉ</label>
                                <textarea rows={"3"} cols={"50"} value={inputdcncc} onChange={onChangeDiaChiNCC} disabled={input}></textarea>
                            </div>

                            <div className="singleformInput" >

                            </div>
                            <div className="singleformInput"   >
                                {showButtonEdit ? <button className='buttonSave' type='button' onClick={EditProvider}>Lưu</button> : null}

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