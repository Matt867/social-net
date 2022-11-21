import '../component-style/CommentButton.css'
import COMMENTBUTTON from '../images/chat-balloon.png'
import { useState } from 'react';

export default function CommentButton (props) {

    const [commentCount, setCommentCount] = useState(props.commentCount)

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
