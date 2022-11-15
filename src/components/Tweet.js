import '../component-style/Tweet.css'
import UserLink from './UserLinkWithPreview';
import MoreInfoButton from './MoreInfoButton';
import ProfilePic from './ProfilePic';
import UserLinkWithPreview from './UserLinkWithPreview';
import LikeButton from './LikeButton';
import RetweetButton from './RetweetButton';
import HandleLink from './HandleLink';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';

/**
 *
 * @param {id, pfp, username, verified, content} props
 * @returns {Tweet}
 */


export default function Tweet (props) {

    return (
        <div className="tweet-container">
            <section className="profile-pic-top">
                <ProfilePic/>
            </section>
            <section className="user-container">
                <UserLinkWithPreview id={props.id} username={props.username ? props.username: "Placeholder User"} verified={true} previewPopUp={true}/>
                <HandleLink handle="MatthewSidaway"/>
            </section>
            <section className="more-info-button-sect">
                <MoreInfoButton/>
            </section>

            <section className="tweet-content-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </section>
            <section className="blank">

            </section>
            <section className="interaction-buttons-container">
                <CommentButton/>
                <RetweetButton/>
                <LikeButton/>
                <ShareButton/>
            </section>
        </div>
    );
}
