import { useState } from "react"
import "../component-style/LargeInputBox.css"

export default function LargeInputBox (props) {

    return(
        <>
            <input
                type={props.type}
                className="large-input-box"
                placeholder={props.placeholder}
                onChange={props.handleOnChange}
            ></input>
        </>
    )
}
