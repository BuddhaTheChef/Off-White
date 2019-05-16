import React, {Component} from 'react';
import Navbar from './Navbar';

class Trending extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Trending</h1>
                <div style={{height: '671px',}}></div>
            </div>
        )
    }
}

export default Trending;