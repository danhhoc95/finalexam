import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer" className="text-white d-flex-column text-center">
                    <hr className="mb-0" />
                    <div className="container text-left text-md-center">
                        <div className="row">
                            <div className="col-md-3 mx-auto shfooter">
                                <h5 className="my-2 font-weight-bold d-none d-md-block">Hãng</h5>
                                <div className="d-md-none title" data-target="#Product" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold">Hãng
                                        <div className="float-right navbar-toggler">
                                            <i className="fas fa-angle-down" />
                                            <i className="fas fa-angle-up" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-unstyled collapse" id="Product">
                                    <li><a className="link-footer" href="/">Honda</a></li>
                                    <li><a className="link-footer" href="/">Suzuki</a></li>
                                    <li><a className="link-footer" href="/">Yamaha</a></li>
                                </ul>
                            </div>
                            <hr className="clearfix w-100 d-md-none mb-0" />
                            <div className="col-md-3 mx-auto shfooter">
                                <h5 className="my-2 font-weight-bold d-none d-md-block">Dịch vụ</h5>
                                <div className="d-md-none title" data-target="#Service" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold">Dịch vụ
                                        <div className="float-right navbar-toggler">
                                            <i className="fas fa-angle-down" />
                                            <i className="fas fa-angle-up" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-unstyled collapse" id="Service">
                                    <li><a className="link-footer" href="/">Phương thức thanh toán</a></li>
                                    <li><a className="link-footer" href="/">Đăng ký chạy thử</a></li>
                                    <li><a className="link-footer" href="/">Bảng giá</a></li>
                                </ul>
                            </div>
                            <hr className="clearfix w-100 d-md-none mb-0" />
                            <div className="col-md-3 mx-auto shfooter">
                                <h5 className="my-2 font-weight-bold d-none d-md-block">Tin tức</h5>
                                <div className="d-md-none title" data-target="#News" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold">Tin tức
                                        <div className="float-right navbar-toggler">
                                            <i className="fas fa-angle-down" />
                                            <i className="fas fa-angle-up" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-unstyled collapse" id="News">
                                    <li><a className="link-footer" href="/">Quảng cáo</a></li>
                                    <li><a className="link-footer" href="/">Sự kiện</a></li>
                                    <li><a className="link-footer" href="/">Công nghệ</a></li>
                                </ul>
                            </div>
                            <hr className="clearfix w-100 d-md-none mb-0" />
                            <div className="col-md-3 mx-auto shfooter">
                                <h5 className="my-2 font-weight-bold d-none d-md-block"><strong>Khác</strong></h5>
                                <div className="d-md-none title" data-target="#Othersites" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold"> <strong>Khác</strong>
                                        <div className="float-right navbar-toggler">
                                            <i className="fas fa-angle-down" />
                                            <i className="fas fa-angle-up" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-unstyled collapse" id="Othersites">
                                    <li><a className="link-footer" href="/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-0" />
                    <div className="py-3">
                       <img src="ic_motor.gif" height={50} alt="cdw"/> <p style={{color:'black'}}>Copyright 2022</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;