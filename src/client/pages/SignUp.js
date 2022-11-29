import PopUpWindow from "../components/PopUpWindow"
import InformBox from "../components/InformBox"
import LargeInputBox from "../components/LargeInputBox"
import "../page-style/SignUp.css"
import { useState } from "react"

export default function SignUp (props) {

    const [password, setPassword] = useState("")
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [handle, setHandle] = useState("")
    const [username, setUsername] = useState("")
    const [error, setError] = useState()

    function handleHandleOnChange(e) {
        if (e.currentTarget.value.includes(" ")) {
            e.currentTarget.value = e.currentTarget.value.replace(/\s/g, "");
        }
        setHandle(e.target.value)
    }

    function handleUsernameOnChange(e) {
        setUsername(e.target.value)
    }

    function handlePasswordOnChange(e) {
        setPassword(e.target.value)
    }
    function handleConfirmPasswordOnChange(e) {
        if (e.target.value === password) {
            setPasswordMatch(true)
        } else {
            setPasswordMatch(false)
        }
    }

    async function handleSubmit() {

        try {
            const response = await fetch("http://localhost:5001/users/signup", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    handle: handle,
                    username: username,
                    password: password
                })
            })

            const data = await response.text()

            if (response.status === 200) {
                console.log(data)
                window.localStorage.setItem('jwt', data)
                window.location.href = "/login"
            } else {
                console.log(response.status, data)
                setError(data)
            }
        } catch (error) {
            console.error(error)
        }

    }

    return <div className="signup-content">
        <PopUpWindow>
            <h1>Sign up to Twitter</h1>
            <LargeInputBox type="text" placeholder="Create a Twitter handle" handleOnChange={handleHandleOnChange}/>
            <LargeInputBox type="text" placeholder="Create a Twitter display name" handleOnChange={handleUsernameOnChange} value={handle}/>
            <LargeInputBox type="password" placeholder="Enter your Twitter password" handleOnChange={handlePasswordOnChange}/>
            {password ? <LargeInputBox type="password" placeholder="Confirm your Twitter password" handleOnChange={handleConfirmPasswordOnChange}/>: <></> }
            <ul>
                <li>At least one upper case English letter</li>
                <li>At least one lower case English letter</li>
                <li>At least one digit</li>
                <li>At least one special character</li>
                <li>Minimum six in length</li>
            </ul>
            {passwordMatch ? <></> : <InformBox message="Passwords do not match" level="inform" value=""/>}
            <button className="button-login" onClick={handleSubmit} style={{visibility: passwordMatch ? "visible": "hidden"}} >Submit</button>
            {error ? <InformBox message={error} level="error"/> : <></>}
        </PopUpWindow>
    </div>
}
