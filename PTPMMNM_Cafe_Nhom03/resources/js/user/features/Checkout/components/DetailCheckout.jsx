import React from 'react';
import "./DetailCheckout.scss";
import "../../../../../css/bootstrap2.min.css";
import axios from 'axios';
const DetailCheckout = () => {

    const [total, SetTotal] = React.useState("");
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                if (localStorage['cart']){
                    let sp = JSON.parse(localStorage.getItem('cart')); 
                    let t= 0;                     
                    for (let i=0;i<sp.length;i++){
                        t+=(sp[i].productcount * sp[i].productprice);
                    }
                    SetTotal(t);
                }
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();
    }, []);
    const [inputho, setInputHo] = React.useState("");
    const [inputten, setInputTen] = React.useState("");
    const [inputngaysinh, setInputNgaySinh] = React.useState("");
    const [inputgioitinh, setInputGioiTinh] = React.useState("");
    const [inputsdt, setInputSDT] = React.useState("");
    const [inputemail, setInputEmail] = React.useState("");
    const [inputdiachi, setInputDiaChi] = React.useState("");

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

    function XacNhanThongTin(){        
        const thongtin = {
            ho: inputho,
            ten: inputten,
            ngaysinh: inputngaysinh,
            gioitinh: inputgioitinh,
            sdt: inputsdt,
            email: inputemail,            
            diachi: inputdiachi,
        };
        axios.post("http://127.0.0.1:8000/api/xacnhanthongtin", thongtin).then((response) => {
            if (response.data.status == false) {
                alert(JSON.stringify(response.data.message));
            }
            else {
                localStorage.setItem('thongtin',JSON.stringify(thongtin));
                window.location.assign("http://127.0.0.1:8000/checkout/OrderCon");
            }

        });
        
    }

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 ftco-animate">
                        <form action="#" className="billing-form">
                            <h3 className="mb-4 billing-heading">Chi tiết thanh toán</h3>
                            <div className="row align-items-end">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Họ khách hàng</label>
                                        <input type={"text"} className="form-control" value={inputho} onChange={onChangeHo} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Tên khách hàng</label>
                                        <input type={"text"} className="form-control" value={inputten} onChange={onChangeTen} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Ngày sinh</label>
                                        <input type={"date"} className="form-control" value={inputngaysinh} onChange={onChangeNgaySinh} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Giới tính</label>
                                        <select className="select-css" value={inputgioitinh} onChange={onChangeGioiTinh}>
                                            <option value='-1'  >Chọn Giới Tính</option>
                                            <option value='0'  >Nam</option>
                                            <option value='1'  >Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-100"></div>

                                <div className="w-100"></div>

                                <div className="w-100"></div>

                                <div className="w-100"></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <input type={"text"} className="form-control" value={inputsdt} onChange={onChangeSDT} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type={"text"} className="form-control" value={inputemail} onChange={onChangeEmail} />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="country">Địa chỉ</label>
                                        <div className="select-wrap">
                                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                            <input type={"text"} className="form-control" value={inputdiachi} onChange={onChangeDiaChi} ></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100"></div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-5">
                        <div className="row mt-5 pt-3">
                            <div className="col-md-12 d-flex mb-5">
                                <div className="cart-detail cart-total p-3 p-md-4">
                                    <h3 className="billing-heading mb-4">Tổng hóa đơn</h3>
                                    <p className="d-flex">
                                        <span>Tổng giá trị sản phẩm</span>
                                        <span>{total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Thuế (VAT)</span>
                                        <span>0%</span>
                                    </p>
                                    <hr />
                                    <p className="d-flex total-price">
                                        <span>Tổng cộng</span>
                                        <span>{total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="cart-detail p-3 p-md-4">
                                    {/* <h3 className="billing-heading mb-4">Payment Method</h3> */}
                                    <p><a onClick={XacNhanThongTin} className="btn btn-primary py-3 px-4">TIẾP TỤC</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailCheckout
