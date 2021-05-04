import './Section.css'

function VerticalText(props) {
    return (
       <div className="Vertical-Text">
           {props.text}
       </div>
    );
}
function Section(props) {
    return (
        <div className="Section-Container">
            <VerticalText text={props.title}/>
            {props.children}
        </div>
    );
}

export default Section