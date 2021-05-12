import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
library.add(fab, fas);

function Navbar() {
    return (
        <div className="Navbar-Container">
            <NavbarIcon href="#" type="fas" icon="home" s="top">Home</NavbarIcon>
            <NavbarIcon href="#ABOUT ME" type="fas" icon="code">Skills</NavbarIcon>
            <NavbarIcon href="#EXPERIENCE" type="fas" icon="briefcase">Experience</NavbarIcon>
            <NavbarIcon href="#PROJECTS" type="fas" icon="code-branch" s="botton">Projects</NavbarIcon>
        </div>
    );
}

function NavbarIcon(props) {
    let className = 'Navbar-Icon';
    if (props.s === "top") className += ' Navbar-Top';
    if (props.s === "botton") className += ' Navbar-Bottom';
    return (
        <a href={props.href}>
            <div className={className}>
                <div className="Navbar-Label">{props.children}</div>
                <FontAwesomeIcon  icon={[props.type, props.icon]}/>
            </div>
        </a>
    );
}

export default Navbar;