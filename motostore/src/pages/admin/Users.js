import React, { Component } from 'react';
import Loading from '../../components/Customer/Loading';
import CallAPI from '../../RESTFull/BaseApi';
import Pagination from "react-js-pagination";
import unixTimeToDate from '../utility/UnixTimeToDate';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            totalItem: 0,
            pageSize: 0,
            activePage: 1
        }
    }

    componentDidMount() {
        CallAPI(`api/users/user`, null, { }).then(res => {
            this.setState({
                list: res.data.list,
                pageSize: res.data.pageSize,
                totalItem: res.data.totalItem
            })
        })
        .catch(() => {
            alert("Lỗi lấy danh sách tài khoản");
        })
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
        CallAPI(`api/users/user`, null, { }).then(res => {
            this.setState({
                list: res.data.list,
                pageSize: res.data.pageSize,
                totalItem: res.data.totalItem
            })
        })
        .catch(() => {
            alert("Lỗi lấy danh sách tài khoản");
        })
    }

    render() {
        let records;
        if (this.state.list !== null) {
            records = this.state.list.map(user => {
                return (<tr key={user.phoneNumber}>
                            <th scope="row">{user.phoneNumber}</th>
                            <td>{user.userName}</td>
                            <td ><span className="d-inline-block text-truncate" style={{ width: 300 }} data-toggle="tooltip" data-placement="top" title={user.address}>{user.address}</span></td>
                            <td>{unixTimeToDate(user.createdDate)}</td>
                        </tr>)
            })
        } else {
            records = <Loading url="loading.gif"/>
        }

        return (
            <div>
                <div className="container-fluid">
                    <div className='row justify-content-center text-center'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">SĐT</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col">Ngày đăng kí</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records}
                            </tbody>
                        </table>

                        <Pagination
                            activePage={this.state.activePage}
                            firstPageText="Trang đầu"
                            lastPageText="Trang cuối"
                            itemClass="page-item"
                            linkClass="page-link"
                            itemsCountPerPage={this.state.pageSize}
                            totalItemsCount={this.state.totalItem}
                            pageRangeDisplayed={parseInt(process.env.REACT_APP_PAGE_RANGE_DISPLAYED)}
                            onChange={this.handlePageChange.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;