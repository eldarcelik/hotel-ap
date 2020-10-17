import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h3>rooms data loading...</h3>
            <img src={loadingGif} alt=""></img>
        </div>
    )
}