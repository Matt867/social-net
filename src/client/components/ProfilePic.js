import PERSON from '../images/person.jpg'
import DEFAULT_PFP from '../images/Default_pfp.svg'
import '../component-style/ProfilePic.css'

export default function ProfilePic (props) {
    return (
        <img src={props.pfp ? props.pfp: DEFAULT_PFP} className='profile-pic' style={{ width: props.width ? props.width: '90px', height:props.width ? props.width: '90px'}}></img>
    );
}
