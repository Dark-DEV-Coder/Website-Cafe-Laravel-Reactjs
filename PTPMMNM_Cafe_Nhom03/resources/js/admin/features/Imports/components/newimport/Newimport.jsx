import Sidebar from '../../../../components/sidebar/Sidebar';
import Navbar from '../../../../components/navbar/Navbar';
import Select from "react-select";
import "./Newimport.scss";
import { listChucNang } from '../../../../../listTest';
const NewImport = ({ inputs, title }) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
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
                            <div className="formInput">
                                <label>Nhà sản xuất</label>
                                <Select options={options}></Select>
                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
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

export default NewImport;