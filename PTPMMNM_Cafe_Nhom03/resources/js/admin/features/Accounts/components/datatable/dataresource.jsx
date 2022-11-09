export const productColumns = [
    { field: 'id', headerName: 'Mã NV', width: 150 }, {
        field: "accounts", headerName: "Quyền Tài Khoản", width: 200, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.maquyen}
                </div>
            );
        },
    },
    {
        field: "taikhoan", headerName: "Tên Tài Khoản", width: 450,
    },


];


export const productRows = [
    {
        id: 1,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 2,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 3,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 4,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 5,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 6,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 7,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 8,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 9,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
    {
        id: 10,
        maquyen: "Admin",
        taikhoan: "Diencute",
        pass: "Diencute"
    },
];