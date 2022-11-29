import COMPOSE from '../images/compose.svg'
import "../component-style/TweetButton.css"


export default function TweetButton (props) {

    return <>
        <button type="button" className='new-tweet-button' onClick={props.handleClick}>Tweet</button>
    </>

}
