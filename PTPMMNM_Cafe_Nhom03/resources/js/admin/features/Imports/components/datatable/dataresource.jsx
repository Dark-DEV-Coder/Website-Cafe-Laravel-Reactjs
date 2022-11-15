export const productColumns = [
    { field: 'MaPNH', headerName: 'Mã PNH', width: 120 }, 
    { field: 'MaNV', headerName: 'Mã NV', width: 120 },
    {
        field: "imports", headerName: "Nhà Sản Xuất", width: 300, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.MaNCC}
                </div>
            );
        },
    },
    {
        field: "TongTien", headerName: "Tổng Tiền", width: 250,
    },
    {
        field: "NgayNhapHang", headerName: "Ngày Nhập", width: 200,
    },


];

