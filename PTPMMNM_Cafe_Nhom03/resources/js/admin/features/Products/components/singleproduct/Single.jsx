import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
const SingleProduct = ({ title }) => {
    const [file, setFile] = useState("");
    const [input, setInput] = useState(true);
    const [showButtonEdit, setShowButtonEdit] = useState(false);
    const handleEditClick = () => {
        setInput(false);
        setShowButtonEdit(true);
    }

    const [inputmasp, setInputMaSP] = React.useState("");
    const [inputtensp, setInputTenSP] = React.useState("");
    const [inputncccap, setInputNCCSP] = React.useState("");
    const [inputlsp, setInputLoaiSP] = React.useState("");
    const [inputmotasp, setInputMotaSP] = React.useState("");
    const [inputhinhsp, setInputHinhSP] = React.useState("");
    const [doihinh, setDoiHinhSP] = React.useState(0);
    const [inputsoluong, setInputSoLuong] = React.useState("");
    const [inputgianhap, setInputGiaNhap] = React.useState("");
    const [inputgiaban, setInputGiaBan] = React.useState("");

    const params = useParams();
    const [categorys, setCategory] = React.useState([]);
    const [providers, setProvider] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
   
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/lspham").then((response) => {
                    setCategory(response.data.data);
                });
                await axios.get("http://127.0.0.1:8000/api/nccap").then((response) => {
                    setProvider(response.data.data);
                });
                await axios.get("http://127.0.0.1:8000/api/chitietsp/" + params.id).then((response) => {
                    setInputMaSP(response.data.data.MaSP);
                    setInputTenSP(response.data.data.TenSP);
                    setInputNCCSP(response.data.data.MaNCC);
                    setInputLoaiSP(response.data.data.MaLoaiSP);
                    setInputMotaSP(response.data.data.MoTa);
                    setInputHinhSP(response.data.data.Hinh);
                    setInputSoLuong(response.data.data.SoLuong);
                    setInputGiaNhap(response.data.data.Gia);
                    setInputGiaBan(response.data.data.GiaBan);
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

    const onChangeMaSP = event => {
        setInputMaSP(event.target.value);
    };
    const onChangeTenSP = event => {
        setInputTenSP(event.target.value);
    };
    const onChangeNCCSP = event => {
        setInputNCCSP(event.target.value);
    };
    const onChangeLoaiSP = event => {
        setInputLoaiSP(event.target.value);
    };
    const onChangeMotaSP = event => {
        setInputMotaSP(event.target.value);
    };
    const onChangeHinhSP = event => {
        setInputHinhSP(event.target.files[0]);
        setFile(event.target.files[0])
        setDoiHinhSP(1);
    };
    const onChangeSoLuongSP = event => {
        setInputSoLuong(event.target.value);
    };
    const onChangeGiaNhapSP = event => {
        setInputGiaNhap(event.target.value);
    };
    const onChangeGiaBanSP = event => {
        setInputGiaBan(event.target.value);
    };

    const [editproduct, setEditProduct] = React.useState(null);
    async function EditProduct() {
        if (inputlsp == -1) {
            alert('Chưa chọn loại sản phẩm');
            return false;
        }
        if (inputncccap == -1) {
            alert('Chưa chọn nhà cung cấp');
            return false;
        }
        const data = new FormData();
        data.append('masp', inputmasp);
        data.append('tensp', inputtensp);
        data.append('nccap', inputncccap);
        data.append('lsp', inputlsp);
        data.append('motasp', inputmotasp);
        data.append('hinhsp', inputhinhsp);
        data.append('doihinh', doihinh);
        data.append('Method', 'PUT');
        await axios.post("http://127.0.0.1:8000/api/sp", data).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setEditProduct(response.data);
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
                <div className="singlebottom" style={{ height: "570px" }}>

                    <div className="singleleft">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "http://127.0.0.1:8000/" + inputhinhsp
                            }
                            alt=""
                        />
                    </div>

                    <div className="singleright">
                        <form encType="multipart/form-data" file='true'>
                            <div className="singleformInput" key='hinhsp'>
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={onChangeHinhSP}
                                    style={{ display: "none" }}
                                    accept='image/*'
                                />
                            </div>
                            <div className='singleformInput' key='masp'>
                                <label>Mã Sản Phẩm</label>
                                <input type={"text"} value={inputmasp} onChange={onChangeMaSP} disabled />
                            </div>

                            <div className='singleformInput' key='tensp'>
                                <label>Tên sản phẩm</label>
                                <input type={"text"} value={inputtensp} onChange={onChangeTenSP} disabled={input} />
                            </div>

                            <div className="singleformInput" >
                                <label>Loại sản phẩm</label>
                                <select value={inputlsp} onChange={onChangeLoaiSP} className="select-css" disabled={input}>
                                    <option value='-1' >Chọn loại sản phẩm</option>
                                    {categorys.map((cate) => (
                                        <option key={cate.MaLoaiSP} value={cate.MaLoaiSP}>{cate.TenLoai}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="singleformInput" >
                                <label>Nhà cung cấp</label>
                                <select value={inputncccap} onChange={onChangeNCCSP} className="select-css" disabled={input} >
                                    <option value='-1'  >Chọn nhà cung cấp</option>
                                    {providers.map((provi) => (
                                        <option key={provi.MaNCC} value={provi.MaNCC}>{provi.TenNCC}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='singleformInput'>
                                <label>Số Lượng</label>
                                <input type={"number"} value={inputsoluong} onChange={onChangeSoLuongSP} disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Giá nhập</label>
                                <input type={"number"} value={inputgianhap} onChange={onChangeGiaNhapSP} disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Giá bán</label>
                                <input type={"number"} value={inputgiaban} onChange={onChangeGiaBanSP} disabled />
                            </div>
                            <div className='singleformInput' key='motasp'>
                                <label>Mô Tả</label>
                                <textarea className="form-input" value={inputmotasp} onChange={onChangeMotaSP} rows={4} disabled={input}></textarea>
                            </div>
                            <div className="singleformInput"   >
                                {showButtonEdit ? <button type='button' onClick={EditProduct}>Lưu</button> : null}
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