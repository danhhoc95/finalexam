import React, { Component } from 'react';
import NavigationBar from '../components/Customer/NavigationBar';
import Footer from '../components/Customer/Footer';
import FilterBar from '../components/Customer/FilterBar';

class Customer extends Component {
    render() {
        return (
            <div>
                 <NavigationBar/>
                 <FilterBar/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Customer;