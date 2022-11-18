import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newcustomers.scss";
import Select from "react-select";
import { listChucNang } from '../../../../../listTest';
const Newcustomers = ({ inputs, title }) => {
    const options = [
        { value: 'male', label: 'Nam' },
        { value: 'female', label: 'Nữ' },
    ]
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
                            <div className="formInput">
                                <label>Giới tính</label>
                                <select value={13} className="select-css" >
                                    <option value='-1'>Chọn giới tính</option>
                                    <option value='0'>Nam</option>
                                    <option value='1'>Nữ</option>
                                </select>
                            </div>
                            <div className="formInput" >
                                <button className='newcus'>Thêm Mới</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newcustomers;