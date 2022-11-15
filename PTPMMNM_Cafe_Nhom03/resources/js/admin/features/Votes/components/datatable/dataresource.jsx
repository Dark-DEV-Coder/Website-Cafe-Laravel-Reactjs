export const productColumns = [
    { field: 'MaBinhLuan', headerName: 'Mã Bình Luận', width: 170 }, {
        field: "accounts", headerName: "Tên Tài Khoản", width: 270, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.MaTK}
                </div>
            );
        },
    },
    {
        field: "MaSP", headerName: "Mã Nhóm Sản Phẩm", width: 210,
    },
    {
        field: "SoSao", headerName: "Số Sao Đánh Giá", width: 200,
    },


];

