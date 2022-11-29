import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tweet from "../components/Tweet";
import InformBox from "../components/InformBox";


export default function ViewTweet(props) {
    const { id } = useParams()
    const [error, setError] = useState("")
    const [tweet, setTweet] = useState({})
    const [author, setAuthor] = useState({})

    useEffect(() => {
        async function getTweet () {
            const response = await fetch(`http://localhost:5001/tweets/tweet/${id}`)
            const data = await response.json()

            if (response.status === 200) {
                setTweet(data[0])
                setAuthor(data[1])
            } else {
                setError("Cannot find tweet!")
            }

        }
        getTweet()
    }, [])


    return <>
        {!error ? <Tweet tweet={tweet} author={author}/> : <></>}
        { error ? <InformBox message={error} level="error"/>: <></>}
    </>
}
