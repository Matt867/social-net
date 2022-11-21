import '../component-style/HandleLink.css'

export default function HandleLink (props) {

    const handle = props.handle ? props.handle : "undefined"

    return (
        <a className='handle'>{"@"+handle}</a>
    );
}
