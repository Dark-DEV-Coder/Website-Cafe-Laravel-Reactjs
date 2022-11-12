import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newprovider.scss";
import { useState } from 'react';
import { listChucNang } from '../../../../../listTest';
const Newprovider = ({ inputs, title }) => {
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
                                    <input id={input.id} type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className="formInput" >
                                <button className='newpro'>Send</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newprovider;