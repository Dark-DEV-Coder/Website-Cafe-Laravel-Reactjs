import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newfunction.scss";
import { listChucNang } from '../../../../../listTest';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import axios from 'axios';
const NewFunction = ({ inputs, title }) => {

    const [inputmaqtk, setInputMaQTK] = React.useState("");
    const [inputtenqtk, setInputTenQTK] = React.useState("");
    const onChangeMaQTK = event => {
        setInputMaQTK(event.target.value);
    };
    const onChangeTenQTK = event => {
        setInputTenQTK(event.target.value);
    };
    async function CreateFunction(){
        const fun= {
            maqtk: inputmaqtk,
            tenqtk: inputtenqtk,
        };
        await axios.post("http://127.0.0.1:8000/api/qtkhoan",fun).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.assign("http://127.0.0.1:8000/admin/functions/single/"+response.data.data);
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

                            <div className="formInput" key={"maqtk"}>
                                <label>Mã quyền</label>
                                <input type={"text"} placeholder={"Nhập mã quyền"} value={inputmaqtk} onChange={onChangeMaQTK} />
                            </div>
                            <div className="formInput" key={"maqtk"}>
                                <label>Tên quyền</label>
                                <input type={"text"} placeholder={"Nhập tên quyền"} value={inputtenqtk} onChange={onChangeTenQTK} />
                            </div>
                            <div className="formInput" >

                            </div>

                            <div className="formInput" >
                                <button type='button' className='buttonCreateFunction' onClick={CreateFunction}>Thêm Mới</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewFunction;