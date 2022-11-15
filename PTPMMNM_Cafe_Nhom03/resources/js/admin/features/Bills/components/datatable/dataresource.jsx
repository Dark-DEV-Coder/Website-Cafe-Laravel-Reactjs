export const productColumns = [
    { field: 'MaHD', headerName: 'Mã HĐ', width: 120 }, {
        field: "bills", headerName: "Họ Tên Khách Hàng", width: 250, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.HoKH + " "}{params.row.TenHK}
                </div>
            );
        },
    },
    {
        field: "NgayLapHD", headerName: "Ngày Lập Hóa Đơn", width: 220,
    },
    {
        field: "TongTien", headerName: "Tổng Tiền", width: 220,
    },
    {
        field: "TrangThai", headerName: "Tình Trạng", width: 180,
    },


];
