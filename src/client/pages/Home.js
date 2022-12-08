import Tweet from "../components/Tweet";
import TweetButton from "../components/TweetButton";
import { useState, useEffect } from "react";
import '../page-style/Home.css'
import ComposeTweetComponent from "../components/ComposeTweetComponent";

export default function Home (props) {

    const [tweets, setTweets] = useState([])
    const [authors, setAuthors] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        async function GetHomeTweets () {
            try {
                const jwt = window.localStorage.getItem('jwt')
                if (!jwt) console.log("jwt is null")
                const response = await fetch("http://localhost:5001/tweets/home", {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${jwt}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })

                const data = await response.json()

                setTweets(data[0])
                setAuthors(data[1])

            } catch (error) {
                setError(error)
            }
        }

        GetHomeTweets()

        const interval = setInterval(() => {
            GetHomeTweets()
        }, 15000);

        return () => clearInterval(interval);

    },[])

    function handleImpression (e) {
        console.log("CLCIKED")
        // props.handleClickImpression(e)
    }

    function createTwitterComponents (tweets, authors) {
        console.log(tweets)
        const tweetComps = []
        for (let i = 0; i < tweets.length; i += 1) {
            tweetComps.push(<Tweet onClick={handleImpression} key={i} tweet={tweets[i]} author={authors[i]}/>)
        }

        return tweetComps
    }



    return (
        <div className="home-page-content">
            <div className="spacer">
                _
            </div>
            <div className="feed-compose-wrapper">
                <ComposeTweetComponent/>
                {createTwitterComponents(tweets, authors)}
            </div>
            <div className="spacer">
                _
            </div>
        </div>
    );
}
