export const historyColumns = [
    { field: 'MaHD', headerName: 'Mã Hóa Đơn', width: 190 },
    {
        field: "NgayLapHD", headerName: "Ngày Lập Hóa Đơn", width: 210,
    },
    {
        field: "TongTien", headerName: "Tổng Tiền", width: 200,
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
