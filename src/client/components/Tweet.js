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
import { useEffect, useState } from 'react';
import InformBox from './InformBox';

/**
 *
 * @param {id, pfp, username, verified, content} props
 * @returns {Tweet}
 */


export default function Tweet (props) {

    const [errorMessage, setErrorMessage]  = useState("")
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        async function isLiked() {
            try {
                if (window.localStorage.getItem('jwt')){
                    const response = await fetch(`http://localhost:5001/tweets/tweet/${props.tweet.id}/isLiked`, {
                        method: "GET",
                        headers: {
                            'authorization': `Bearer ${window.localStorage.getItem('jwt')}`,
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                    })

                    if (response.status !== 200) {
                        const message = await response.text()
                        throw new Error(message)
                    }

                    const data = await response.json()

                    setLiked(data)

                    setErrorMessage("")
                }
            } catch (error) {
                setErrorMessage(error.message)
                console.log(error.message)
            }
        }

        isLiked()
    },[])

    async function handleLikeCountChange (change) {
        try {

            if (Math.abs(change) > 1) {
                throw new Error("Cannot change like count by more than 1")
            }

            if (window.localStorage.getItem('jwt')){
                const response = await fetch("http://localhost:5001/tweets/like", {
                    method: "POST",
                    headers: {
                        'authorization': `Bearer ${window.localStorage.getItem('jwt')}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: props.tweet.id,
                        change: change
                    })
                })

                if (response.status !== 200) {
                    const message = await response.text()
                    throw new Error(message)
                }

                setErrorMessage("")
            }
        } catch (error) {
            setErrorMessage(error.message)
            console.log(error.message)
        }
    }

    return (
        <div className="tweet-container">
            <section className="profile-pic-top">
                <ProfilePic pfp={props.author.pfp} width={"80px"} />
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
                <LikeButton handleLikeCountChange={handleLikeCountChange} likeCount={props.tweet.likeCount} liked={liked}/>
                <ShareButton/>
            </section>
            {errorMessage ? <InformBox level={"error"} message={errorMessage} width={"100%"}/> : <></>}
        </div>
    );
}
