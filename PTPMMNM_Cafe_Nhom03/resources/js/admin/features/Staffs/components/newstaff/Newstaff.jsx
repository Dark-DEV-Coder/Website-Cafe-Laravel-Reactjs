import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import "./Newstaff.scss";
import Select from "react-select";
import { listChucNang } from '../../../../../listTest';
const NewStaff = ({ inputs, title }) => {
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
                                <Select options={options}></Select>
                            </div>
                            <div className="formInput">

                            </div>
                            <div className="formInput">
                                <button>Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewStaff;