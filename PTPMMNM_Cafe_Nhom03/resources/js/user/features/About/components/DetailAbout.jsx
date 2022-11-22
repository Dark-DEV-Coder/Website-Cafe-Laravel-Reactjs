import React from 'react';
import "./DetailAbout.scss";
import "../../../../../css/bootstrap2.min.css";
import anh from "./a.jpg";
import anh1 from "./b.jpg";
const DetailAbout = () => {
    return (

        <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${anh})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginTop: '30px' }}>
                        <a className="icon popup-vimeo d-flex justify-content-center align-items-center">
                            <span className="icon-play"></span>
                        </a>
                    </div>
                    <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
                        <div className="heading-section-bold mb-4 mt-md-5">
                            <div className="ml-md-0">
                                <h2 className="mb-4">Cà phê nguyên chất là gì ?</h2>
                            </div>
                        </div>
                        <div className="pb-md-5">
                            <p>Là cà phê được chế biến từ nguyên liệu 100% hạt cà phê . Cà phê nguyên chất, sạch không pha trộn tạp chất như: đậu rang, bắp rang, cơm cháy rang hay các phụ phẩm khác…</p>

                            <p>Hạt café rang sạch có thể được tẩm rượu, bơ và được ủ trong môi trường nhiệt độ nhất định để tạo ra phong vị đậm đà riêng biệt.</p>

                            <p>Công nghệ chế biến cà phê nguyên chất, sạch đã tạo nên sự thành công của hương vị cà phê nguyên chất làm say đắm các tín đồ cà phê khắp nơi.</p>
                            <p>Tiêu chuẩn cà phê sạch được tổ chức lương thực thế giới FAO đưa ra là sản xuất sạch, không làm biến đổi hệ sinh thái, không có hóa chất, độc tố và an toàn cho người trồng trọt cũng như người dùng cà phê.
                            </p>
                            <p>Với quy trình công nghệ chế biến sạch, sản phẩm cafe sạch, nguyên chất không có yếu tố gây hại cho sức khỏe và không sử dụng các loại hóa chất để tạo ra: độ đậm đặc, độ sánh dẽo, độ béo, màu đen, nhiều bọt và mùi thơm cà phê đặc trưng.
                            </p>

                        </div>
                    </div>

                </div>
                <div className='row' style={{ marginBottom: '50px' }}>
                    <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${anh1})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginLeft: '70%', height: '500px' }}>
                        <a className="icon popup-vimeo d-flex justify-content-center align-items-center">
                            <span className="icon-play"></span>
                        </a>
                    </div>
                    <div className="col-md-8  wrap-about pb-md-5 ftco-animate" style={{ marginTop: '-500px' }}>
                        <div className="heading-section-bold mb-4 mt-md-5">
                            <div className="ml-md-0">
                                <h3 className="mb-4">Quy trình xử lý cà phê nguyên chất là gì ?</h3>
                            </div>
                        </div>
                        <div className="pb-md-1">
                            <p>Việc hình thành một quy trình sản xuất cà phê rang xay siêu sạch với chất lượng vệ sinh an toàn thực phẩm đặt lên hàng đầu phải được thực hiện theo quy trình khắt khe nhất</p>

                            <p>Khu vực xử lý cà phê gồm các công đoạn từ rửa, tách, ủ men, làm sạch nhớt, phơi, sấy, tách vỏ, tách màu. Để đạt được cà phê chất lượng sạch như mong muốn, hệ thống dây chuyền sản xuất được đầu tư đồng bộ từ chế biến ướt, sân phơi có lưới để tránh côn trùng, máy sấy, máy tách màu, kho chưa lót tấm cách nhiệt…</p>

                            <p>Quy trình này được áp dụng khoa học công nghệ quốc tế, chất lượng ISO cao nhất để làm thành những sản phẩm càphê “sạch” mang hương vị thiên nhiên tinh khiết.</p>

                            <p><a href="#" className="muangay btn btn-primary">Mua ngay</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailAbout
