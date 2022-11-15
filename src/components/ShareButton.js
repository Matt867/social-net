import SHAREBUTTON from '../retweet.png'
import { useState } from 'react'
import '../component-style/ShareButton.css'

export default function ShareButton (props) {



    function handleClick (e) {
        alert("Share")
    }

    return (
        <div className="share-button">
            <img src={SHAREBUTTON} alt="Share Button" onClick={handleClick}/>
        </div>

    )
}
