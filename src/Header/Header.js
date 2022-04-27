import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Common/Modal'
import ken from '../images/ken_jpeg.jpg'
//import resumeimage from '../Header/resume.jpg'
import resumePdf from '../Header/resume.pdf';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf'
import React, {useLayoutEffect, useState} from 'react'

library.add(fab, fas);
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Header() {
  return (
    <React.Fragment>
      <div className="Outer-Grid">
        <div className="Left-Cell">
          <div className="Header-Text-Container">
            <Title text="KEN JIANG" />
            <Body text="Computer engineering student at the University of Waterloo" />
            <IconRows />
          </div>
        </div>
        <div className="Right-Cell">
          <img src={ken} alt="Ken Jiang" className="Title-Img"></img>
        </div>
      </div>
      <a href="#ABOUT ME">
        <FontAwesomeIcon className="Chevron-Icon" icon={['fas', 'chevron-down']} />
      </a>
    </React.Fragment>
  );
}

function Title(props) {
  return (
    <div className="Title-Header-Text">
      {props.text}
    </div>
  );
}

function Body(props) {
  return (
    <div className="Body-Header-Text">
      <p>{props.text}</p>
    </div>
  );
}

function IconRows() {
  return (        
    <div className="IconRow">
      <ResumeIcon/>
      <Icon icon="linkedin" a="https://www.linkedin.com/in/ken-jiang/" />
      <Icon icon="github" a="https://github.com/kenzoengineer" />
      <Icon icon="instagram" a="https://www.instagram.com/kenzoengineer/" />
      <Icon icon="artstation" a="https://www.artstation.com/kenzoengineer" />
    </div>
  );
}

function Icon(props) {
  function clicked(e) {
    e.preventDefault();
    window.open(props.a, '_blank');
  }
  return (
    <FontAwesomeIcon onClick={clicked} className="Icon" icon={["fab", props.icon]} />
  );
}

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener('resize',() => {setWidth(window.innerWidth)});
    return () => {window.removeEventListener('resize', () => {setWidth(window.innerWidth)})};
  }, [])
  return width < 1000 ? [width *0.9 - 10, "90vw"]: [width * 0.6 - 10, "60vw"] ;
}

function ResumeIcon() {
  const [show, setShow] = useState("hidden");
  const handleShow = () => setShow("shown");
  const handleHide = () => setShow("hidden");
  return (
    <>
    <div className="Resume-Button-Container" onClick={handleShow}>
      <FontAwesomeIcon className="Icon ResumeIcon" icon={["fas", "file"]} />
      <span className="Resume-Button-Text">Resume</span>
    </div>
    <Modal width={WindowWidth()[1]} state={show} closeHandler={handleHide}>
        <Document file={resumePdf}>
          <Page pageNumber={1} width={ WindowWidth()[0]}>
          </Page>
        </Document>
    </Modal>
    </>
  );
}

export default Header;