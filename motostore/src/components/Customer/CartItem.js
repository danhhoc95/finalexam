import React, { Component } from 'react';
import '../../css/ItemCart.css';
import CallAPI from '../../RESTFull/BaseApi';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity,
            productID: this.props.productID
        };
    }

    handleClick(productID, minus) {
        let userPhone = localStorage.getItem("PHONEUSERLOGINED");
        if (minus) {
            if (this.state.quantity > 1) {
                this.setState({ quantity: this.state.quantity - 1 })

                CallAPI(`api/cart/sub/${userPhone}`, 'POST', { }, productID)
                .then()
                .catch(() => {
                    alert("Lỗi khi thêm sản phẩm vảo giỏ hàng");
                })
            }
        } else {
            this.setState({ quantity: this.state.quantity + 1 })

            CallAPI(`api/cart/plus/${userPhone}`, 'POST', { }, productID )
            .then()
            .catch(() => {
                alert("Lỗi khi thêm sản phẩm vảo giỏ hàng");
            })
        }

        CallAPI(`api/cart/count/${userPhone}`).then(
            res => {
                this.props.dispatch({ type: "UPDATE_TOTAL_ITEM_CART", data: res.data });
                localStorage.setItem("TOTAL_ITEM_CART",res.data.count);
                localStorage.setItem("SUM_CART",res.data.sum);
            }).catch(() => {
                alert("Tổng sản phẩm giỏ hàng không đúng");
            })
    }

    deleteItem(productID) {
        let userPhone = localStorage.getItem("PHONEUSERLOGINED");

        CallAPI(`api/cart/remove/${userPhone}`, 'DELETE', { productID: productID }).catch(() => {
            alert("Lỗi xóa sản phẩm");
        });

        CallAPI(`api/cart/count/${userPhone}`).then(
            res => {
                this.props.dispatch({ type: "UPDATE_TOTAL_ITEM_CART", data: res.data.count });
                localStorage.setItem("TOTAL_ITEM_CART",res.data.count);
                localStorage.setItem("SUM_CART",res.data.sum);
            }).catch(() => {
                alert("Tổng sản phẩm giỏ hàng không đúng");
            });
            window.location.reload();
    }

    render() {
        var numeral = require('numeral');
        return (
            <div>
            <div class="Cart-Container">
                <div class="Cart-Items">
                    <div class="image-box">
                        <img src={this.props.thumbnail} className="imgProduct" alt="imageProduct" />
                    </div>
                    <div class="about">
                        <h2 class="title">{this.props.name}</h2>
                        <br/>
                        <h4 class="subtitle">{numeral(this.props.price).format('0,0')}đ</h4>
                    </div>
                    <div class="counter">
                        <button onClick={() => this.handleClick(this.props.productID, true)} 
                                name="minus" 
                                id="MinusItemCart" 
                                type="button" 
                                className="btnCart">-</button>
                            <input 
                                size={1}
                                min={1}
                                max={9999}
                                value={this.state.quantity} disabled
                                className="count text-center" />
                            <button onClick={() => this.handleClick(this.props.productID, false)} 
                                name="plus" 
                                id="PlusItemCart" 
                                type="button" 
                                className="btnCart">+</button>
                    </div>
                    <div class="prices"> 
                        <div class="product-line-price">
                            {numeral(this.props.price * this.state.quantity).format('0,0')} đ
                        </div>

                        <div class="remove">
                            <button onClick={() => this.deleteItem(this.props.productID)} type="button" className="btnRemove"><i className="fas fa-trash-alt"/> Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            </div>
        );
    }
}

const mapStateToProps = state => ({ });

export default connect(mapStateToProps)(CartItem);