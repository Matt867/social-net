import VERIFIED_BADGE from '../images/verified_badge.svg'
import '../component-style/UserLink.css'
import { useState } from 'react';
import UserPreview from './UserPreview';

export default function UserLinkWithPreview (props) {

    const [isHovering, setIsHovering] = useState(false);

    function handleMouseOver() {
        setIsHovering(true)
    }

    async function handleMouseOut () {
        setIsHovering(false)
    }

    return (
        <div className="UserLink" onMouseEnter={props.previewPopUp ? handleMouseOver: console.log("Do nothing")} onMouseLeave={props.previewPopUp ? handleMouseOut: console.log("Do nothing")}>
            <a style={{textDecoration: isHovering ? 'underline': 'none'}}><strong>{props.author.username}</strong></a>

            { props.author.verified ? <img className="verified-badge" src={VERIFIED_BADGE} alt="Verification Badge"/> : <></>}

            {isHovering && (
                <UserPreview author={props.author}/>
            )}
        </div>
    );
}
