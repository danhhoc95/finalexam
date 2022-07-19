import React, { Component } from 'react';
import NavigationBar from '../components/Customer/NavigationBar';
import Footer from '../components/Customer/Footer';

class Customer extends Component {
    render() {
        return (<div>
                    <NavigationBar/>
                    {this.props.children}
                    <Footer/>
                </div>);
    }
}

export default Customer;