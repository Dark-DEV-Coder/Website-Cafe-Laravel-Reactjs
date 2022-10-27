import React from 'react';
import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { productColumns, productRows } from './dataresource';
import { Link } from 'react-router-dom';
const Datatable = () => {
    const actionColumn = [
        {
            field: "action", headerName: "Chức năng", width: 250, renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/products/single">
                            <div className="viewButton">
                                Xem chi tiết
                            </div>
                        </Link>

                        <div className="deleteButton">
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Thêm Sản Phẩm
                <Link to="/products/new" className="link">Thêm Mới</Link>
            </div>
            <DataGrid style={{ fontSize: 16, textDecoration: "none" }}
                rows={productRows}
                columns={productColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
