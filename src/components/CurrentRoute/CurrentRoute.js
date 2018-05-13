import React from 'react';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import SignIn from '../SignIn/SignIn';
import Register from '../Register/Register';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

const CurrentRoute = ({ app, state, onRouteChange, onDetectButtonSubmit }) => {

    const onInputChange = (e) => {
        app.setState({ input: e.target.value });
        app.setState({ imageSrc: e.target.value });
        app.setState({ regions: [] });
    }
    
    const renderRoute = (route) => {
        switch(route) {
        case state.routes.home:
            return (
                <div>
                <Rank name={state.user.name} entries={state.user.entries}/>
                <ImageLinkForm onInputChange={onInputChange} onDetectButtonSubmit={onDetectButtonSubmit}/>
                {state.imageSrc.length > 0 &&

                    <FaceRecognition imageSrc={state.imageSrc} regions={state.regions} />
                }
                </div>
            );
        case state.routes.signin:
            return <SignIn loadUser={app.loadUser} routes={state.routes} onRouteChange={onRouteChange}/>;
        case state.routes.register:
            return <Register loadUser={app.loadUser} routes={state.routes} onRouteChange={onRouteChange}/>;
        default:
            return
        }
    }
    return renderRoute(state.route);
}

export default CurrentRoute;
