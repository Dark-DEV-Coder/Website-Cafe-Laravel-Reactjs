export const productColumns = [
    { field: 'id', headerName: 'Mã NCC', width: 140 }, {
        field: "provider", headerName: "Tên nhà cung cấp", width: 600, renderCell: (params) => {
            return (
                <div className="cellWithImg">

                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "sdt", headerName: "Số điện thoại", width: 250,
    },
];


export const productRows = [
    {
        id: 1,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 2,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 3,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 4,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 5,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 6,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 7,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 8,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 9,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
    {
        id: 10,
        name: "Snow",
        diachi: "abc",
        sdt: "0328332195",
        status: "Hết hàng",
    },
];