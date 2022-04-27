import './Modal.css'
import './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState, useLayoutEffect } from 'react';

function Modal(props) {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(window.innerHeight);
    const [dim, setDim] = useState([window.innerWidth, window.innerHeight]);

    useLayoutEffect(() => {
      window.addEventListener('resize',() => {setDim([contentRef.current.clientWidth, contentRef.current.clientHeight])});
      return () => {window.removeEventListener('resize',() => {setDim([contentRef.current.clientWidth, contentRef.current.clientHeight])});};
    }, [])

    useEffect(() => {
        setContentHeight(contentRef.current.clientHeight);
        document.body.style.overflow = props.state === "shown" ?  'hidden' : 'unset';
    }, [props.state]);

    return (
        <div className={`Modal-Container-${props.state}`}>
            <div className="Modal-Window" style={{width: `${props.width}`,height: `calc(${dim[1]}px + 11.5vh)`}}>
                <div className="Modal-Close" onClick={props.closeHandler}>
                    <FontAwesomeIcon icon={["fas", "times"]} />
                </div>
                <div className="Modal-Content" ref={contentRef}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;