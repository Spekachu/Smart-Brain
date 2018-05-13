import React from 'react';

const Navigation = ({ routes, onRouteChange, isSignedIn }) => {

    const renderNav = (isSignedIn) => {
        switch(isSignedIn) {
        case true:
            return (
                <nav className='flex justify-end'>
                    <p onClick={() => onRouteChange(routes.signout)} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                </nav>
            )
        default:
            return (
                <nav className='flex justify-end'>
                    <p onClick={() => onRouteChange(routes.signin)} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange(routes.register)} className='f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
            )
        }
    }
    return renderNav(isSignedIn);
}

export default Navigation;