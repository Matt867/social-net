import Tweet from "../components/Tweet";


export default function Home (props) {

    const author = {
        handle: "MattSidaway",
        username: "Matt Sidaway",
        password: "HelloWorld",
        pfp: null,
        verified: false,
        followingCount: 634,
        followerCount: 861
    }

    const tweet = {
        content: "Hello World",
        commentCount: 0,
        retweetCount: 5,
        likeCount: 0,
        shareLink: "https://www.google.com"
    }



    return (
        <div>
            <Tweet author={author} tweet={tweet}/>
        </div>
    );
}
