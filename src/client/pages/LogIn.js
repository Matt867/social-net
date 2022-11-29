import PopUpWindow from "../components/PopUpWindow"
import "../page-style/LogIn.css"
import LargeInputBox from "../components/LargeInputBox"
import InformBox from "../components/InformBox"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function LogIn (props) {

    const [password, setPassword] = useState("")
    const [handle, setHandle] = useState("")
    const [passwordBoxShow, setPasswordBoxShow] = useState(false)
    const [errorShow, setErrorShow] = useState(false)

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
        }).then(response => {
            if (response.status !== 200) {
                throw new Error("Invalid handle or password")
            }
            return response.text()
        })
        .then(data => {
            console.log(data)
            window.localStorage.setItem('jwt', data)
            window.location.href = "/"
        })
        .catch(err => {
            setErrorShow(true)
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
            return (<>
                <LargeInputBox type="text" placeholder="Enter your Twitter handle" handleOnChange={handleHandleOnChange} />
                <button className="button-login" onClick={handleNextOnSubmit}>Next</button>
            </>);
        }
    }

    useEffect(() => {
        async function call() {
            const jwt = window.localStorage.getItem('jwt')
            if (jwt) {
                const response = await fetch('http://localhost:5001/users/validateToken', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: jwt
                    })
                })
                const data = await response.json()

                if (data.authenticated) {
                    window.location.href = "/"
                } else {
                    console.log("Must sign in")
                }

            } else {
                console.log("Need to sign in")
            }
        }
        call()
    }, [])


    return (
    <div className="login-content">
        <PopUpWindow>
            <h1>Sign in to Twitter</h1>

            {inputType()}
            {errorShow ? <InformBox message="Incorrect handle or password" level="error"/> : <></>}
            <p>Don't have an account yet?</p>
            <Link to="/signup">Sign up</Link>

        </PopUpWindow>
    </div>
    )
}
