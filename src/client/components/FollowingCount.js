import "../component-style/FollowingCount.css"

export default function FollowingCount (props) {


    return (
        <div className="following-count">
            <p>Following</p>
            <p><strong>{props.followingCount}</strong></p>
        </div>
    );
}
