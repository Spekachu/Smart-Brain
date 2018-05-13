import React from 'react';

const FaceRecognition = ({ imageSrc, regions }) => {
    const boxes = [];

    for (let i = 0; i < regions.length; i++) {
        const box = regions[i].region_info.bounding_box;
        const style = { 
            top: `${box.top_row * 100}%`, 
            left: `${box.left_col * 100}%`, 
            right: `${100 - (box.right_col * 100)}%`, 
            bottom: `${100 - (box.bottom_row * 100)}%`,
            boxShadow: "-1px -1px 0 rgba(255,255,255,.8), 1px 1px 0 rgba(0,0,0,.8)"
        }

        boxes.push(<div id={`box-${i}`} key={i} className="face-box absolute shadow-1 ba bw1 b--light-blue absolute" style={style}></div>);
    }

    return (
        <div className="mw7 w-90 center mb4 mt2 ba tc relative">
            <img className="db w-100" src={imageSrc} alt="faceDetectImage"/>
            {boxes}
        </div>
    )
}

export default FaceRecognition;
