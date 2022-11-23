export const productColumns = [
    { field: 'MaBinhLuan', headerName: 'Mã Bình Luận', width: 220 }, {
        field: "accounts", headerName: "Tên Tài Khoản", width: 270, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.email}
                </div>
            );
        },
    },
    {
        field: "MaSP", headerName: "Mã Sản Phẩm", width: 210,
    },
    {
        field: "SoSao", headerName: "Số Sao Đánh Giá", width: 200,
    },


];

