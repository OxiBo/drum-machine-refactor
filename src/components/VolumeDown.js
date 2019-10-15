import React from 'react';

const VolumeDown = (props) => {

    return (
        <div>
            <button id='volumeDown' onMouseDown={(e) => console.log("props.handleVolumeMouseDown")} onMouseUp={(e) => console.log("props.handleVolumeMouseUp")}>
            Vol-
            </button>
        </div>
        )
}

export default VolumeDown;
