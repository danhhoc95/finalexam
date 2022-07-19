import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import CallAPI from '../../RESTFull/BaseApi';
import '../../css/CustomerHome.css';
import ImageHolder from '../../components/Customer/Loading';
import CardProduct from '../../components/Customer/CardProduct';
import FilterBar from '../../components/Customer/FilterBar';

class Home extends Component {

    handlePageChange(pageNumber) {
        this.props.dispatch({ type: "UPDATE_ACTIVE_PAGE", data: pageNumber });
        this.props.dispatch({ type: "FETCH_CUSTOMER_LIST_PRODUCT", data: null });
        CallAPI('api/products', null, { page: pageNumber }).then(res => {
            this.props.dispatch({ type: "FETCH_CUSTOMER_LIST_PRODUCT", data: res.data.list });
            this.props.dispatch({ type: "UPDATE_ITEMS_COUNT_PER_PAGE", data: res.data.pageSize });
            this.props.dispatch({ type: "UPDATE_TOTAL_ITEMS_COUNT", data: res.data.totalItem });
        })
    }


    componentDidMount() {
        localStorage.removeItem("userRegister");
        CallAPI('api/products').then(res => {
            this.props.dispatch({ type: "FETCH_CUSTOMER_LIST_PRODUCT", data: res.data.list });
            this.props.dispatch({ type: "UPDATE_ITEMS_COUNT_PER_PAGE", data: res.data.pageSize });
            this.props.dispatch({ type: "UPDATE_TOTAL_ITEMS_COUNT", data: res.data.totalItem });
        })
    }

    render() {
        let videoIntro;
        if (this.props.rangeBarChange) {
            videoIntro = (
                <header>
                    <div className="overlay" />
                    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                        <source src="../Intro.mp4" type="video/mp4" />
                    </video>
                    <div className="container h-100">
                        <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <h1 id="brand-name-overlay" className="display-3 sloganOverlay">Moto store</h1>
                                <p className="lead mb-0 sloganOverlay">Hệ thống chuỗi bán xe máy</p>
                            </div>
                        </div>
                    </div>
                </header>)
        } else if (this.props.totalItemsCount > 0) {
            videoIntro = 
                <h4 className="ml-4 mt-4">
                    Tìm thấy <strong>{this.props.totalItemsCount}</strong> sản phẩm phù hợp
                </h4>
        }

        let listCardProducts;
        if (this.props.listProductCustomer != null) {
            if (this.props.listProductCustomer.length === 0) {
                listCardProducts = <ImageHolder url="/no_result.gif" />
            } else {
                listCardProducts = this.props.listProductCustomer.map(product => {
                    return (<div key={product.productId} className="col-lg-4 col-sm-6 mb-4">
                                <CardProduct
                                    productId={product.productId}
                                    thumbnail={product.thumbnail}
                                    fullImage={product.detailImage}
                                    name={product.name}
                                    price={product.price}
                                    height={product.height}
                                    description={product.description}
                                    origin={product.origin}/>
                            </div>)
                })
            }
        } else if (this.props.listProductCustomer == null) {
            listCardProducts = <ImageHolder url="/loading.gif" />
        } else {
            listCardProducts = <ImageHolder url="/no_result.gif" />
        };

        let showPagination;

        if (this.props.listProductCustomer != null && this.props.listProductCustomer.length > 0) {
            showPagination = (<div className="container mt-4">
                                <div className="row justify-content-center mb-4">
                                    <Pagination className="paginations"
                                        activePage={this.props.activePage}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        itemsCountPerPage={this.props.itemsCountPerPage}
                                        totalItemsCount={this.props.totalItemsCount}
                                        pageRangeDisplayed={parseInt(process.env.REACT_APP_PAGE_RANGE_DISPLAYED)}
                                        onChange={this.handlePageChange.bind(this)}/>
                                </div>
                            </div>);
        }

        return (<div>
                    <FilterBar/>
                    {videoIntro}
                    {/*  LIST */}
                    <div className="container mt-4">
                        <div className="row">
                            {listCardProducts}
                        </div>
                    </div>
                    {/* / LIST */}
                    {showPagination}
                </div>);
    }
}

const mapStateToProps = state => ({
    filterPrice: state.filterPrice,
    filterHeight: state.filterHeight,
    filterOrigin: state.filterOrigin,
    rangeBarChange: state.rangeBarChange,
    SortMode: state.SortMode,
    listProductCustomer: state.listProductCustomer,
    itemsCountPerPage: state.itemsCountPerPage,
    totalItemsCount: state.totalItemsCount,
    activePage: state.activePage,
})

export default connect(mapStateToProps)(Home);