import './Projects.css'
import Section from '../Common/Section'
import ProjectCard from '../Common/ProjectCard'

function Projects() {
    let personalSiteIcons = [{type:'fab',icon:'js'},{type:'fab',icon:'html5'},{type:'fab',icon:'css3-alt'},{type:'fab',icon:'react'}];
    let inPrintIcons = [{type:'fab',icon:'java'},{type:'fab',icon:'node-js'}];
    let whoLostBotIcons = [{type:'fab',icon:'js'},{type:'fab',icon:'node-js'},{type:'fab',icon:'aws'}];
    return (
        <div className="Projects">
            <Section title="PROJECTS">
                <div className="ProjectCards-Container">
                    <ProjectCard title="Personal Website" icons={personalSiteIcons} a="https://github.com/kenzoengineer/Ken-Jiang-Site">
                        <p>- This website is made with React using the <code>create-react-app</code> utility</p>
                    </ProjectCard>
                    <ProjectCard title="inPrint" icons={inPrintIcons} a="https://github.com/cneryx/InPrint">
                        <p>- Created a biometrics based password auto filler and vault with my team for MasseyHacks V</p>
                        <p>- App fetched fingerprint information, and connected with a chrome extension using Node.js to autofill form fields</p>
                        <p>- Oversaw the design of the UI/UX, which created a clean end product</p>
                        <p>- Won second place overall</p>
                    </ProjectCard>
                    <ProjectCard title="WhoLostBot" icons={whoLostBotIcons} a="https://github.com/kenzoengineer/WhoLostBot">
                        <p>- Created a discord bot using Discord.js which tracks voice channel events</p>
                        <p>- Able to display rankings in a user friendly format</p>
                        <p>- Used local storage for permanent and efficient storage</p>
                        <p>- Hosted the bot on Amazon's EC2 server for 24/7 Uptime</p>
                    </ProjectCard>
                </div>
            </Section>
        </div>
    );
}

export default Projects;