import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { productColumns } from './dataresource';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Datatable = () => {
    const [search, setSearch] = React.useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const [votes, setVote] = React.useState([]);
    const [error, setError] = React.useState("");
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        (async () => {
            try {
                await axios.get("http://127.0.0.1:8000/api/dgspham").then((response) => {
                    setVote(response.data.data);
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

    const [inputtentk, setInputTenTK] = React.useState("");
    const onChangeTenTK = event => {
        setInputTenTK(event.target.value);
    };
    async function FindVote() {
        await axios.get("http://127.0.0.1:8000/api/dgspham/" + inputtentk).then((response) => {
            setVote(response.data.data);
        });
    }

    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={"/admin/votes/single/"+params.row.MaBinhLuan}>
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>
                    </div>
                );
            },
        },
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Đánh giá sản phẩm

            </div>
            <div className="search">

                <input type="text" placeholder="Nhập tên tài khoản cần tìm ..." value={inputtentk} onChange={onChangeTenTK} onKeyUp={FindVote} />
                <button className='timKiem' onClick={FindVote}>Tìm kiếm</button>
            </div>
            <DataGrid style={{ fontSize: 14, textDecoration: "none", marginTop: "10px", height: "520px" }}
                getRowId={(row) => row.MaBinhLuan}
                rows={votes}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
