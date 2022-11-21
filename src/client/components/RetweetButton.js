import { useState } from 'react';
import '../component-style/RetweetButton.css'
import RETWEET from '../images/retweet.png'

export default function RetweetButton (props) {

    const [retweetCount, setRetweetCount] = useState(props.retweetCount ? props.retweetCount : 0)
    const [retweeted, setRetweeted] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        if (!retweeted) {
            setRetweetCount(retweetCount + 1)
        } else {
            setRetweetCount(retweetCount - 1)
        }
        setRetweeted(!retweeted)
    }

    return (
        <div className="retweet-button">
            <img src={RETWEET} alt="Retweet button" onClick={handleClick}/>
            <p>{retweetCount}</p>
        </div>
    );

}
