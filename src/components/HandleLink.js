import '../component-style/HandleLink.css'

export default function HandleLink (props) {
    return (
        <a className='handle'>{"@"+props.handle}</a>
    );
}
