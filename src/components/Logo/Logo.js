import React from 'react';
import MyTilt from '../MyTilt/MyTilt';
import spekalogo from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="">
            <MyTilt className="Tilt br2 ba shadow-3 flex justify-center items-center" options={{ max : 65 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner f1 tc"><img className="db w-90 h-90 center" alt="logo" src={spekalogo}/></div>
            </MyTilt>
        </div>
    )
}

export default Logo;
