import React, { Component } from "react";
import Navbar from './Navbar';
import YouTube from 'react-youtube';
import Pinebranch from '../Media/pine-branch.svg';

class Home extends Component {

  render() {
    const opts = {
        height: '1060',
        width: '1900',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          start: 0,
          mute:1,
          enablejsapi: 1,
          modestbranding: 0,
          iv_load_policy: 3,
          playsinline: 1,
          showinfo: 0,
          zoom: 1.5,
          disablekb: 1,
        }
    };
    return (
    <div>
         <Navbar />
      <header className="App-header">
      <div className="main-title-div">
        <h1 className="main-title">NATVRE</h1>
      </div>
      </header>
            <div className="main-home">
                <div className="temp-placeholder">
                <div className="overlay"></div>
                <YouTube
        videoId="eX3wd2DcVOs"
        opts={opts}
      />
                </div>
            </div>
            <img className="pine-branch-1" src={Pinebranch} alt="branch" />
            <img className="vine-1" src="https://sitejerk.com/images/plant-5.png" alt="vine" />
            <div className="bot-home-div-1">
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
            <div className="bot-home-div-2">
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
  _onReady(event) {
    // access to player in all event handlers via event.target
    
  }
} 

export default Home;