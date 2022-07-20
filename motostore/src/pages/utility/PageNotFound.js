import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (<div style={{backgroundColor : "#8DE0C6"}} className="container-fluid text-center">
                    <img className="img-fluid" alt="error" src="/404-error.gif"></img>
                </div>);
    }
}

export default PageNotFound;