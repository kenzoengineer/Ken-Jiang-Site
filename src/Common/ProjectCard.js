import './ProjectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);
function ProjectCard(props) {
    const IconList = [];
    for (let i of props.icons) {
        IconList.push(
            <FontAwesomeIcon key={i.icon} icon={[i.type, i.icon]}/>
        );
    }

    function clicked (e) {
        e.preventDefault();
      window.open(props.a, '_blank');
    }

    return (
        <div className="ProjectCard-Container">
            <div className="ProjectCard-Content">
                <div className="ProjectCard-Title">{props.title}</div>
                <div className="ProjectCard-Icons">{IconList}</div>
                <div className="ProjectCard-Description">{props.children}</div>
            </div>
            <div>
                <div onClick={clicked} className="ProjectCard-Button">
                    View on GitHub
                    <FontAwesomeIcon icon={['fab','github']}/>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;