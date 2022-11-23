import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import Select from "react-select";
import "./Newimport.scss";
import { listChucNang } from '../../../../../listTest';
import React from 'react';
import axios from 'axios';
const NewImport = ({ title }) => {
    const [inputncccap, setInputNCCSP] = React.useState("");
    const [inputngaynhaphang, setInputNgayNhapHang] = React.useState("");
    const onChangeNCCSP = event => {
        setInputNCCSP(event.target.value);
    };
    const onChangeNgayNhapHang = event => {
        setInputNgayNhapHang(event.target.value);
    };
    const [providers, setProvider] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/nccap").then((response) => {
                    setProvider(response.data.data);
                });
                const newDate = new Date()
                const date = newDate.getDate();
                const month = newDate.getMonth() + 1;
                const year = newDate.getFullYear();
                const current = `${year}-${month<10?`0${month}`:`${month}`}-${date}`;
                setInputNgayNhapHang(current);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoaded(true);
            }
        })();

    }, []);

    async function CreateImport(){
        const imp= {
            mancc: inputncccap,
            ngay: inputngaynhaphang,
            manv: JSON.parse(localStorage.getItem('idnv')),
        };
        await axios.post("http://127.0.0.1:8000/api/pnhang",imp).then((response) => {
            if (response.data.status == false){
                alert(JSON.stringify(response.data.message));
            }
            else{
                alert(JSON.stringify(response.data.message));
                window.location.assign("http://127.0.0.1:8000/admin/imports/single/"+response.data.data);
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
                            <div className="formInput">
                                <label>Nhà cung cấp</label>
                                <select value={inputncccap} onChange={onChangeNCCSP} className="select-css">
                                    <option value='-1'>Chọn nhà cung cấp</option>
                                    {providers.map((provi) => (
                                        <option key={provi.MaNCC} value={provi.MaNCC}>{provi.TenNCC}</option>
                                    ))}
                                </select>
                            </div>                            
                            <div className="formInput" key='ngaynhaphang'>
                                    <label>Ngày nhập hàng</label>
                                    <input type='date' value={inputngaynhaphang} onChange={onChangeNgayNhapHang} />
                            </div>
                            <div className="formInput" >
                                    
                            </div>
                            <div className="formInput">
                                <button type='button' onClick={CreateImport} className='buttonCreateImport'>Thêm Mới</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewImport;