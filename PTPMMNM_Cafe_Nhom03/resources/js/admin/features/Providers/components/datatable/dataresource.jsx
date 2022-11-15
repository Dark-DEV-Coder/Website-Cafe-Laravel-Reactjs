export const productColumns = [
    { field: 'MaNCC', headerName: 'Mã NCC', width: 140 }, {
        field: "provider", headerName: "Tên nhà cung cấp", width: 600, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.TenNCC}
                </div>
            );
        },
    },
    {
        field: "SoDienThoai", headerName: "Số điện thoại", width: 160,
    },
];
