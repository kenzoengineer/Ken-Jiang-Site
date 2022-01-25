import './Modal.css'
import './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Modal(props) {
    let onClick = (e) => {
        
    }
    return (
        <div className="Modal-Container">
            <div className="Modal-Overlay"></div>
            <div className="Modal-Window" style={{width: `${props.width}`,height: `${props.height}`}}>
                <div className="Modal-Close">
                    <FontAwesomeIcon icon={["fas", "times"]} />
                </div>
                <div className="Modal-Content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;