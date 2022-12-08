import '../component-style/LikeButton.css'
import { useState } from 'react'
import UNLIKED from '../images/unliked-heart.png'
import LIKED from '../images/liked-heart.png'

export default function LikeButton (props) {
    const [likeCount, setLikeCount] = useState(props.likeCount ? props.likeCount : 0)

    function handleClick (e) {
        e.preventDefault()
        if (!props.liked) {
            setLikeCount(likeCount + 1)
            props.handleLikeCountChange(1)
        } else {
            setLikeCount(likeCount - 1)
            props.handleLikeCountChange(-1)
        }
        setLiked(!props.liked)
    }


    return (
        <div className="like-button">
            <img src={props.liked ? LIKED: UNLIKED} onClick={handleClick}></img>
            <p>{likeCount}</p>
        </div>
    );

}
