import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newcategory.scss";
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
import React from 'react';
import axios from 'axios';
const NewCategory = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [createcate, setCreateCategory] = React.useState(null);
    const [inputmalsp, setInputMaLSP] = React.useState("");
    const [inputtenlsp, setInputTenLSP] = React.useState("");

    const onChangeMaLSP = event => {
        setInputMaLSP(event.target.value);
    };
    const onChangeTenLSP = event => {
        setInputTenLSP(event.target.value);
    };

    function createCategory() {
        const cate = {
            maloai: inputmalsp,
            tenloai: inputtenlsp,
        };
        axios.post("http://127.0.0.1:8000/api/lspham", cate).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setCreateCategory(response.data);
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
                    <div className="right">
                        <form>
                            <div className="formInput" key='MaLoaiSP'>
                                <label>Mã loại</label>
                                <input type='text' placeholder='Nhập mã loại sản phẩm' value={inputmalsp} onChange={onChangeMaLSP} />
                            </div>
                            <div className="formInput" key='TenLoai'>
                                <label>Tên loại sản phẩm</label>
                                <input type='text' placeholder='Nhập tên loại sản phẩm' value={inputtenlsp} onChange={onChangeTenLSP} />
                            </div>
                            <button className='buttonCreateCate' type='button' onClick={createCategory}>Thêm Mới</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCategory;