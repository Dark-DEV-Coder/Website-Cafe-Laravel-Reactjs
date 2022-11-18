export const productColumns = [
    { field: 'MaHD', headerName: 'Mã Hóa Đơn', width: 160 }, {
        field: "bills", headerName: "Họ Tên Khách Hàng", width: 280, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.HoKH + " "}{params.row.TenHK}
                </div>
            );
        },
    },
    {
        field: "NgayLapHD", headerName: "Ngày Lập Hóa Đơn", width: 240,
    },
    {
        field: "TongTien", headerName: "Tổng Tiền", width: 240,
    },

];
