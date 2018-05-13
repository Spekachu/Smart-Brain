import React from 'react';
import MyTilt from '../MyTilt/MyTilt';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onDetectButtonSubmit }) => {
    return (
        <div className="">
            <p className="f3">
                {`This magic brain will detect faces in your pictures. Give it a try!`}
            </p>
            <MyTilt className="mt4 pa4 w-90 mw7 center relative flex justify-between" options={{ scale: '1', targetChild: true, childClassList: 'tilt-child weave w-100 z-0 h-100 absolute top-0 left-0 shadow-5 br4' }}>
                <input className="f4 ph3 pv2 w-70 relative br-pill br--left ba b--black-50" type="text" onInput={onInputChange}/>
                <button className="w-30 f4 link ph3 pv2 relative dib black bg-light-blue hover-bg-light-red bg-animate br-pill br--right pointer bt br bb b--black-50" onClick={onDetectButtonSubmit}>Detect</button>
            </MyTilt>
        </div>
    )
}

export default ImageLinkForm;
