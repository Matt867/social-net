import BUTTON from '../images/three-dots-menu.svg'
import '../component-style/MoreInfoButton.css'

export default function MoreInfoButton (props) {
    return (
        <div className="more-info-button-container">
            <img className="more-info-button" src={BUTTON} alt="BUTTON" />
        </div>
    );
}
