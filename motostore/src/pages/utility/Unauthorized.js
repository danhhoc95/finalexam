import React, { Component } from 'react';

class Unauthorized extends Component {
    render() {
        return (<div style={{marginTop:-40}} className="container-fluid text-center">
                    <img className="img-fluid" alt="hahah" src="/401.gif"></img>
                </div>);
    }
}

export default Unauthorized;