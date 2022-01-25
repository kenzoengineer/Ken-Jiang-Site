import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Common/Modal'
import ken from '../images/ken_jpeg.jpg'
import resumeimage from '../Header/resume.jpg'
import React from 'react'
library.add(fab, fas);

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
      <Icon icon="linkedin" a="https://www.linkedin.com/in/ken-jiang/" />
      <Icon icon="github" a="https://github.com/kenzoengineer" />
      <Icon icon="instagram" a="https://www.instagram.com/kenzoengineer/" />
      <Icon icon="artstation" a="https://www.artstation.com/kenzoengineer" />
      {/* 
      
      TODO: Implement modal

      <ResumeIcon/> 
      <Modal width="40vw" height="auto">
        <img style={{'max-width': "100%", 'height':'auto'}}src={resumeimage} />
      </Modal> */}
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
function ResumeIcon(Props) {
  function clicked(e) {
    e.preventDefault();
  }
  return (
    <FontAwesomeIcon onClick={clicked} className="Icon" icon={["fas", "file"]} />
  );
}

export default Header;