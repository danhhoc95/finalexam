import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CallAPI from '../../RESTFull/BaseApi';
import { connect } from 'react-redux';
import { decode } from 'he';

class CardProduct extends Component {
    render() {
        var numeral = require('numeral');
        var striptags = require('striptags');

        var addCart = productID => {
            let userPhone = localStorage.getItem("PHONEUSERLOGINED");

            let body = {
                phone: userPhone,
                productId: productID,
                quantity:1
            }

            if (userPhone === null) {
                localStorage.setItem("FOCUS_LOGIN_TO_BUY", true);
                window.location.replace("login");
            } else {
                CallAPI(`api/cart/add`, 'POST', {}, body).then(() => {
                    console.log(`thêm ${productID} thành công`);
                    CallAPI(`api/cart/count/${userPhone}`, 'GET').then(
                        res => {
                            this.props.dispatch({ type: "UPDATE_TOTAL_ITEM_CART", data: res.data });
                            localStorage.setItem("TOTAL_ITEM_CART", res.data.count);
                            localStorage.setItem("SUM_CART", res.data.sum);
                            localStorage.removeItem("LASTEDSUM");
                            localStorage.removeItem("LASTED_ORDERID");
                        }
                    ).catch(() => {
                        alert("Lấy số lượng giỏ hàng không thành công");
                    })
                }
                ).catch(
                    () => { alert("Thêm vào giỏ hàng thất bại"); }
                )
            }
        }

        return (
            <div className="card h-100">
                <a className="card-images-change wraper-fixed-img container-img-overlay" href={`/product-detail/` + this.props.productId}>
                    <img className="card-img-top img-item-fixed" src={this.props.thumbnail} alt="Front" />
                    <img className="card-img-top img-top-change img-item-fixed" src={this.props.fullImage} alt="Back" />
                    <span className="bottom-left-img-overlay badge badge-dark d-inline">Cao: {this.props.height} cm</span>
                    <span className="bottom-right-img-overlay badge badge-success d-inline">Hãng: {this.props.origin}</span>
                </a>
                <div className="card-body">
                    <div className="text-center">
                        <h3 className="card-title font-weight-bold text-truncate">
                            <a className="text-decoration-none" href={'/product-detail/' + this.props.productId}>{this.props.name}</a>
                        </h3>
                        <h3 className=" font-weight-bold text-danger" >{numeral(this.props.price).format('0,0')} đ</h3>
                    </div>
                    <hr/>
                    <TextTruncate
                        line={3}
                        element="p"
                        truncateText=" …"
                        containerClassName=" d-inline card-text text-card-description"
                        text={decode(striptags(this.props.description))}/>

                    <div className="d-flex mt-2 justify-content-between">
                        <a href={`/product-detail/` + this.props.productId}>
                            <button type="button" className="btn btn-cart-detail">
                                <i className="fas fa-eye"/> Xem chi tiết
                            </button>
                        </a>
                        <button onClick={() => { addCart(this.props.productId) }} type="button" className="btn btn-cart-product">
                            <i className="fas fa-cart-plus"/> Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({ });
export default connect(mapStateToProps)(CardProduct);