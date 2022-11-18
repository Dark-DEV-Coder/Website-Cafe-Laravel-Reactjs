import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newproduct.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
import React from 'react';
import axios from 'axios';
const NewProduct = ({ title }) => {

    const [file, setFile] = useState("");
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
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();

    }, []);

    const [createproduct, setCreateProduct] = React.useState(null);
    const [inputmasp, setInputMaSP] = React.useState("");
    const [inputtensp, setInputTenSP] = React.useState("");
    const [inputncccap, setInputNCCSP] = React.useState("");
    const [inputlsp, setInputLoaiSP] = React.useState("");
    const [inputmotasp, setInputMotaSP] = React.useState("");
    const [inputhinhsp, setInputHinhSP] = React.useState("");

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
    };

    async function createProduct() {
        if (inputlsp == -1) {
            alert('Chưa chọn loại sản phẩm');
            return false;
        }
        if (inputncccap == -1) {
            alert('Chưa chọn nhà cung cấp');
            return false;
        }
        const formData = new FormData();
        formData.append('masp', inputmasp);
        formData.append('tensp', inputtensp);
        formData.append('nccap', inputncccap);
        formData.append('lsp', inputlsp);
        formData.append('motasp', inputmotasp);
        formData.append('hinhsp', inputhinhsp);
        formData.append('Method', 'POST');
        await axios.post("http://127.0.0.1:8000/api/sp", formData).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setCreateProduct(response.data);
                alert(JSON.stringify(response.data.message));
                window.location.reload();
            }

        });
    }

    return (
        <div className="new">
            <Sidebar chucNangList={listChucNang} />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form encType="multipart/form-data" file='true'>
                            <div className="formInput" key='hinhsp'>
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
                            <div className="formInput" key='masp'>
                                <label>Mã sản phẩm</label>
                                <input type='text' placeholder='Nhập mã sản phẩm' value={inputmasp} onChange={onChangeMaSP} />
                            </div>
                            <div className="formInput" key='lsp'>
                                <label>Loại sản phẩm</label>
                                <select value={inputlsp} onChange={onChangeLoaiSP}>
                                    <option value='-1'>Chọn loại sản phẩm</option>
                                    {categorys.map((cate) => (
                                        <option key={cate.MaLoaiSP} value={cate.MaLoaiSP}>{cate.TenLoai}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="formInput" key='nccap'>
                                <label>Nhà cung cấp</label>
                                <select value={inputncccap} onChange={onChangeNCCSP}>
                                    <option value='-1'>Chọn nhà cung cấp</option>
                                    {providers.map((provi) => (
                                        <option key={provi.MaNCC} value={provi.MaNCC}>{provi.TenNCC}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="formInput" key='tensp'>
                                <label>Tên sản phẩm</label>
                                <input type='text' placeholder='Nhập tên sản phẩm' value={inputtensp} onChange={onChangeTenSP} />
                            </div>
                            <div className="formInput" key='motasp'>
                                <label>Mô tả</label>
                                <textarea rows='2' placeholder='Nhập mô tả sản phẩm' value={inputmotasp} onChange={onChangeMotaSP}></textarea>
                            </div>

                            <div className="formInput" >
                                <button type='button' onClick={createProduct} className="buttonCreate">Thêm mới</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;