import './Modal.css'
import './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Modal(props) {
    return (
        <div className={`Modal-Container-${props.state}`}>
            <div className="Modal-Overlay"></div>
            <div className="Modal-Window" style={{width: `${props.width}`,height: `${props.height}`}}>
                <div className="Modal-Close" onClick={props.closeHandler}>
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