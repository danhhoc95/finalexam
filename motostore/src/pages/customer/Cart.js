import React, { Component } from 'react';
import CartItem from '../../components/Customer/CartItem';
import CallAPI from '../../RESTFull/BaseApi';
import ImageHolder from '../../components/Customer/Loading';
import '../../css/Cart.css';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [],
      cartinfo: this.props.totalItemCart
    }
  }

  componentDidMount() {
    let userPhone = localStorage.getItem("PHONEUSERLOGINED");
    CallAPI(`api/cart/${userPhone}`).then(res => {
      this.setState({
        listItem: res.data
      })
    }).catch(() => {
      console.log("Lấy danh sách giở hàng không thành công");
    })
  }

  purchase() {
    let userPhone = localStorage.getItem("PHONEUSERLOGINED");
    CallAPI('Orders/accept-purchase', 'POST', { phone: userPhone })
      .then(res => {
        localStorage.setItem("LASTED_ORDERID", res.data);
        localStorage.setItem("LASTEDSUM", this.props.totalItemCart.sum);
        this.props.history.push('/purchase');
      })
      .catch(() => {
        alert("Lỗi thanh toán!");
      })
    window.location.replace(process.env.REACT_APP_DOMAIN + "purchase");
  }

  render() {
    var numeral = require('numeral');

    let showItems;
    if ((this.state.listItem != null)) {
      showItems = this.state.listItem.map(product => {
        return (
          <CartItem
            key={product.productID}
            productID={product.productID}
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            quantity={product.quantity}/>
          )
      })
    }
    return (
      <div>
        {(this.state.listItem.length > 0) 
        ?(<div>
            <div className="container-fluid my-5 mx-3">
              <div className="row">
                <div className=" col-lg-8 col-sm-12 col-md-12" >
                  <table className="table">
                    <tbody>
                      {showItems}
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-12 text-center">
                  <div className="mx-5 card sticky-top" >
                    <div className="card-body">
                      <h5 className="card-title">Thành tiền</h5>
                      <table className="table ">
                        <thead>
                          <tr>
                            <th scope="col">Tạm tính:</th>
                            <td ><h5 className="font-weight-bold text-danger">{numeral(this.props.totalItemCart.sum).format('0,0')} đ</h5></td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Phí vận chuyển:</th>
                            <td ><h5 className="font-weight-bold text-danger">miễn phí</h5></td>
                          </tr>
                          <tr>
                            <th scope="row">Tổng tiền:</th>
                            <td ><h5 className="font-weight-bold text-danger">{numeral(this.props.totalItemCart.sum).format('0,0')} đ</h5></td>
                          </tr>
                        </tbody>
                      </table>
                      <button onClick={() => { this.purchase() }} type="button" className="btn btn-primary"><i className="fas fa-money-check-alt"/> Thanh toán</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
          : (<div className="text-center my-5 py-5">
              <ImageHolder url="/emptycart.gif" />
              <h1 className="mb-5 pb-5">Giỏ hàng trống</h1>
            </div>)}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  totalItemCart: state.totalItemCart
});
export default connect(mapStateToProps)(Cart);