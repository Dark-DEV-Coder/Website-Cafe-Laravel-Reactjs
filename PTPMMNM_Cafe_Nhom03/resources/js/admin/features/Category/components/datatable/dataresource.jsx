export const productColumns = [
    { field: 'MaLoaiSP', headerName: 'Mã loại', width: 120 }, {
        field: "category", headerName: "Tên loại sản phẩm", width: 800, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.TenLoai}
                </div>
            );
        },
    },

];

