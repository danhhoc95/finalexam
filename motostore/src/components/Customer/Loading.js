import React, { Component } from 'react';

class ImageHolder extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <img className="img-fluid" alt="imageholder" src={this.props.url}/>
            </div>
        );
    }
}

export default ImageHolder;