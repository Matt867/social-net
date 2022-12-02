import { useState, useRef } from "react";
import ProfilePic from "./ProfilePic";
import TweetButton from "./TweetButton";
import "../component-style/ComposeTweetComponent.css"
import InformBox from "./InformBox";

export default function ComposeTweetComponent (props) {

    const [content, setContent] = useState("")
    const [characters, setCharacters] = useState(0)
    const [errorMessage, setErrorMessage] = useState("")
    const textareaRef = useRef(null);

    function handleTextAreaChange (e) {
        setContent(e.target.value)
        setCharacters(e.target.value.length)
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }

    async function handleNewTweet () {
        try {
            if (window.localStorage.getItem('jwt')) {
                const response = await fetch ("http://localhost:5001/tweets/new", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${window.localStorage.getItem('jwt')}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        content: content
                    })
                })

                if (response.status !== 200) {
                    const message = await response.text()
                    throw new Error(message)
                }

                setErrorMessage("")
            }
        } catch (err) {
            setErrorMessage(err.message)
            console.log(err.message)
        }
    }

    return <>
    <div className="compose-tweet-component">
        <div className="compose-tweet-component-pfp-holder">
            <ProfilePic width={"80px"}/>
        </div>

        <textarea ref={textareaRef} className="compose-tweet-component-tweet-content" onChange={handleTextAreaChange} placeholder="What's happening?" >

        </textarea>

        <div className="compose-tweet-component-tweet-button-holder">
            <p style={{ color: characters>240 ? "red": "black", fontWeight: characters>240 ? "bold": "default" }}>{characters}/240 {characters>240 ? " - This tweet is too long.": ""}</p>
            <TweetButton handleClick={handleNewTweet} />
        </div>
    </div>
    {errorMessage ? <InformBox level={"error"} message={errorMessage} width={"100%"}/> : <></>}
    </>
}
