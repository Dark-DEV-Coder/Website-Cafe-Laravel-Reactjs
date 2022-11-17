export const productColumns = [
    { field: 'MaKH', headerName: 'Mã KH', width: 120 }, {
        field: "customers", headerName: "Tên Khách Hàng", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.HoKH + " "}{params.row.TenKH}
                </div>
            );
        }
    },
    {
        field: "NgaySinh", headerName: "Ngày sinh", width: 160,
    },
    {
            field: "GioiTinh", headerName: "Giới tính", width: 110, renderCell: (params) => {
                return (
                    <div >
                        {params.row.GioiTinh === 1 ? "Nữ" : "Nam"}
                    </div>
                );
            }
    },
    {
        field: "SoDienThoai", headerName: "Số điện thoại", width: 140,
    },
    {
        field: "Email", headerName: "Email", width: 250,
    },

];


