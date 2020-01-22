import React from 'react';
import './style.css'

function Control (props) {
    return (
        <div className='control'>
            <div className='title'>
                Test Redux
            </div>
            <div className='buttons'>
            <a href='#' className='button'>+</a>
            <a href='#' className='button'>-</a>
            </div>
        </div>
    );
}

export default Control;