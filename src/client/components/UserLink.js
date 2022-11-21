import VERIFIED_BADGE from '../images/verified_badge.svg'
import '../component-style/UserLink.css'

export default function UserLink (props) {
    return (
        <div className="UserLink">
            <a><strong>{props.author.username}</strong></a>

            { props.author.verified ? <img className="verified-badge" src={VERIFIED_BADGE} alt="Verification Badge"/> : <></>}
        </div>
    );
}
