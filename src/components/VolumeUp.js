import React from 'react';

const VolumeUp = (props) => {
    // console.log(props)
    return (
        <div>
            <button id='volumeUp' onMouseDown={(e) => console.log("props.handleVolumeMouseDown")} onMouseUp={(e) => console.log("props.handleVolumeMouseUp")}>
            Vol+
            </button>
        </div>
    )
}

export default VolumeUp;
