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
                    <h6 className="bot-content-home">Content</h6>
                </div>
            </div>
        </div>    
    );
  }
} 

export default Home;