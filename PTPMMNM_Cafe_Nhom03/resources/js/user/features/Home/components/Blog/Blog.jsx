import React from 'react';
import "./Blog.scss";
import "../../../../../../css/bootstrap2.min.css";
import cf1 from "./img/cf1.png";
import cf2 from "./img/cf2.png";
import cf3 from "./img/cf3.jpg";
import cf4 from "./img/cf4.jpg";
const Blog = () => {
    return (
        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>Các Thông Tin Bổ Ích</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6" >
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src={cf1} alt="" />
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i>7:00 23/11/2022</li>
                                    <li><i className="fa fa-comment-o"></i></li>
                                </ul>
                                <h5><a href="#">Uống cà phê sạch để khỏe mạnh</a></h5>
                                <p>Về tác dụng của cà phê, thế giới đã khẳng định từ rất lâu. Cà phê tốt cho tim mạch do giàu chất chống oxy hóa (làm sạch máu, phòng cao huyết áp). Hoạt chất phenol trong cà phê ngăn ngừa xơ vữa động mạch, phòng bệnh tai biến mạch máu não. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src={cf2} alt="" />
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> 16:00 21/11/2022</li>
                                    <li><i className="fa fa-comment-o"></i></li>
                                </ul>
                                <h5><a href="#">Văn hóa thưởng thức cà phê sạch</a></h5>
                                <p>Theo các nhà khoa học, mỗi người khỏe mạnh, trung bình uống 1 – 3 ly cafe/ ngày vào buổi sáng, phòng trường hợp bị mất ngủ. Tùy vào thể trạng của mình, bạn sẽ điều chỉnh liều lượng cho phù hợp. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="blog__item">
                            <div className="blog__item__pic">
                                <img src={"https://theme.hstatic.net/200000492347/1000889029/14/image_item_home_instagram_feed_2.jpg?v=2229"} alt="" />
                            </div>
                            <div className="blog__item__text">
                                <ul>
                                    <li><i className="fa fa-calendar-o"></i> 9:00 17/11/2022</li>
                                    <li><i className="fa fa-comment-o"></i> </li>
                                </ul>
                                <h5><a href="#">7 lý do nên uống cà phê nguyên chất</a></h5>
                                <p>Có rất nhiều lý do nên uống cà phê mỗi ngày. Cà phê tăng cường hoạt động não bộ, tăng cường trí nhớ, giúp bạn giảm cân và còn nhiều lợi ích khác nữa mà bạn chưa biết.    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
