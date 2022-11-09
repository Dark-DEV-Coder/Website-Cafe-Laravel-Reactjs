export const productColumns = [
    { field: 'id', headerName: 'Mã NV', width: 150 }, {
        field: "functions", headerName: "Tên Quyền", width: 500, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.ten}
                </div>
            );
        },
    },


];


export const productRows = [
    {
        id: 1,
        ten: "Admin",
    },
    {
        id: 2,
        ten: "Nhân Viên",
    },
    {
        id: 3,
        ten: "Nhân Viên",
    },
    {
        id: 4,
        ten: "Nhân Viên",
    },

];