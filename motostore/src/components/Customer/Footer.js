import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer" 
                        className="text-white d-flex-column text-center">
                    <hr className="mt-0" />
                    
                    <hr className="mb-0" />
                    <div className="container text-left text-md-center">
                        <div className="row">
                            <div className="col-md-3 mx-auto shfooter">
                                <h5 className="my-2 font-weight-bold d-none d-md-block">Manufactories</h5>
                                <div className="d-md-none title" data-target="#Product" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold">Product
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
                                <h5 className="my-2 font-weight-bold d-none d-md-block">Service</h5>
                                <div className="d-md-none title" data-target="#Service" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold">Service
                                        <div className="float-right navbar-toggler">
                                            <i className="fas fa-angle-down" />
                                            <i className="fas fa-angle-up" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-unstyled collapse" id="Service">
                                    <li><a className="link-footer" href="/">Payment Estimation</a></li>
                                    <li><a className="link-footer" href="/">Test Drive Register</a></li>
                                    <li><a className="link-footer" href="/">Vehicle Price Table</a></li>
                                    <li><a className="link-footer" href="/">Finance Payment</a></li>
                                </ul>
                            </div>
                            <hr className="clearfix w-100 d-md-none mb-0" />
                            <div className="col-md-3 mx-auto shfooter">
                                <h5 className="my-2 font-weight-bold d-none d-md-block">News</h5>
                                <div className="d-md-none title" data-target="#News" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold">News
                                        <div className="float-right navbar-toggler">
                                            <i className="fas fa-angle-down" />
                                            <i className="fas fa-angle-up" />
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-unstyled collapse" id="News">
                                    <li><a className="link-footer" href="/">Marketing</a></li>
                                    <li><a className="link-footer" href="/">Event</a></li>
                                    <li><a className="link-footer" href="/">Technology</a></li>
                                </ul>
                            </div>
                            <hr className="clearfix w-100 d-md-none mb-0" />
                            <div className="col-md-3 mx-auto shfooter">
                                <h5 className="my-2 font-weight-bold d-none d-md-block"><strong>Other sites</strong></h5>
                                <div className="d-md-none title" data-target="#Othersites" data-toggle="collapse">
                                    <div className="mt-3 font-weight-bold"> <strong>Other sites</strong>
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
                       <img src="ic_motor.png" height={50} alt="cdw"/> <p>Copyright 2022</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;