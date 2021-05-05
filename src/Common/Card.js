import './Card.css'
import Tooltip from './Tooltip'

function Card(props) {
    return (
        <div className="Card-Container">
            
            <div className="Card-Content">
                <img className="Card-Img" src={props.img} alt="card"></img>
                <div className="Card-Description">{props.description}</div>
                <div className="Card-Title">{props.title}</div>
                <div className="Card-Text">{props.text}</div>
                <div className="Card-Footer">{props.footer}</div>
            </div>
            <div className="Card-Tooltip">
                <Tooltip className="Card-Tooltip">
                    {props.children}
                </Tooltip>
            </div>
        </div>
    );
}

export default Card;