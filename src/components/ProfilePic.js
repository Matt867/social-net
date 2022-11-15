import PERSON from '../person.jpg'
import DEFAULT_PFP from '../Default_pfp.svg'

export default function ProfilePic (props) {
    return (
        <img src={props.pfp ? props.pfp: DEFAULT_PFP} className='profile-pic'></img>
    );
}
