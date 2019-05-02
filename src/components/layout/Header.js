import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>       
            <Link style={LinkStyle} to="/activedirectorydemo">Start Active Directory Demo</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#282c34',
    textAlign: 'center',
    color: 'white'
}

const LinkStyle = {
    color: '#61dafb'
}

export default Header;
