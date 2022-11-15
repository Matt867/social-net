import { useState } from 'react'
import '../component-style/FollowButton.css'

export default function FollowButton (props) {

    const [following, setFollowing] = useState(props.following)

    const unfollowClass = "unfollow-hover"

    function handleMouseOver (e) {
        if (following) {

        }
    }



    return (
        <button className="follow-button" onMouseOver={handleMouseOver}>{following ? "Following": "Follow"}</button>
    );

}
