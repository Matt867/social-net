import '../component-style/LikeButton.css'
import { useState } from 'react'
import UNLIKED from '../images/unliked-heart.png'
import LIKED from '../images/liked-heart.png'

export default function LikeButton (props) {

    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(props.likeCount ? props.likeCount : 0)

    function handleClick (e) {
        e.preventDefault()
        if (!liked) {
            setLikeCount(likeCount + 1)
            props.handleLikeCountChange(1)
        } else {
            setLikeCount(likeCount - 1)
            props.handleLikeCountChange(-1)
        }
        setLiked(!liked)
    }


    return (
        <div className="like-button">
            <img src={liked ? LIKED: UNLIKED} onClick={handleClick}></img>
            <p>{likeCount}</p>
        </div>
    );

}
