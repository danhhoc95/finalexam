import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (<div style={{backgroundColor : "#0dfd8d"}} className="container-fluid text-center">
                    <img className="img-fluid" alt="error" src="/404-error.gif"></img>
                </div>);
    }
}

export default PageNotFound;