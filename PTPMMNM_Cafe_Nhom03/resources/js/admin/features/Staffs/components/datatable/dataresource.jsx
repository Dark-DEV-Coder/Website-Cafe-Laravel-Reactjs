export const productColumns = [
    { field: 'MaNV', headerName: 'Mã NV', width: 120 }, {
        field: "staffs", headerName: "Tên Nhân Viên", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.HoNV + " "}{params.row.TenNV}
                </div>
            );
        },
    },
    {
        field: "NgaySinh", headerName: "Ngày sinh", width: 140,
    },
    {
        field: "GioiTinh", headerName: "Giới tính", width: 110,
    },
    {
        field: "SoDienThoai", headerName: "Số điện thoại", width: 170,
    },
    {
        field: "Email", headerName: "Email", width: 250,
    },

];


