import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newstaff.scss";
import Select from "react-select";
import { listChucNang } from '../../../../../listTest';
import axios from 'axios';
import React from 'react';
const NewStaff = ({ inputs, title }) => {

    const [createstaff, setCreateStaff] = React.useState(null);
    const [inputhonv, setInputHoNV] = React.useState("");
    const [inputtennv, setInputTenNV] = React.useState("");
    const [inputngaysinhnv, setInputNgaySinhNV] = React.useState("");
    const [inputgioitinhnv, setInputGioiTinhNV] = React.useState("");
    const [inputsdtnv, setInputSDTNV] = React.useState("");
    const [inputemailnv, setInputEmailNV] = React.useState("");
    const [inputluong, setInputLuong] = React.useState("");
    const [inputdiachinv, setInputDiaChiNV] = React.useState("");

    const onChangeHoNV = event => {
        setInputHoNV(event.target.value);
    };
    const onChangeTenNV = event => {
        setInputTenNV(event.target.value);
    };
    const onChangeNgaySinhNV = event => {
        setInputNgaySinhNV(event.target.value);
    };
    const onChangeGioiTinhNV = event => {
        setInputGioiTinhNV(event.target.value);
    };
    const onChangeSDTNV = event => {
        setInputSDTNV(event.target.value);
    };
    const onChangeEmailNV = event => {
        setInputEmailNV(event.target.value);
    };
    const onChangeLuong = event => {
        setInputLuong(event.target.value);
    };
    const onChangeDiaChiNV = event => {
        setInputDiaChiNV(event.target.value);
    };


    async function createStaff() {
        // if (inputgioitinhnv == -1){
        //     alert('Chưa chọn giới tính');
        //     return false;
        // }
        const staff = {
            honv: inputhonv,
            tennv: inputtennv,
            ngaysinhnv: inputngaysinhnv,
            gioitinhnv: inputgioitinhnv,
            sdtnv: inputsdtnv,
            emailnv: inputemailnv,
            luong: inputluong,
            diachinv: inputdiachinv,
        };
        await axios.post("http://127.0.0.1:8000/api/nvien", staff).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                setCreateStaff(response.data);
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
                            <div className="formInput" key='honv'>
                                <label>Họ nhân viên</label>
                                <input type='text' placeholder='Nhập họ nhân viên' value={inputhonv} onChange={onChangeHoNV} />
                            </div>
                            <div className="formInput" key='tennv'>
                                <label>Tên nhân viên</label>
                                <input type='text' placeholder='Nhập tên nhân viên' value={inputtennv} onChange={onChangeTenNV} />
                            </div>
                            <div className="formInput" key='ngaysinhnv'>
                                <label>Ngày sinh</label>
                                <input type='date' value={inputngaysinhnv} onChange={onChangeNgaySinhNV} />
                            </div>
                            <div className="formInput" key='gioitinhnv'>
                                <label>Giới tính</label>
                                <select value={inputgioitinhnv} onChange={onChangeGioiTinhNV} className="select-css" >
                                    <option value='-1'>Chọn giới tính</option>
                                    <option value='0'>Nam</option>
                                    <option value='1'>Nữ</option>
                                </select>
                            </div>
                            <div className="formInput" key='sdtnv'>
                                <label>Số điện thoại</label>
                                <input type='text' placeholder='Nhập số điện thoại' value={inputsdtnv} onChange={onChangeSDTNV} />
                            </div>
                            <div className="formInput" key='emailnv'>
                                <label>Email</label>
                                <input type='text' placeholder='Nhập email' value={inputemailnv} onChange={onChangeEmailNV} />
                            </div>
                            <div className="formInput" key='luong'>
                                <label>Lương</label>
                                <input type='number' placeholder='Nhập lương nhân viên' value={inputluong} onChange={onChangeLuong} />
                            </div>
                            <div className="formInput" key='diachinv'>
                                <label>Địa chỉ</label>
                                <textarea rows='1' placeholder='Nhập địa chỉ' value={inputdiachinv} onChange={onChangeDiaChiNV}></textarea>
                            </div>
                            <div className="formInput">
                                <button type='button' onClick={createStaff}>Create</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewStaff;