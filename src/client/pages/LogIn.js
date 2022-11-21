import PopUpWindow from "../components/PopUpWindow"
import "../page-style/LogIn.css"
import LargeInputBox from "../components/LargeInputBox"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function LogIn (props) {

    const [password, setPassword] = useState("")
    const [handle, setHandle] = useState("")
    const [passwordBoxShow, setPasswordBoxShow] = useState(false)

    function handleHandleOnChange(e) {
        setHandle(e.target.value)
    }

    function handlePasswordOnChange(e) {
        setPassword(e.target.value)
    }

    function handleNextOnSubmit(e) {
        setPasswordBoxShow(!passwordBoxShow)
    }

    async function handleSubmit(e) {
        fetch("http://localhost:5001/users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                handle: handle,
                password: password
            })
        }).then(response => response.text())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
    }

    function inputType () {
        if (passwordBoxShow) {
            return (<>
                <LargeInputBox type="text" placeholder="Enter your Twitter handle" handleOnChange={handleHandleOnChange} value={handle}/>
                <LargeInputBox type="password" placeholder="Enter your Twitter password" handleOnChange={handlePasswordOnChange}/>
                <button className="button-login" onClick={handleSubmit}>Submit</button>
            </>);
        } else {
            return <>
                <LargeInputBox type="text" placeholder="Enter your Twitter handle" handleOnChange={handleHandleOnChange}/>
                <button className="button-login" onClick={handleNextOnSubmit}>Next</button>
            </>
        }
    }

    return (
    <div className="login-content">
        <PopUpWindow>
            <h1>Sign in to Twitter</h1>

            {inputType()}

            <p>Don't have an account yet?</p>
            <Link to="/signup">Sign up</Link>

        </PopUpWindow>
    </div>
    )
}
