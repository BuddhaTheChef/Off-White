import React, {Component} from 'react';
import Navbar from './Navbar';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>About</h1>
                <div style={{height: '671px',}}></div>
            </div>
        )
    }
}

export default About;