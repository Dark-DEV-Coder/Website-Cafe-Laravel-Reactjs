export const productColumns = [
    { field: 'MaQuyen', headerName: 'Mã quyền', width: 150 }, {
        field: "TenQuyen", headerName: "Tên quyền", width: 200, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.maquyen}
                </div>
            );
        },
    },
    {
        field: "email", headerName: "Email đăng nhập", width: 450,
    },


];
