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
            <tr>
                <td className="row">
                    <img src={this.props.thumbnail} width={60} height={60} alt="image" />
                    <strong className="ml-5 fw-bold">{this.props.name}</strong>
                </td>
                <td>
                    <span className="ml-5">Đơn giá: <br/>
                        <strong className=" text-danger">{numeral(this.props.price).format('0,0')}đ</strong>
                    </span>
                </td>
                <td>
                    <div className="row">
                        <button onClick={() => this.handleClick(this.props.productID, true)} name="minus" id="MinusItemCart" type="button" className="btn btn-light"><i className="fas fa-minus"/></button>
                        <input size={1}
                            min={1}
                            max={9999}
                            value={this.state.quantity} disabled
                            className="quantity fw-bold" />
                        <button onClick={() => this.handleClick(this.props.productID, false)} name="plus" id="PlusItemCart" type="button" className="btn btn-light"><i className="fas fa-plus"/></button>
                    </div>
                </td>
                <td className=" text-danger">
                    Thành tiền: {numeral(this.props.price * this.state.quantity).format('0,0')} đ
                </td>
                <td>
                    <button onClick={() => this.deleteItem(this.props.productID)} type="button" className=" ml-5 btn btn-danger"><i className="fas fa-trash-alt"/> Xóa</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => ({ });

export default connect(mapStateToProps)(CartItem);