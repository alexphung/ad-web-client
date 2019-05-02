import React, { Component } from 'react'
import AdUsers from '../models/AdUsers';
import axios from 'axios';

class ActiveDirectoryDemo extends Component {
    state = {
        ad_users: [ ]
    }

    // component life cycle method
    componentDidMount(){
        let url = 'http://localhost:20991/api/whois/v1/GetGroupMembers';
        axios.get(url)
            .then(res => this.setState({ ad_users: res.data }));        
    }

    render() {
        return (
        <div>
            <h1>AD Users Extraction Demo</h1>
            <AdUsers adusers={this.state.ad_users}/>
        </div>
        )
    }
}

export default ActiveDirectoryDemo
