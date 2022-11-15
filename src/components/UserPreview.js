import ProfilePic from "./ProfilePic";
import '../component-style/UserPreview.css'
import FollowButton from "./FollowButton";
import HandleLink from "./HandleLink";
import UserLink from "./UserLink";
import FollowingCount from "./FollowingCount"
import FollowerCount from "./FollowerCount";

export default function UserPreview (props) {
    return (
        <div className="user-preview-hover-popup">
            <section className="profile-pic-container">
                <ProfilePic />
            </section>
            <section className="follow-button-container">
                <FollowButton following={false}/>
            </section>
            <section className="username-container">
                <UserLink username="Matthew Sidaway" verified={true}/>
            </section>
            <section className="handle-container">
                <HandleLink handle="MatthewSidaway"/>
            </section>
            <section className="bio-container">
                <p>
                    Generic Twitter Bio
                </p>
            </section>
            <section className="follow-count-container">
                <FollowingCount followingCount={534}/>
            </section>
            <section className="following-count-container">
                <FollowerCount followerCount={125}/>
            </section>
        </div>
    );
}
