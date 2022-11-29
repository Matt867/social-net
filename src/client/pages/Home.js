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
                const response = await fetch("http://localhost:5001/tweets/home", {
                    method: "GET",
                    headers: {
                        'authorization': `Basic ${window.localStorage.getItem('jwt')}`,
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

    },[])


    function createTwitterComponents (tweets, authors) {
        const tweetComps = []
        for (let i = 0; i < tweets.length; i += 1) {
            tweetComps.push(<Tweet key={i} tweet={tweets[i]} author={authors[i]}/>)
        }

        return tweetComps
    }

    return (
        <div className="feed-compose-wrapper">
            <ComposeTweetComponent/>
            {createTwitterComponents(tweets, authors)}
        </div>
    );
}
