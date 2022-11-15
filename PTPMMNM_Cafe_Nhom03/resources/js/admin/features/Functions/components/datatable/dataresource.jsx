export const productColumns = [
    { field: 'MaQuyen', headerName: 'Mã Quyền', width: 150 }, {
        field: "functions", headerName: "Tên Quyền", width: 500, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.TenQuyen}
                </div>
            );
        },
    },


];
