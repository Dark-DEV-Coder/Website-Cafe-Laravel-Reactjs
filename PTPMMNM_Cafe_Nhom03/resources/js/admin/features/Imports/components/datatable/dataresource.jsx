export const productColumns = [
    { field: 'id', headerName: 'Mã NV', width: 120 }, {
        field: "imports", headerName: "Nhà Sản Xuất", width: 400, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.mancc}
                </div>
            );
        },
    },
    {
        field: "tongtien", headerName: "Tổng Tiền", width: 250,
    },
    {
        field: "ngaynhap", headerName: "Ngày Nhập", width: 250,
    },


];


export const productRows = [
    {
        id: 1,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,

    },
    {
        id: 2,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 3,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 4,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 5,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 6,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 7,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 8,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 9,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
    {
        id: 10,
        manv: "1",
        mancc: "21",
        ngaynhap: "09/11/202",
        tongtien: 230018200,
    },
];