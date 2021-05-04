import './Description.css'
import Section from '../Common/Section'
import Icon from '../Common/Icon'
function Description() {
    return (
        <div className="Description">
            <Section title="ABOUT ME">
                <Content/>
            </Section>
        </div>
    );
}

function Content() {
    return (
        <div className="Content-Container">
            <div className="Word-Block">
                Hello! I have yet to find a specific area of programming I am very passionate about, so I am trying different things. Having worked with code for many years, I have built a solid background in different fields such as web development, game design and competitive coding. In my spare time, I like playing video games, the visual arts and playing the piano. <span className="Important">Hover over </span>the icons for a description.
            </div>
            <IconRow title="Languages">
                <Icon type="fab" icon="js" alt="JavaScript"/>
                <Icon type="fab" icon="html5" alt="HTML"/>
                <Icon type="fab" icon="css3-alt" alt="CSS"/>
                <Icon type="fab" icon="java" alt="Java"/>
                <Icon type="fab" icon="python" alt="Python"/>
                <Icon type="fas" icon="hashtag" alt="C#"/>
                <Icon type="fas" icon="database" alt="SQL"/>
            </IconRow>
            <IconRow title="Frameworks">
                <Icon type="fab" icon="microsoft" alt="ASP.NET"/>
                <Icon type="fab" icon="react" alt="React"/>
                <Icon type="fab" icon="bootstrap" alt="Bootstrap"/>
                <Icon type="fab" icon="node-js" alt="Node.js"/>
                <Icon type="fab" icon="aws" alt="AWS"/>
            </IconRow>
            <IconRow title="Technologies">
                <Icon type="fab" icon="unity" alt="Unity"/>
                {/*photoshop*/}
                <Icon type="fas" icon="crop" alt="Photoshop"/>
                {/*blender*/}
                <Icon type="fas" icon="cube" alt="Blender"/>
            </IconRow>
        </div>
    );
}

function IconRow(props) {
    return (
        <div>
            <div className="Icon-Title">
                {props.title}
            </div>
            <div className="Icon-Flex">
                {props.children}
            </div>
        </div>
    );
}

export default Description