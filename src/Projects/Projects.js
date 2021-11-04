import './Projects.css'
import Section from '../Common/Section'
import ProjectCard from '../Common/ProjectCard'

function Projects() {
    let personalSiteIcons = [{type:'fab',icon:'js'},{type:'fab',icon:'html5'},{type:'fab',icon:'css3-alt'},{type:'fab',icon:'react'}];
    let inPrintIcons = [{type:'fab',icon:'java'},{type:'fab',icon:'node-js'}];
    let whoLostBotIcons = [{type:'fab',icon:'js'},{type:'fab',icon:'node-js'},{type:'fab',icon:'aws'}];
    let beeBrawlIcons = [{type:'fab',icon:'unity'},{type:'fas',icon:'hashtag'}];
    let yrhacksIcons = [{type:'fab',icon:'python'}]
    let beeBrawlSiteIcons = [{type:'fab',icon:'js'},{type:'fab',icon:'html5'},{type:'fab',icon:'css3-alt'},{type:'fab',icon:'bootstrap'}];
    let textTrackerIcons = [{type:'fas', icon:'leaf'}];
    return (
        <div className="Projects">
            <Section title="PROJECTS">
                <div className="ProjectCards-Container">
                    <ProjectCard title="Personal Website" icons={personalSiteIcons} a="https://github.com/kenzoengineer/Ken-Jiang-Site">
                        <p>- This website is made with React using the <code>create-react-app</code> utility</p>
                        <p>- Created reusable components to avoid repetition</p>
                        <p>- Applied UI/UX concepts such as hierarchy and composition</p>
                        <p>- Deployed on GitHub pages with the <code>npm run build</code> utility</p>
                    </ProjectCard>
                    <ProjectCard title="inPrint" icons={inPrintIcons} a="https://github.com/cneryx/InPrint">
                        <p>- Created a biometrics based password auto filler and vault with my team for MasseyHacks V</p>
                        <p>- App fetched fingerprint information, and connected with a chrome extension using Node.js to autofill form fields</p>
                        <p>- Oversaw the design of the UI/UX, which created a clean end product</p>
                        <p>- Won second place overall</p>
                    </ProjectCard>
                    <ProjectCard title="WhoLostBot" icons={whoLostBotIcons} a="https://github.com/kenzoengineer/WhoLostBot">
                        <p>- Designed a discord bot using Discord.js which tracks voice channel events</p>
                        <p>- Able to display rankings in a user friendly format</p>
                        <p>- Used local storage for permanent and efficient storage</p>
                        <p>- Hosted the bot on Amazon's EC2 server for 24/7 Uptime</p>
                    </ProjectCard>
                    <ProjectCard title="BeeBrawl" icons={beeBrawlIcons} a="https://github.com/kenzoengineer/BeeBrawl">
                        <p>- Developed a wave based shooter using Unity Game Engine</p>
                        <p>- Created object oriented scripts in C#</p>
                        <p>- Utilised raytracing and other forms of linear algebra</p>
                        <p>- Still unfinished, currently in progress</p>
                    </ProjectCard>
                    <ProjectCard title="YRHacks Bot" icons={yrhacksIcons} a="https://github.com/kenzoengineer/YRHacks-2021-bot">
                        <p>- Programmed an example discord bot for YRHacks 2021 workshop attendees</p>
                        <p>- Used Discord.py as a bot api, and PokeApi RESTful API for data</p>
                        <p>- Stored data about a user's favourite pokemon using a key-value pair database</p>
                    </ProjectCard>
                    <ProjectCard title="BeeBrawl Site" icons={beeBrawlSiteIcons} a="https://github.com/kenzoengineer/GameSite">
                        <p>- Constructed a mock-site to advertise BeeBrawl</p>
                        <p>- Used Bootstrap's library for simple page layout</p>
                        <p>- Used JQuery for simple syntactic sugar</p>
                        <p>- Deployed the site live using Amazon Amplify (Currently offline, instead deployed on github pages)</p>
                    </ProjectCard>
                    <ProjectCard title="TextTracker" icons={textTrackerIcons} a="https://github.com/kenzoengineer/TextTracker">
                        <p>- test</p>
                    </ProjectCard>
                </div>
            </Section>
        </div>
    );
}

export default Projects;