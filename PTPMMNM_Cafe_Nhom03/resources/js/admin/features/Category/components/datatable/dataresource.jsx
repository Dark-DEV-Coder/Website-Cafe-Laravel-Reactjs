export const productColumns = [
    { field: 'id', headerName: 'Mã SP', width: 120 }, {
        field: "category", headerName: "Tên sản phẩm", width: 250, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.name}
                </div>
            );
        },
    },

];


export const productRows = [
    {
        id: 1,
        name: "Snow",

    },
    {
        id: 2,
        name: "Jamie Lannister",

    },
    {
        id: 3,
        name: "Lannister",

    },
    {
        id: 4,
        name: "Stark",

    },
    {
        id: 5,
        name: "Targaryen",

    },
    {
        id: 6,
        name: "Melisandre",

    },
    {
        id: 7,
        name: "Clifford",

    },
    {
        id: 8,
        name: "Frances",

    },
    {
        id: 9,
        name: "Roxie",

    },
    {
        id: 10,
        name: "Roxie",

    },
];