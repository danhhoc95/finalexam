import React, { Component } from 'react';
import CallAPI from '../../RESTFull/BaseApi';
import ImgHolder from '../../components/Customer/Loading';
import { Redirect } from "react-router-dom";
import CardProduct from '../../components/Customer/CardProduct';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../css/Productdetail.css';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            productSuggest: null
        };
    }

    getProductID() {
        var str = this.props.location.pathname;
        var res = str.split("/");
        var result = res[res.length - 1];
        var id = parseInt(result);
        return id;
    }

    componentDidMount() {
        CallAPI(`api/product/${this.getProductID()}`).then(res => {
            this.setState({ product: res.data })
        }).catch(err => {
            console.log(err);
        })

        CallAPI(`api/products/random`).then(res => {
            this.setState({ productSuggest: res.data })
        })
    }

    render() {
        var numeral = require('numeral');
        let id = this.getProductID();

        let userPhone = localStorage.getItem("PHONEUSERLOGINED");

        let body = {
            phone: userPhone,
            productId: id,
            quantity:1
        }

        var addCart = productID => {
            if (userPhone == null) {
                localStorage.setItem("FOCUS_LOGIN_TO_BUY", true);
                window.location.replace("/login");
            } else {
                CallAPI(`api/cart/add`, 'POST', { }, body).then(() => {
                    CallAPI(`api/cart/count/${userPhone}`, 'GET').then(
                        res => {
                            this.props.dispatch({ type: "UPDATE_TOTAL_ITEM_CART", data: res.data });
                            localStorage.setItem("TOTAL_ITEM_CART", res.data.count);
                            localStorage.setItem("SUM_CART", res.data.sum);
                        }
                    ).catch(() => {
                        alert("Lỗi lấy số lượng giỏ hàng");
                    })
                }
                ).catch(
                    () => {
                        localStorage.setItem("FOCUS_LOGIN_TO_BUY", true);
                        window.location.replace("/login");
                    }
                )
            }
        }

        let product;
        if (this.state.product != null) {
            product = <h1>{this.state.product.name}</h1>
        } else {
            product = <ImgHolder url="/no_result.gif" />
        }

        let pro = this.state.product;

        let titleSuggest;
        if (this.state.productSuggest != null) {
            titleSuggest = <h3 className="mb-3"><strong>Các sản phẩm thường được mua kèm theo:</strong></h3>
        }

        let CONTENT;

        if (this.state.product != null) {
            CONTENT = (
                <div className="mt-4 container overflow-hidden">
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <img className="img-fluid" src={pro.detailImage} alt="imageProduct" />
                        </div>
                        <div className="col-md-6">
                            <div>
                                <h2>Chi tiết sản phẩm</h2>
                                <h1 className="mb-1 font-weight-bold"><strong>{pro.name}</strong></h1>
                                <h1 className="text-danger font-weight-bold">Giá: {numeral(pro.price).format('0,0')} đ</h1>
                            </div>

                            <h5>Thông số chi tiết:</h5>
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th><i className="fas fa-arrows-alt-v"></i></th>
                                        <th>Chiều cao</th>
                                        <th><strong className="font-weight-bold">{pro.height}</strong> cm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><i className="fas fa-globe-americas"></i></th>
                                        <td>Xuất xứ</td>
                                        <td><strong className="font-weight-bold">{pro.origin}</strong></td>
                                    </tr>
                                </tbody>
                            </table>

                            <ul>
                                <li>Giao hàng tận nơi, thanh toán online hoặc COD.</li>
                            </ul>

                            <div className="text-center">
                                <button
                                    onClick={() => { addCart(id) }}
                                    type="button"
                                    className="ml-5 btn btnAdd btn-lg">
                                        <i className="fas fa-cart-plus"/>
                                        <strong>Thêm vào giỏ hàng</strong>
                                </button>
                            </div>
                        </div>
                    </div>

                    <h3 className="my-4">Mô tả chi tiết:</h3>
                    <div id="product-content-detail">
                        <ul class="tecical-params-ul">
                            <li>
                                <div class="dt">Khối lượng bản thân</div>
                                <div class="dd">104 kg <br/> 105 kg (Thông số kỹ thuật của phiên bản vành đúc)</div>
                            </li>
                            <li>
                                <div class="dt">Dài x Rộng x Cao</div>
                                <div class="dd">1.931 mm x 711 mm x 1.083 mm</div>
                            </li>
                            <li>
                                <div class="dt">Khoảng cách trục bánh xe</div>
                                <div class="dd">1.258 mm</div>
                            </li>
                            <li>
                                <div class="dt">Độ cao yên</div>
                                <div class="dd">756 mm</div>
                            </li>
                            <li>
                                <div class="dt">Khoảng sáng gầm xe</div>
                                <div class="dd">133 mm</div>
                            </li>
                            <li>
                                <div class="dt">Dung tích bình xăng</div>
                                <div class="dd">4,6 lít</div>
                            </li>
                            <li>
                                <div class="dt">Kích cỡ lớp trước/ sau</div>
                                <div class="dd">Trước: 70/90 - 17 M/C 38P<br/> Sau: 80/90 - 17 M/C 50P</div>
                            </li>
                            <li>
                                <div class="dt">Loại động cơ</div>
                                <div class="dd">Xăng, làm mát bằng không khí, 4 kỳ, 1 xy-lanh</div>
                            </li>
                            <li>
                                <div class="dt">Công suất tối đa</div>
                                <div class="dd">6,83 kW/7.500 vòng/phút</div>
                            </li>
                            <li>
                                <div class="dt">Dung tích nhớt máy</div>
                                <div class="dd">0.9 lít khi rã máy <br/> 0,7 lít khi thay nhớt</div>
                            </li>
                            <li>
                                <div class="dt">Mức tiêu thụ nhiên liệu</div>
                                <div class="dd">1,60 lít/100km</div>
                            </li>
                            <li>
                                <div class="dt">Loại truyền động</div>
                                <div class="dd">4 số tròn</div>
                            </li>
                            <li>
                                <div class="dt">Loại truyền động</div>
                                <div class="dd"> 4 số tròn</div>
                            </li>
                            <li>
                                <div class="dt">Hệ thống khởi động</div>
                                <div class="dd">10,2 Nm/5.500 vòng/phút</div>
                            </li>
                            <li>
                                <div class="dt">Dung tích xy-lanh</div>
                                <div class="dd">124,9 cm3</div>
                            </li>
                            <li>
                                <div class="dt">Đường kính x Hành trình pít tông</div>
                                <div class="dd">52,4 x 57,9 mm</div>
                            </li>
                            <li>
                                <div class="dt">Tỷ số nén</div>
                                <div class="dd">9,3:1</div>
                            </li>
                        </ul>
                        {ReactHtmlParser(pro.description)}
                    </div>

                    {titleSuggest}
                </div>
            )
        } else {
            CONTENT = <ImgHolder url="/loading.gif"/>
        }

        let productSuggestion;

        if (this.state.productSuggest != null) {
            productSuggestion = this.state.productSuggest.map(product => {
                return (<div key={product.productID} className="col-lg-4 col-sm-6 mb-4">
                            <CardProduct
                                productID={product.productID}
                                thumbnail={product.thumbnail}
                                fullImage={product.detailImage}
                                name={product.name}
                                price={product.price}
                                height={product.height}
                                description={product.description}
                                origin={product.origin} />
                        </div>)
            })
        }

        return (<div className='body'>
                    {CONTENT}
                    <div className="container mt-4">
                        <div className="row">
                            {productSuggestion}
                        </div>
                    </div>
                </div>);
    }
}

const mapStateToProps = state => ({ });

export default connect(mapStateToProps)(ProductDetail);