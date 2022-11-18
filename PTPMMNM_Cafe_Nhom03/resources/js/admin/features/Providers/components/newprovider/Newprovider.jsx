import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newprovider.scss";
import React from 'react';
import { listChucNang } from '../../../../../listTest';
import axios from 'axios';
const Newprovider = ({ title }) => {


    const [createprovider, setCreateProvider] = React.useState(null);
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

    function createProvider() {
        const provi = {
            mancc: inputmancc,
            tenncc: inputtenncc,
            diachincc: inputdcncc,
            sdtncc: inputsdtncc,
        };
        axios.post("http://127.0.0.1:8000/api/nccap", provi).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setCreateProvider(response.data);
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

                            <div className="formInput" key='mancc'>
                                <label>Mã nhà cung cấp</label>
                                <input id='mancc' type='text' placeholder='Nhập mã nhà cung cấp' value={inputmancc} onChange={onChangeMaNCC} />
                            </div>
                            <div className="formInput" key='tenncc'>
                                <label>Tên nhà cung cấp</label>
                                <input id='tenncc' type='text' placeholder='Nhập tên nhà cung cấp' value={inputtenncc} onChange={onChangeTenNCC} />
                            </div>
                            <div className="formInput" key='diachincc'>
                                <label>Địa chỉ</label>
                                <input id='diachincc' type='text' placeholder='Nhập địa chỉ nhà cung cấp' value={inputdcncc} onChange={onChangeDiaChiNCC} />
                            </div>
                            <div className="formInput" key='sdtncc'>
                                <label>Số điện thoại</label>
                                <input id='sdtncc' type='text' placeholder='Nhập số điện thoại' value={inputsdtncc} onChange={onChangeSDTNCC} />
                            </div>
                            <div className="formInput" key='sdtncc'>

                            </div>
                            <div className="formInput" >
                                <button type='button' onClick={createProvider} className='newpro'>Thêm Mới</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newprovider;