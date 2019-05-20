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
          start: 60,
          loop: 1,
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
                    <div className="content-type-1"><img className="pics1" src="https://images.homedepot-static.com/productImages/05076193-7591-472e-b0c5-5530252e4806/svn/brussel-s-bonsai-bonsai-trees-dt-7079gmj-64_1000.jpg" alt="wow"></img>Rock Juniper</div>
                    <div className="content-type-2"><img className="pics1" src="https://images.homedepot-static.com/productImages/bd8393eb-9cbd-4224-b7b8-7e15fbef5f7e/svn/brussel-s-bonsai-bonsai-trees-ct-0116ft-64_1000.jpg" alt="tree"></img>Chinese Elm</div>
                    <div className="content-type-3"><img className="pics1" src="https://images-na.ssl-images-amazon.com/images/I/81Rx03JgEDL._SX355_.jpg" alt="wow"></img>Hemlock Bonsai</div>
                </div>
            </div>

                        <div className="main-home">
                <div className="temp-placeholder">Main Content</div>
            </div>
            <div className="bot-home-div-2">
                <h3 className="temp-h3-title">Product Placeholder</h3>
                <div className="bot-cat-home-div">
                    <div className="content-type-1"><img className="pics1" src="https://cdn11.bigcommerce.com/s-bhqinueo9m/images/stencil/1024x1024/products/14642/8047/ginseng-grafted-ficus-small-indoor-bonsai-ct7012gmf__47740.1480631167.jpg?c=2" alt="wow"></img>Shohin Flowering Tea Tree</div>
                    <div className="content-type-2"><img className="pics1" src="https://cdn1.bigcommerce.com/server4100/6ys4nr/products/1757/images/5932/ChineseElm__34952.1417016213.1280.1280.JPG?c=2" alt="wow"></img>Golden Gate Ficus</div>
                    <div className="content-type-3"><img className="pics1" src="https://cdn11.bigcommerce.com/s-bhqinueo9m/images/stencil/1024x1024/products/14633/8040/fukien-tea-medium-indoor-bonsai-ct0116ft__99376.1480631164.jpg?c=2" alt="wow"></img> Taiwan Ficus Bonsai </div>
                </div>
            </div>

                        <div className="main-home">
                <div className="temp-placeholder">Main Content</div>
            </div>
            <div className="bot-home-div-3">
                <h3 className="temp-h3-title">Product Placeholder</h3>
                <div className="bot-cat-home-div">
                    <div className="content-type-1"><img className="pics1" src="https://www.easternleaf.com/v/vspfiles/photos/804550-03-2.jpg" alt="wow"></img>Minature Boxwood</div>
                    <div className="content-type-2"><img className="pics1" src="https://www.redlandsdailyfacts.com/wp-content/uploads/migration/2015/201505/NEWS_150519634_AR_0_TGUQUXVHUNFI.jpg?w=535" alt="wow"></img>Juniper procubens nana</div>
                    <div className="content-type-3"><img className="pics1" src="https://cdn.shopify.com/s/files/1/0422/3365/collections/Fukien_Bonsai_Tree_large_68344548-0145-41b4-8409-2a886f17d724_large.jpg?v=1502917813" alt="wow"></img>Fukien Tea Bonsai </div>
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