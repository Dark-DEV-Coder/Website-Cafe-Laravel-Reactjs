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
const SingleCategory = ({ title }) => {
    const [file, setFile] = useState("");
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }
    const params = useParams();
    const [inputmalsp, setInputMaLSP] = React.useState("");
    const [inputtenlsp, setInputTenLSP] = React.useState("");

    const onChangeMaLSP = event => {
        setInputMaLSP(event.target.value);
    };
    const onChangeTenLSP = event => {
        setInputTenLSP(event.target.value);
    };
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitietlspham/" + params.id).then((response) => {
                    setInputMaLSP(response.data.data.MaLoaiSP);
                    setInputTenLSP(response.data.data.TenLoai);
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

    const [editcategory, setEditCategory] = React.useState(null);
    async function EditCategory() {
        const cate = {
            malsp: inputmalsp,
            tenlsp: inputtenlsp,
        };
        await axios.put("http://127.0.0.1:8000/api/lspham/"+inputmalsp, cate).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setEditCategory(response.data);
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
                <div className="singlebottom" style={{ height: "200px" }}>
                    <div className="singleright">

                        <form>
                            <div className='singleformInput'>
                                <label>Mã Loại Sản Phẩm</label>
                                <input type={"text"} value={inputmalsp} onChange={onChangeMaLSP} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên Loại Sản Phẩm</label>
                                <input type={"text"} value={inputtenlsp} onChange={onChangeTenLSP} disabled={input} />
                            </div>

                            <div className='singleformInput'>

                            </div>
                            <div className="singleformInput"   >
                                {showButtonEdit ? <button type='button' onClick={EditCategory}>Lưu</button> : null}

                            </div>



                        </form>
                    </div>
                    <div className="singleButtonEdit" onClick={() => handleEditClick()}>Edit</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;