export const productColumns = [
    { field: 'id', headerName: 'Mã NV', width: 120 }, {
        field: "staffs", headerName: "Tên Nhân Viên", width: 250, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.ho + " "}{params.row.ten}
                </div>
            );
        },
    },
    {
        field: "ngaysinh", headerName: "Ngày sinh", width: 160,
    },
    {
        field: "gioitinh", headerName: "Giới tính", width: 150,
    },
    {
        field: "sdt", headerName: "Số điện thoại", width: 170,
    },
    {
        field: "email", headerName: "Email", width: 280,
    },

];


export const productRows = [
    {
        id: 1,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 2,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 3,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 4,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 5,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 6,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 7,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 8,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 9,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
    {
        id: 10,
        ho: "Cẩm",
        ten: "Duyên",
        gioitinh: "Nữ",
        ngaysinh: "20/07/2001",
        sdt: "0328332105",
        email: "camduyen20011@gmail.com",
        diachi: "abcsadf",
    },
];