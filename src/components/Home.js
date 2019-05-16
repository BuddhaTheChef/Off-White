import React, { Component } from "react";

class Home extends Component {

  render() {
    return (
    <div>

      <header className="App-header">
      <div>
        <h1>Off White</h1>
      </div>
      </header>
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

                        <div className="main-home">
                <div className="temp-placeholder">Main Content</div>
            </div>
            <div className="bot-home-div">
                <h3 className="temp-h3-title">Product Placeholder</h3>
                <div className="bot-cat-home-div">
                    <div className="content-type-1">4</div>
                    <div className="content-type-2">5</div>
                    <div className="content-type-3">6</div>
                </div>
            </div>

                        <div className="main-home">
                <div className="temp-placeholder">Main Content</div>
            </div>
            <div className="bot-home-div-3">
                <h3 className="temp-h3-title">Product Placeholder</h3>
                <div className="bot-cat-home-div">
                    <div className="content-type-1">7</div>
                    <div className="content-type-2">8</div>
                    <div className="content-type-3">9</div>
                </div>
            </div>
        
        </div>    
    );
  }
} 

export default Home;