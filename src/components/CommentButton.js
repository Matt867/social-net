import '../component-style/CommentButton.css'
import COMMENTBUTTON from '../retweet.png'
import { useState } from 'react';

export default function CommentButton () {

    const [commentCount, setCommentCount] = useState(0)

    function handleClick (e) {
        setCommentCount(commentCount + 1)
    }

    return (
        <div className="comment-button">
            <img src={COMMENTBUTTON} alt="Comment Button" onClick={handleClick}/>
            <p>{commentCount}</p>
        </div>
    );

}
