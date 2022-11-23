import React from 'react';
import "./Register.scss";
import axios from 'axios';
const Register = () => {
    const [inputho, setInputHo] = React.useState("");
    const [inputten, setInputTen] = React.useState("");
    const [inputngaysinh, setInputNgaySinh] = React.useState("");
    const [inputgioitinh, setInputGioiTinh] = React.useState("");
    const [inputsdt, setInputSDT] = React.useState("");
    const [inputemail, setInputEmail] = React.useState("");
    const [inputdiachi, setInputDiaChi] = React.useState("");
    const [inputpass, setInputPass] = React.useState("");
    const [inputconfirmpass, setInputConfirmPass] = React.useState("");

    const onChangeConfirmPass = event => {
        setInputConfirmPass(event.target.value);
    };
    const onChangePass = event => {
        setInputPass(event.target.value);
    };
    const onChangeHo = event => {
        setInputHo(event.target.value);
    };
    const onChangeTen = event => {
        setInputTen(event.target.value);
    };
    const onChangeNgaySinh = event => {
        setInputNgaySinh(event.target.value);
    };
    const onChangeGioiTinh = event => {
        setInputGioiTinh(event.target.value);
    };
    const onChangeSDT = event => {
        setInputSDT(event.target.value);
    };
    const onChangeEmail = event => {
        setInputEmail(event.target.value);
    };
    const onChangeDiaChi = event => {
        setInputDiaChi(event.target.value);
    };
    function DangKy(){        
        const thongtin = {
            ho: inputho,
            ten: inputten,
            ngaysinh: inputngaysinh,
            gioitinh: inputgioitinh,
            sdt: inputsdt,
            email: inputemail,            
            diachi: inputdiachi,
            password: inputpass,
            cfpass: inputconfirmpass,
        };
        axios.post("http://127.0.0.1:8000/api/user/register", thongtin).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                alert("Thành công");
                //window.location.assign("http://127.0.0.1:8000/home");
            }

        });
        
    }
    return (
        <div className="maincontainer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-5">

                            <h3 style={{ textAlign: 'center' }}>Đăng ký tài khoản</h3>

                            <div className="tab-content">

                                <div id="nav-tab-card" className="tab-pane fade show active">
                                    <form role="form">
                                        <div className="form-group">
                                            <label for="username">Email</label>
                                            <input type="text" value={inputemail} onChange={onChangeEmail} required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Mật khẩu</label>
                                            <input type="password" value={inputpass} onChange={onChangePass} required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Xác nhận mật khẩu</label>
                                            <input type="password" value={inputconfirmpass} onChange={onChangeConfirmPass} required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Họ</label>
                                            <input type="text" value={inputho} onChange={onChangeHo} required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Tên</label>
                                            <input type="text" value={inputten} onChange={onChangeTen} required className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <label for="ngaysinh">Ngày sinh</label>
                                            <input type="date" value={inputngaysinh} onChange={onChangeNgaySinh} required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Giới tính</label>
                                            <select value={inputgioitinh} onChange={onChangeGioiTinh} className="select-css" >
                                                <option value='-1'>Chọn giới tính</option>
                                                <option value='0'>Nam</option>
                                                <option value='1'>Nữ</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Số điện thoại</label>
                                            <input type="text" value={inputsdt} onChange={onChangeSDT} required className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label for="hokh">Địa chỉ</label>
                                            <input type="text" value={inputdiachi} onChange={onChangeDiaChi} required className="form-control" />
                                        </div>
                                        <button onClick={DangKy} type="button" className=" buttonRis subscribe btn btn-primary btn-block rounded-pill shadow-sm"> ĐĂNG KÝ  </button>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
