import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
        <div>
            <div className="main-home">
                <div className="temp-placeholder">Video Placeholder</div>
            </div>
            <div className="bot-home-div">
                <h3 className="temp-h3-title">Product Placeholder</h3>
                <div className="bot-cat-home-div">
                    <div className="content-type-1">1</div>
                    <div className="content-type-2">2</div>
                    <div className="content-type-3">3</div>
                </div>
            </div>
        </div>    
    );
  }
} 

export default Home;