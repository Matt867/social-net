import "../component-style/FollowerCount.css"

export default function FollowerCount (props) {

    return (
        <div className="follower-count">
            <p><strong>{props.followerCount}</strong></p>
            <p>Followers</p>
        </div>
    );
}
