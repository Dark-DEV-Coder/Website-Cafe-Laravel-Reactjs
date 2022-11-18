export const productColumns = [
    { field: 'MaSP', headerName: 'Mã SP', width: 150 }, {
        field: "product", headerName: "Tên sản phẩm", width: 330, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={'http://127.0.0.1:8000/'+params.row.Hinh} alt="avatar" />
                    {params.row.TenSP}
                </div>
            );
        },
    },
    {
        field: "SoLuong", headerName: "Số lượng", width: 140,
    },
    {
        field: "Gia", headerName: "Giá tiền", width: 180,
    },
];


