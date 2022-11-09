export const productColumns = [
    { field: 'id', headerName: 'Mã Bình Luận', width: 170 }, {
        field: "accounts", headerName: "Tên Tài Khoản", width: 270, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.matk}
                </div>
            );
        },
    },
    {
        field: "masp", headerName: "Mã Nhóm Sản Phẩm", width: 210,
    },
    {
        field: "sosao", headerName: "Số Sao Đánh Giá", width: 200,
    },


];


export const productRows = [
    {
        id: 1,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 2,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 3,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 4,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 5,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 6,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 7,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 8,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 9,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
    {
        id: 10,
        matk: "Admin",
        masp: "Diencute",
        binhluan: "Diencute",
        sosao: 5
    },
];