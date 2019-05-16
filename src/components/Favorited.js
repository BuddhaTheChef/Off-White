import React, {Component} from 'react';
import Navbar from './Navbar';

class Favorited extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Favorited</h1>
                <div style={{height: '671px',}}></div>
            </div>
        )
    }
}

export default Favorited;