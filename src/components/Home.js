import React, { Component } from "react";
import Navbar from "./Navbar";
import YouTube from "react-youtube";
import Pinebranch from "../Media/pine-branch.svg";
import Modal from "react-modal";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showModal2: false
    };
    //Open Modals
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleOpenModal6 = this.handleOpenModal6.bind(this);
    this.handleOpenModal7 = this.handleOpenModal7.bind(this);
    this.handleOpenModal8 = this.handleOpenModal8.bind(this);
    this.handleOpenModal9 = this.handleOpenModal9.bind(this);
    //Close Modals
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);
    this.handleCloseModal6 = this.handleCloseModal6.bind(this);
    this.handleCloseModal7 = this.handleCloseModal7.bind(this);
    this.handleCloseModal8 = this.handleCloseModal8.bind(this);
    this.handleCloseModal9 = this.handleCloseModal9.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleOpenModal2() {
    this.setState({ showModal2: true });
  }
  handleOpenModal3() {
    this.setState({ showModal3: true });
  }
  handleOpenModal4() {
    this.setState({ showModal4: true });
  }
  handleOpenModal5() {
    this.setState({ showModal5: true });
  }
  handleOpenModal6() {
    this.setState({ showModal6: true });
  }
  handleOpenModal7() {
    this.setState({ showModal7: true });
  }
  handleOpenModal8() {
    this.setState({ showModal8: true });
  }
  handleOpenModal9() {
    this.setState({ showModal9: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  handleCloseModal2() {
    this.setState({ showModal2: false });
  }
  handleCloseModal3() {
    this.setState({ showModal3: false });
  }
  handleCloseModal4() {
    this.setState({ showModal4: false });
  }
  handleCloseModal5() {
    this.setState({ showModal5: false });
  }
  handleCloseModal6() {
    this.setState({ showModal6: false });
  }
  handleCloseModal7() {
    this.setState({ showModal7: false });
  }
  handleCloseModal8() {
    this.setState({ showModal8: false });
  }
  handleCloseModal9() {
    this.setState({ showModal9: false });
  }

  render() {
    const opts = {
      height: "1060",
      width: "1900",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        start: 60,
        loop: 1,
        mute: 1,
        enablejsapi: 1,
        modestbranding: 0,
        iv_load_policy: 3,
        playsinline: 1,
        showinfo: 0,
        zoom: 1.5,
        disablekb: 1
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
            <div className="overlay" />
            <YouTube videoId="eX3wd2DcVOs" opts={opts} />
          </div>
        </div>
        <img className="pine-branch-1" src={Pinebranch} alt="branch" />
        <img
          className="vine-1"
          src="https://sitejerk.com/images/plant-5.png"
          alt="vine"
        />
        <div className="bot-home-div-1">
          <h3 className="temp-h3-title">Beginner Trees</h3>
          <div className="bot-cat-home-div">
            <div className="content-type-1" onClick={this.handleOpenModal}>
              <img
                className="pics1"
                src="https://images.homedepot-static.com/productImages/05076193-7591-472e-b0c5-5530252e4806/svn/brussel-s-bonsai-bonsai-trees-dt-7079gmj-64_1000.jpg"
                alt="wow"
              />
              Rock Juniper
            </div>
            <div className="content-type-2" onClick={this.handleOpenModal2}>
              <img
                className="pics1"
                src="https://images.homedepot-static.com/productImages/bd8393eb-9cbd-4224-b7b8-7e15fbef5f7e/svn/brussel-s-bonsai-bonsai-trees-ct-0116ft-64_1000.jpg"
                alt="tree"
              />
              Chinese Elm
            </div>
            <div className="content-type-3" onClick={this.handleOpenModal3}>
              <img
                className="pics1"
                src="https://images-na.ssl-images-amazon.com/images/I/81Rx03JgEDL._SX355_.jpg"
                alt="wow"
              />
              Hemlock Bonsai
            </div>
          </div>
        </div>

        <div className="main-home">
          <div className="temp-placeholder">
            <h3>Watering your Bosai Tree</h3>
            <p style={{ fontSize: "20px" }}>
              The number one cause of most bonsai tree deaths is under-watering.
              Because the soil layer is so shallow, it is prone to drying out
              very quickly. Bonsai trees should be watered right when the top
              layer of soil appears dry. Depending on the type and size of your
              tree, as well as the type of soil you use, the frequency of
              watering can differ and can even be once a day. Therefore, it’s
              best to water each of your bonsai plants individually, instead of
              sticking to a routine. When watering your bonsai tree, the main
              goal is to fully saturate the root system with water. To ensure
              proper saturation, keep watering until water escapes through the
              draining holes. To allow for proper draining, many bonsai trees
              come with a tray to collect excess water. Overwatering can also be
              detrimental for your bonsai tree. Symptoms of an overwatered
              bonsai include: yellowing of leaves and the shriveling of smaller
              branches. If a bonsai is overwatered, its roots are drowning in
              water and are deprived of oxygen which prevents further growth to
              support the tree. Overwatering can also result from poor-draining
              soil. To ensure that you are watering your bonsai properly, you’ll
              need to assess your bonsai tree daily. The rule of thumb is to
              water as soon as the soil appears dry.
            </p>
          </div>
        </div>
        <div className="bot-home-div-2">
          <h3 className="temp-h3-title">Intermdeiate Trees</h3>
          <div className="bot-cat-home-div">
            <div className="content-type-1" onClick={this.handleOpenModal4}>
              <img
                className="pics1"
                src="https://cdn11.bigcommerce.com/s-bhqinueo9m/images/stencil/1024x1024/products/14642/8047/ginseng-grafted-ficus-small-indoor-bonsai-ct7012gmf__47740.1480631167.jpg?c=2"
                alt="wow"
              />
              Shohin Flowering Tea Tree
            </div>
            <div className="content-type-2" onClick={this.handleOpenModal5}>
              <img
                className="pics1"
                src="https://cdn1.bigcommerce.com/server4100/6ys4nr/products/1757/images/5932/ChineseElm__34952.1417016213.1280.1280.JPG?c=2"
                alt="wow"
              />
              Golden Gate Ficus
            </div>
            <div className="content-type-3" onClick={this.handleOpenModal6}>
              <img
                className="pics1"
                src="https://cdn11.bigcommerce.com/s-bhqinueo9m/images/stencil/1024x1024/products/14633/8040/fukien-tea-medium-indoor-bonsai-ct0116ft__99376.1480631164.jpg?c=2"
                alt="wow"
              />{" "}
              Taiwan Ficus Bonsai{" "}
            </div>
          </div>
        </div>

        <div className="main-home">
          <div className="temp-placeholder">
            <h3>Pruning and Shaping your Bosai Tree</h3>
            <p style={{ fontSize: "20px" }}>
              Pruning is essential for keeping bonsai trees small and for
              maintaining their compact shape. There are two main types of
              pruning: maintenance pruning and structural pruning. Maintenance
              pruning strengthens the tree by encouraging new growth. By cutting
              away young shoots and leaves it exposes the leaves underneath to
              air and sunlight which further strengthens the tree and benefits
              its overall health. Areas that require maintenance pruning include
              the branches, buds, and leaves. Pruning away branches encourages
              the growth of smaller branches and allows you to control the shape
              of your tree. Pruning buds away from branches produces a more
              compact leaf growth which encourages the growth of smaller leaves.
              Typically, you should prune your bonsai tree when you see new
              growth that’s starting to morph the shape of your tree in an
              undesirable manner. For flowering bonsais, pruning should take
              place during the spring to encourage more flowers to grow the
              following year. Structural pruning is a more advanced technique
              that should only be done when the tree is dormant. It involves the
              removal of the tree’s primary structural branches and requires the
              skills of a professional to ensure that the tree can recover.
              Another way to properly shape your bonsai tree is to wire its
              branches. You can control the shape and growth pattern of certain
              branches by wrapping a thin wire around them. Wiring is best done
              during winter when the leaves of the bonsai tree have fallen off.
              Be sure to keep an eye on the branch’s growth and remove the wire
              when necessary. If the branch grows too fast, it can grow into the
              wire and cause scarring.
            </p>
          </div>
        </div>
        <div className="bot-home-div-3">
          <h3 className="temp-h3-title">Advanced Trees</h3>
          <div className="bot-cat-home-div">
            <div className="content-type-1" onClick={this.handleOpenModal7}>
              <img
                className="pics1"
                src="https://www.easternleaf.com/v/vspfiles/photos/804550-03-2.jpg"
                alt="wow"
              />
              Minature Boxwood
            </div>
            <div className="content-type-2" onClick={this.handleOpenModal8}>
              <img
                className="pics1"
                src="https://www.redlandsdailyfacts.com/wp-content/uploads/migration/2015/201505/NEWS_150519634_AR_0_TGUQUXVHUNFI.jpg?w=535"
                alt="wow"
              />
              Juniper procubens nana
            </div>
            <div className="content-type-3" onClick={this.handleOpenModal9}>
              <img
                className="pics1"
                src="https://cdn.shopify.com/s/files/1/0422/3365/collections/Fukien_Bonsai_Tree_large_68344548-0145-41b4-8409-2a886f17d724_large.jpg?v=1502917813"
                alt="wow"
              />
              Fukien Tea Bonsai{" "}
            </div>
          </div>
        </div>
        <div className="temp-placeholder">
          <h3>Choosing the Right Soil For Your Bonsai</h3>
          <p style={{ fontSize: "20px" }}>
            The key to choosing the right soil for your bonsai is to choose one
            that offers proper drainage. Add large particles to your soil
            mixture, such as volcanic rock or stones, to improve drainage and to
            introduce air into the soil. The ideal soil mixture should also be
            able to hold water which can be improved by adding clay. Fertilizing
            your bonsai ensures that it receives the proper amount of nutrients
            it needs to stay healthy. A balanced bonsai fertilizer contains
            equal amounts of nitrogen, phosphorus and potassium. Before you
            fertilize, make sure that you’ve watered your tree thoroughly as it
            is harmful to fertilize the plant while the soil is dry. Be sure to
            read the instructions on the fertilizer to avoid overfertilizing.
          </p>

          <h3>Repotting Your Bonsai</h3>

          <p style={{ fontSize: "20px" }}>
            Repotting is a key factor in maintaining the health of your bonsai
            tree. The purpose of repotting is to remove excess roots which can
            cause the tree to starve, or not receive enough nutrients for its
            mass. Repotting also ensures that your tree can continue to thrive
            within a small pot. Bonsai trees should be repotted once every two
            to five years, depending on how quickly your bonsai tree grows. Here
            are the basic steps to repotting your bonsai tree:
            <ol style={{ fontSize: "20px" }}>
              <li>Carefully remove the tree from its pot.</li>
              <li>Using sharp shears, trim away the outer layer of roots.</li>
              <li>
                Inspect the root mass for areas of rot trim away as needed.
                These areas can indicate where the bonsai is not getting enough
                drainage.
              </li>
              <li>Clean the pot itself and remove any brown or green spots.</li>
              <li>
                Place mesh squares over the drainage holes to prevent soil from
                falling out.
              </li>
              <li>
                Layer the bottom of the pot with soil and place the tree on top.
              </li>
              <li>
                Fill the remaining holes and gaps where the root used to exist
                with soil.{" "}
              </li>
            </ol>
          </p>
        </div>

        <Modal
          className="modal"
          isOpen={this.state.showModal}
          contentLabel="Modal #1 Global Style Override Example"
          onRequestClose={this.handleCloseModal}
        >
          <div className="modal-main">
            <p>Modal text!</p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal2}
          contentLabel="Modal #2 Global Style Override Example"
          onRequestClose={this.handleCloseModal2}
        >
          <div className="modal-main">
            <p>Modal #2 text!</p>
            <button onClick={this.handleCloseModal2}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal3}
          contentLabel="Modal #3 Global Style Override Example"
          onRequestClose={this.handleCloseModal3}
        >
          <div className="modal-main">
            <p>Modal #3 text!</p>
            <button onClick={this.handleCloseModal3}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal4}
          contentLabel="Modal #4 Global Style Override Example"
          onRequestClose={this.handleCloseModal4}
        >
          <div className="modal-main">
            <p>Modal #4 text!</p>
            <button onClick={this.handleCloseModal4}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal5}
          contentLabel="Modal #5 Global Style Override Example"
          onRequestClose={this.handleCloseModal5}
        >
          <div className="modal-main">
            <p>Modal #5 text!</p>
            <button onClick={this.handleCloseModal5}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal6}
          contentLabel="Modal #6 Global Style Override Example"
          onRequestClose={this.handleCloseModal6}
        >
          <div className="modal-main">
            <p>Modal #6 text!</p>
            <button onClick={this.handleCloseModal6}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal7}
          contentLabel="Modal #7 Global Style Override Example"
          onRequestClose={this.handleCloseModal7}
        >
          <div className="modal-main">
            <p>Modal #7 text!</p>
            <button onClick={this.handleCloseModal7}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal8}
          contentLabel="Modal #8 Global Style Override Example"
          onRequestClose={this.handleCloseModal8}
        >
          <div className="modal-main">
            <p>Modal #8 text!</p>
            <button onClick={this.handleCloseModal8}>Close Modal</button>
          </div>
        </Modal>

        <Modal
          className="modal"
          isOpen={this.state.showModal9}
          contentLabel="Modal #9 Global Style Override Example"
          onRequestClose={this.handleCloseModal9}
        >
          <div className="modal-main">
            <p>Modal #9 text!</p>
            <button onClick={this.handleCloseModal9}>Close Modal</button>
          </div>
        </Modal>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
  }
}

export default Home;
