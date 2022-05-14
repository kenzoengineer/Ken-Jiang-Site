import './Description.css'
import Section from '../Common/Section'
import Icon from '../Common/Icon'
import blender from '../svgs/blender.svg'
import photoshop from '../svgs/photoshop.svg'
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
                <p>
                Welcome to my Portfolio! I'm currently looking for Winter 2023 internships in software. I have experience doing front end, back end, game dev and graphic design related projects. In my spare time I like playting video games, drawing and playing the piano.
                </p>
                <p>
                    Below, I showcase the skills I have. <span className="Important">Hover over </span>the icons below to find out what each icon represents.
                </p>
            </div>
            <IconRow title="Languages">
                <Icon type="fab" icon="js" alt="JavaScript"/>
                <Icon type="fab" icon="html5" alt="HTML"/>
                <Icon type="fab" icon="css3-alt" alt="CSS"/>
                <Icon type="fas" icon="copyright" alt="C++"/>
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
                <Icon svg={photoshop} alt="Photoshop"/>
                {/*blender*/}
                <Icon svg={blender} alt="Blender"/>
                <Icon type="fab" icon="docker" alt="Docker"/>
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