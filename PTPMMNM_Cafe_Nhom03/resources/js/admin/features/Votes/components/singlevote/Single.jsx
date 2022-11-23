import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
import React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
const SingleVote = ({title}) => {
    const [inputmabl, setInputMaBL] = React.useState("");
    const [inputemail, setInputEmail] = React.useState("");
    const [inputmasp, setInputMaSP] = React.useState("");
    const [inputndbl, setInputNDBL] = React.useState("");
    const [inputsao, setInputSao] = React.useState("");

    const params = useParams();
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/chitietdgspham/" + params.id).then((response) => {
                    setInputMaBL(response.data.data.MaBinhLuan);
                    setInputEmail(response.data.data.email);
                    setInputMaSP(response.data.data.MaSP);
                    setInputNDBL(response.data.data.BinhLuan);
                    setInputSao(response.data.data.SoSao);
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


    
    return (
        <div className="single">
            <Sidebar chucNangList={listChucNang} />
            <div className="singleContainer">
                <Navbar />
                <div className="singletop">
                    <h1>{title}</h1>

                </div>
                <div className="singlebottom" style={{ height: "700px" }}>
                    <div className="singleright">
                        <form>
                            <div className='singleformInput'>
                                <label>Mã bình luận</label>
                                <input type={"text"} value={inputmabl} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Tên tài khoản</label>
                                <input type={"text"} value={inputemail} disabled />
                            </div>

                            <div className='singleformInput'>
                                <label>Mã sản phẩm</label>
                                <input type={"text"} value={inputmasp} disabled />
                            </div>
                            <div className='singleformInput'>
                                <label>Số sao đánh giá</label>
                                <input type={"text"} value={inputsao} disabled />
                            </div> 
                            <div className='singleformInput'>
                                <label>Nội dung bình luận</label>
                                <textarea cols={40} rows={4} value={inputndbl} disabled></textarea>
                            </div>                                  
                            <div className='singleformInput'>
                                
                            </div>                      
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleVote;