import { useState } from "react";
import ProfilePic from "./ProfilePic";
import TweetButton from "./TweetButton";
import "../component-style/ComposeTweetComponent.css"

export default function ComposeTweetComponent (props) {

    const [content, setContent] = useState("")

    return <div className="compose-tweet-component">
        <div className="compose-tweet-component-pfp-holder">
            <ProfilePic width={"80px"}/>
        </div>
        <div className="compose-tweet-component-tweet-content">
            <textarea onChange={(e) => setContent(e.target.value)} placeholder="What's happening?">

            </textarea>
        </div>
        <div className="compose-tweet-component-tweet-button-holder">
            <TweetButton handleClick={props.handleClick} />
        </div>
    </div>
}
