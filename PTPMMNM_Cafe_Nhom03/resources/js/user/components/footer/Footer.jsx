import React from 'react'
import "./Footer.scss";
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import PhoneMissedOutlinedIcon from '@mui/icons-material/PhoneMissedOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row">
                    <div className="mouse">
                        <a href="#" className="mouse-icon">
                            <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
                        </a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Vegefoods</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">

                            <h2 className="ftco-heading-2"><MenuOpenOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Menu</h2>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-2 d-block"><ShoppingCartOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Shop</a></li>
                                <li><a href="#" className="py-2 d-block"><InfoOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />About</a></li>
                                <li><a href="#" className="py-2 d-block"><ContactsOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2"><QuizOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Help</h2>
                            <div className="d-flex">
                                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                                    <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                                    <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
                                    <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">FAQs</a></li>
                                    <li><a href="#" className="py-2 d-block">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2"><QuestionAnswerOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><WhereToVoteOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />203 Fake St. Mountain View, San Francisco, California, USA</li>
                                    <li><PhoneMissedOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />+83 392 3929 2</li>
                                    <li><AttachEmailOutlinedIcon style={{ marginRight: "5px", marginBottom: "2px" }} />info@yourdomain.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
