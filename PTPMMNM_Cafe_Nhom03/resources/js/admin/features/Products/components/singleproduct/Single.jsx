import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Single.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
const SingleProduct = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    console.log(file);
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
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className="formInput" >

                            </div>

                            <div className="formInput" >
                                <button>Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;