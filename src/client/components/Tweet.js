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
                <ProfilePic pfp={props.author.pfp} />
            </section>
            <section className="user-container">
                <UserLinkWithPreview author={props.author} previewPopUp={true}/>
                <HandleLink handle={props.author.handle}/>
            </section>
            <section className="more-info-button-sect">
                <MoreInfoButton/>
            </section>

            <section className="tweet-content-container">
                <p>{props.tweet.content}</p>
            </section>
            <section className="blank">

            </section>
            <section className="interaction-buttons-container">
                <CommentButton commentCount={props.tweet.commentCount}/>
                <RetweetButton retweetCount={props.tweet.retweetCount}/>
                <LikeButton likeCount={props.tweet.likeCount}/>
                <ShareButton/>
            </section>
        </div>
    );
}
