import React, { Component } from 'react';
import InputRange from 'react-input-range';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import 'react-input-range/lib/css/index.css';
import CallAPI from '../../RESTFull/BaseApi';
import '../../css/FilterBar.css';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

class FilterBar extends Component {

    handleChange(type, data) {
        this.props.dispatch({ type: type, data: data });
        this.props.dispatch({ type: "REDIRECT_TO_HOME" });
        var condition = {
            origin: data,
            sort: this.props.SortMode,
            priceRange: this.props.filterPrice,
            heightRange: this.props.filterHeight,
        }
        CallAPI('api/products/filter', 'POST', { }, condition).then(res => {
            this.props.dispatch({ type: "FETCH_CUSTOMER_LIST_PRODUCT", data: res.data.list });
            this.props.dispatch({ type: "UPDATE_ITEMS_COUNT_PER_PAGE", data: res.data.pageSize });
            this.props.dispatch({ type: "UPDATE_TOTAL_ITEMS_COUNT", data: res.data.totalItem });
        })
    }
    render() {
        let redirectToHome = () => {
            if (this.props.redirectToHome) {
                return <Redirect to='/home' />
            } else {
                return null;
            }
        }
        return (
            <div id="filter-bar-customer">
                {redirectToHome()}
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="col-1">
                            <span className="text-nowrap filter-lbl-nav">Mức giá :</span>
                        </div>
                        <div className="col-3">
                            <InputRange
                                formatLabel={value => `${value} triệu`}
                                step={10}
                                maxValue={700}
                                minValue={30}
                                value={this.props.filterPrice}
                                onChange={filterPrice => this.handleChange("UPDATE_FILTER_PRICE", filterPrice)} />
                        </div>
                        <div className="col-1">
                            <span className="text-nowrap filter-lbl-nav">Chiều cao:</span>
                        </div>
                        <div className="col-3">
                            <InputRange
                                formatLabel={value => `${value}cm`}
                                step={10}
                                maxValue={100}
                                minValue={20}
                                value={this.props.filterHeight}
                                onChange={filterHeight => this.handleChange("UPDATE_FILTER_HEIGHT", filterHeight)} />
                        </div>
                        <div className="col-2">
                            <div className="form-group">
                                <select className="form-control"  onChange={event => this.handleChange("UPDATE_FILTER_ORIGIN", event.target.value)} >
                                    <option value={0}>Hãng</option>
                                    <option value={"Honda"}>Honda</option>
                                    <option value={"Suzuki"}>Suzuki</option>
                                    <option value={"Yamaha"}>Yamaha</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = state => ({
    filterOrigin: state.filterOrigin,
    SortMode: state.SortMode,
    filterPrice: state.filterPrice,
    filterHeight: state.filterHeight,
    redirectToHome: state.redirectToHome,
    activePage : state.activePage
})
export default connect(mapStateToProps)(FilterBar);