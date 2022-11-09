import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newcategory.scss";
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
const NewCategory = ({ inputs, title }) => {
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
                    <div className="right">
                        <form>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCategory;