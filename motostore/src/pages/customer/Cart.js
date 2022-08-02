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
    CallAPI(`api/cart/${userPhone}`)
    .then(res => {
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
    window.location.replace("/purchase");
  }

  render() {
    var numeral = require('numeral');

    let showItems;
    if ((this.state.listItem != null)) {
      showItems = this.state.listItem.map(product => {
        return (
          <CartItem
            key={product.productId}
            productID={product.productId}
            thumbnail={product.thumbnail}
            name={product.name}
            price={product.price}
            quantity={product.quantity}/>
          )
      })
    }
    return (
      <div className='body'>
        {(this.state.listItem.length > 0) 
        ?(<div>
            <div className="container-fluid my-5 mx-3">
              <div className="row">
                <div className=" col-lg-8" >
                  {showItems}
                </div>
                <div className="col-lg-4">
                  <div className="sticky-top" >
                    <div className="card-body">
                      <h2 className="card-title">Thành tiền</h2>
                      <div class="col-lg-12 mt-2">
                        <div class="row d-flex justify-content-between px-12">
                            <h4 class="mb-4 text-left">Tạm tính:</h4>
                            <h4 class="mb-4 text-right">{numeral(this.props.totalItemCart.sum).format('0,0')} đ</h4>
                        </div>
                        <div class="row d-flex justify-content-between px-12">
                            <h4 class="mb-4 text-left">Phí vận chuyển:</h4>
                            <h4 class="mb-4 text-right">Miễn phí</h4>
                        </div>
                        <div class="row d-flex justify-content-between px-12" id="tax">
                            <h4 class="mb-4 text-left">Tổng (VAT):</h4>
                            <h4 class="mb-4 text-right text-danger">{numeral(this.props.totalItemCart.sum).format('0,0')} đ</h4>
                        </div>
                      </div>
                      
                      <div className="text-center">
                      <button onClick={() => { this.purchase() }} 
                              type="button"
                              className="btn btnCheckout">
                        <i className="fas fa-money-check-alt"/> <strong>Thanh toán</strong>
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
          : (<div className="text-center">
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