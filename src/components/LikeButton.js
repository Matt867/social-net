import '../component-style/LikeButton.css'
import { useState } from 'react'
import UNLIKED from '../unliked-heart.png'
import LIKED from '../liked-heart.png'

export default function LikeButton (props) {

    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(Math.floor(Math.random()*1000))

    function handleClick (e) {
        e.preventDefault()
        if (!liked) {
            setLikeCount(likeCount + 1)
        } else {
            setLikeCount(likeCount - 1)
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
