export const productColumns = [
    { field: 'MaHD', headerName: 'Mã HĐ', width: 120 }, {
        field: "bills", headerName: "Họ Tên Khách Hàng", width: 250, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.HoKH + " "}{params.row.TenKH}
                </div>
            );
        },
    },
    {
        field: "NgayLapHD", headerName: "Ngày Lập Hóa Đơn", width: 220,
    },
    {
        field: "TongTien", headerName: "Tổng Tiền", width: 180,
    },
    {
        field: "TrangThai", headerName: "Trạng thái", width: 180, renderCell: (params) => {
            return (
                <div >
                    {params.row.TrangThai == 1 ? "Đang chờ xác nhận" : 
                    params.row.TrangThai == 2 ? "Đã xác nhận" :
                    params.row.TrangThai == 3 ? "Đang giao hàng" : "Hoàn thành"}
                </div>
            );
        }
    },


];
