export const productColumns = [
    { field: 'MaPNH', headerName: 'Mã PNH', width: 120 }, 
    { field: 'MaNV', headerName: 'Mã NV', width: 120 },
    {
        field: "imports", headerName: "Nhà cung cấp", width: 300, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.TenNCC}
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

