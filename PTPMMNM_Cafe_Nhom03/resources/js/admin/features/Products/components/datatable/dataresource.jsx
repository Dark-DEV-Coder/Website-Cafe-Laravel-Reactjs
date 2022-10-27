export const productColumns = [
    { field: 'id', headerName: 'Mã SP', width: 120 }, {
        field: "product", headerName: "Tên sản phẩm", width: 250, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "amount", headerName: "Số lượng", width: 160,
    },
    {
        field: "total", headerName: "Giá tiền", width: 150,
    },
    {
        field: "status", headerName: "Trạng thái", width: 160, renderCell: (params) => {
            return (
                <div className="tableList">
                    <span className={params.row.status === 'Còn hàng' ? `status ${"Still"}` : `status ${"Sold"}`}>{params.row.status}</span>
                </div>
            );
        },
    },
];


export const productRows = [
    {
        id: 1,
        name: "Snow",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjdáddddddddddddddddddđq3eqư mnasjdhjashd kashdkasjdkasjdkj asdiujasdijaskd sakdhksadjkasnd ksaduiqwueiqwue askdjaskdjaskdj ksandkasjdk",
        status: "Hết hàng",
        total: 20000,
        amount: 35,
    },
    {
        id: 2,
        name: "Jamie Lannister",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Hết hàng",
        amount: 42,
    },
    {
        id: 3,
        name: "Lannister",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 45,
    },
    {
        id: 4,
        name: "Stark",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 16,
    },
    {
        id: 5,
        name: "Targaryen",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 22,
    },
    {
        id: 6,
        name: "Melisandre",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 15,
    },
    {
        id: 7,
        name: "Clifford",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 44,
    },
    {
        id: 8,
        name: "Frances",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 36,
    },
    {
        id: 9,
        name: "Roxie",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 65,
    },
    {
        id: 10,
        name: "Roxie",
        img: "https://90scoffee.vn/wp-content/uploads/2021/01/mua-ca-phe-nguyen-chat-quan-thu-duc-co-hang-trong-ngay-9.jpg",
        infor: "abcisjd",
        total: 20000,
        status: "Còn hàng",
        amount: 65,
    },
];