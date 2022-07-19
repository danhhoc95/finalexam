import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import $ from 'jquery';

class Admin extends Component {

    componentDidMount() {
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }

    render() {
        return (
            <div>
                <div className="d-flex" id="wrapper">
                    {/* Sidebar */}
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading"> Danh mục quản lý </div>
                        <div className="list-group list-group-flush">
                            <NavLink to="/admin/orders" className="list-group-item list-group-item-action"><i className="fas fa-file-invoice-dollar"></i> <span className="font-weight-bold">Đơn hàng</span></NavLink>
                            <NavLink to="/admin/products" className="list-group-item list-group-item-action"><i className="fas fa-boxes"></i> <span className="font-weight-bold">Danh sách sản phẩn</span></NavLink>
                            <NavLink to="/admin/add-product" className="list-group-item list-group-item-action"><i className="fas fa-tree"></i> <span className="font-weight-bold">Thêm sản phẩm</span></NavLink>
                            <NavLink to="/admin/users" className="list-group-item list-group-item-action"><i className="fas fa-user-circle"></i> <span className="font-weight-bold">Tài khoản</span></NavLink>
                        </div>
                    </div>
                    {/* /#sidebar-wrapper */}
                    {/* Page Content */}
                    <div id="page-content-wrapper">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                            <button className="btn btn-primary" id="menu-toggle"><i className="fas fa-bars"></i> Menu</button>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                        </nav>
                        <div className="container-fluid">
                            {/* MAIN CONTENT */}
                            {this.props.children}
                            {/* MAIN CONTENT */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;