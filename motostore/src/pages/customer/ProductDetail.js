import React, { Component } from 'react';
import CallAPI from '../../RESTFull/BaseApi';
import ImgHolder from '../../components/Customer/Loading';
import { Redirect } from "react-router-dom";
import CardProduct from '../../components/Customer/CardProduct';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FacebookProvider, Comments, Like, CustomChat } from 'react-facebook';
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

        CallAPI('api/products/random').then(res => {
            this.setState({ productSuggest: res.data })
        })
    }

    render() {
        var numeral = require('numeral');
        let id = this.getProductID();

        let userPhone = localStorage.getItem("PHONEUSERLOGINED");

        var addCart = productID => {
            if (userPhone == null) {
                localStorage.setItem("FOCUS_LOGIN_TO_BUY", true);
                window.location.replace(process.env.REACT_APP_DOMAIN + "login");
            } else {
                CallAPI(`Cart/${userPhone}`, 'PUT', { productID: productID }).then(() => {
                    CallAPI(`Cart/count/${userPhone}`, 'GET', { productID: productID }).then(
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
                        window.location.replace(process.env.REACT_APP_DOMAIN + "login");
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

        let url = process.env.REACT_APP_DOMAIN + "/product-detail/" + this.getProductID();
        let CONTENT;
        if (this.state.product != null) {
            CONTENT = (
                <div className="mt-4 container overflow-hidden">
                    <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APPID}>
                        <Like href={url} colorScheme="dark" showFaces share />
                    </FacebookProvider>
                    <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APPID} chatSupport>
                        <CustomChat pageId="101397341588589" minimized={false} />
                    </FacebookProvider>
                    {/* Portfolio Item Row */}
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <img className="img-fluid" src={pro.detailImage} alt="fdf" />
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <h1 className="mb-1 font-weight-bold"><strong>{pro.name}</strong></h1>
                                <h1 className="text-danger font-weight-bold">{numeral(pro.price).format('0,0')} đ</h1>
                            </div>
                            <h5>Thông số chi tiết:</h5>
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th ><i className="fas fa-arrows-alt-v"></i></th>
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

                            <button
                                onClick={() => { addCart(id) }}
                                type="button" className="ml-5 btn btn-primary btn-lg"><i className="fas fa-cart-plus"></i> <strong>Thêm vào giỏ hàng</strong> </button>
                            {/* <Link to="/cart"><button type="button" className=" ml-4 btn btn-success btn-lg"><i className="fa fa-shopping-cart"></i> <strong> Vào giỏ hàng</strong></button></Link> */}
                        </div>
                    </div>
                    {/* /.row */}

                    <h3 className="my-4">Mô tả chi tiết:</h3>
                    <div id="product-content-detail">
                        {ReactHtmlParser(pro.description)}
                    </div>

                    <div className="container-fluid mb-2">
                        <div className="row">
                            <div className="d-flex justify-content-center col-12">
                                <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APPID}>
                                    <Comments href={url} />
                                </FacebookProvider>
                            </div>
                        </div>
                    </div>
                    {titleSuggest}
                </div>
            )
        } else {
            CONTENT = <ImgHolder url="/loading.gif" />
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

        return (<div>
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