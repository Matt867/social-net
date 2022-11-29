import Tweet from './client/components/Tweet'
import {nanoid} from 'nanoid'
import react, { useState, useEffect } from 'react';

import Home from "./client/pages/Home"
import SignUp from "./client/pages/SignUp"
import LogIn from "./client/pages/LogIn"
import ViewTweet from "./client/pages/ViewTweet"
import { Routes, Route } from 'react-router-dom';

export default function App() {

  // const [tweets, setTweets] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('http://localhost:5001/home')
  //     const data = await response.json()
  //     setTweets(data)
  //   }

  //   fetchData()
  //     .catch(console.error)

  // }, [])

  // const author = {
  //   handle: "MattSidaway",
  //   username: "Matt Sidaway",
  //   password: "HelloWorld",
  //   pfp: null,
  //   verified: false,
  //   followingCount: 634,
  //   followerCount: 861
  // }

  // const tweet = {
  //   content: "Hello World",
  //   commentCount: 0,
  //   retweetCount: 5,
  //   likeCount: 0,
  //   shareLink: "https://www.google.com"
  // }



  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/tweets/tweet/:id" element={<ViewTweet />}/>
      </Routes>
    </>
  );
}
