import VERIFIED_BADGE from '../verified_badge.svg'
import '../component-style/UserLink.css'

export default function UserLink (props) {
    return (
        <div className="UserLink">
            <a><strong>{props.username}</strong></a>

            { props.verified ? <img className="verified-badge" src={VERIFIED_BADGE} alt="Verification Badge"/> : <></>}
        </div>
    );
}
