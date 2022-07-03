import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../css/NavigationBar.css';
import SuggestSearch from '../../components/Customer/SuggestSearch';
import CallAPI from '../../RESTFull/BaseApi';

class NavigationBar extends Component {
    disableRedirectToHome() {
        this.props.dispatch({ type: "DISABLE_REDIRECT_TO_HOME" });
        this.props.dispatch({ type: "UPDATE_ACTIVE_PAGE", data: 1 });
    }

    redirectToHome() {
        this.props.dispatch({ type: "UPDATE_ACTIVE_PAGE", data: 1 });
        this.props.dispatch({ type: "SHOW_VIDEO_INTRO" });
        CallAPI('products').then(res => {
            this.props.dispatch({ type: "FETCH_CUSTOMER_LIST_PRODUCT", data: res.data.list });
            this.props.dispatch({ type: "UPDATE_ITEMS_COUNT_PER_PAGE", data: res.data.pageSize });
            this.props.dispatch({ type: "UPDATE_TOTAL_ITEMS_COUNT", data: res.data.totalItem });
        })
    }

    render() {
        let showProfileButton;
        let showLoginBtn;
        let showRegister;

        if (this.props.customerNameWellcome != null) {
            showProfileButton = (
                <li className="nav-item">
                    <NavLink onClick={() => this.disableRedirectToHome()}
                             activeClassName="NavItemActive" 
                             className="nav-link NavItem" 
                             to="/profile">
                        <i className="fas fa-user-alt"/> <span>Tài khoản - <span style={{ fontWeight: 900 }}> {this.props.customerNameWellcome} </span></span>
                    </NavLink>
                </li>);
        }

        if (this.props.customerNameWellcome == null) {
            showLoginBtn = (
                <li className="nav-item">
                    <NavLink onClick={() => this.disableRedirectToHome()} 
                             activeClassName="NavItemActive" 
                             className="nav-link NavItem" 
                             to="/login">
                        <i className="fas fa-key"/> Đăng nhập
                    </NavLink>
                </li>
            );
        }
        if (this.props.customerNameWellcome == null) {
            showRegister = (
                <li className="nav-item">
                    <NavLink onClick={() => this.disableRedirectToHome()}
                             activeClassName="NavItemActive" 
                             className="nav-link NavItem" 
                             to="/register">
                        <i className="fas fa-user-plus"/> Đăng ký
                    </NavLink>
                </li>
            );
        }

        return (
            <div>
                <nav id="CustomerNavigationBar" className="navbar fixed-top navbar-expand-lg navbar-light">
                    <NavLink onClick={() => this.redirectToHome()} 
                             className="navbar-brand" 
                             to="/">
                        <img src="../ic_motor.gif" alt="cdw" width={50} height={50} /> Moto Store
                    </NavLink>
                    <button className="navbar-toggler" 
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContentTopMenu"
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContentTopMenu">
                        <SuggestSearch />
                        <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                                <NavLink onClick={() => this.redirectToHome()} 
                                         activeClassName="NavItemActive" 
                                         className="nav-link NavItem" 
                                         to="/home">
                                    <i className="fas fa-home"/> Trang chủ
                                </NavLink>
                            </li>
                            {showProfileButton}
                            {showLoginBtn}
                            {showRegister}
                            <li className="nav-item">
                                <NavLink onClick={() => this.disableRedirectToHome()}
                                         activeClassName="NavItemActive" 
                                         className="nav-link NavItem" 
                                         to="/contact">
                                    <i class="fas fa-square-phone"></i> Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="navigationBarSpacingBottom"></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    listProductCustomer: state.listProductCustomer,
    rangeBarChange: state.rangeBarChange,
    redirectToHome: state.redirectToHome,
    CustomerKeyWord: state.CustomerKeyWord,
    customerNameWellcome: state.customerNameWellcome,
    totalItemCart: state.totalItemCart
})
export default connect(mapStateToProps)(NavigationBar);