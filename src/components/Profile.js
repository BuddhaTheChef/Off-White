import React, {Component} from 'react';
import Navbar from './Navbar';

class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Profile</h1>
                <div style={{height: '671px',}}></div>
            </div>
        )
    }
}

export default Profile;