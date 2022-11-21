import CLOSEBUTTON from '../images/close-button.png'
import "../component-style/PopUpWindow.css"

export default function PopUpWindow (props) {

    return (
        <div className="pop-up-window" style={{ width: props.width }}>
            <div className="close-section">
                <img src={CLOSEBUTTON} className='close-button'></img>
            </div>
            <div className='main-sect' >
                {props.children}
            </div>
            <div className='r-section'></div>
        </div>
    );

}
