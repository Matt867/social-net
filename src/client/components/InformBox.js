import "../component-style/InformBox.css"

export default function InformBox (props) {
    const colors = {
        error: "#FF9494",
        inform: "#f7cc57"
    }

    return <>
    <div className="inform" style={{
        backgroundColor: colors[props.level],
        width: "270px"
    }}>
        <p>
            {props.message}
        </p>
    </div>
    </>
}
