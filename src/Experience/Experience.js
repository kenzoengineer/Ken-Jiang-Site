import './Experience.css'
import Section from '../Common/Section'
import Card from '../Common/Card'
import staples from '../svgs/staples.svg'
import qbuild from '../svgs/qbuild.svg'
import yrhacks from '../svgs/yrhacks.svg'
import hillhacks from '../svgs/hillhacks.svg'
function Experience() {
    return (
        <div className="Experience">
            <Section title="EXPERIENCE">
                <div>
                    <div className="Experience-Text">
                        <span className="Important">Hover over</span> the cards for more information.
                    </div>
                    <CardsContainer>
                        <Card img={staples} title="Staples" description="OCT 19 - MAR 20 (6 Months)" footer="Part Time" text="Technology Sales Area Representative">
                            <p>- Educated customers on technology to improve their shopping experience</p>
                            <p>- Listened to customer issues and directed them to alternate solutions/products</p>
                            <p>- Communicated clearly and politely while giving customer service</p>
                        </Card>
                        <Card img={hillhacks} title="Hill Hacks" description="JAN 20 - MAR 20 (3 Months)" footer="Volunteer" text="Head of Graphic Design">
                            <p>- Lead graphic designer at our high school's student run hackathon</p>
                            <p>- Collaborated with faculty and other executives to create posters, websites and post for social media</p>
                            <p>- Organized the designing, purchasing and distribution of our custom T-shirts</p>
                            <p>Note: The hackathon did not end up happening due to the pandemic</p>
                        </Card>
                        <Card img={qbuild} title="QBuild" description="JAN 21 - APR 21 (4 Months)" footer="Full Time Intern" text="Application Developer">
                            <p>- Added new features and fixed bugs in the company's CRM</p>
                            <p>- Worked closely with change ticket submitters to fully understand the ticket requirements</p>
                            <p>- Improved SQL CTE and SP runtimes by up to 30 times</p>
                            <p>Languages: HTML, CSS, JS, C#, SQL <br/>Technologies: ASP.net, Kendo UI</p>
                        </Card>
                        <Card img={yrhacks} title="YRHacks" description="APR 21 - APR 21 (1 Month)" footer="Volunteer" text="Workshop Host">
                            <p>- Gave a workshop on how to create a discord bot in Discord.py</p>
                            <p>- Created a bot which fetches Pokemon data from PokeApi (RESTful API)</p>
                            <p>- 100% uptime using Flask and UptimeRobot</p>
                            <p>Languages: Python <br/>Technologies: Repl.it, Discord.py, Flask, PokeApi</p>
                        </Card>
                        <Card img={qbuild} title="QBuild" description="SEPT 21 - DEC 21 (4 Months)" footer="Full Time Intern" text="Application Developer">
                            <p>- Furthered our CAD to ERP integration system</p>
                            <p>- Updated backend datafetching with asynchronous calls, leading to 9 fold reducitons in load times</p>
                            <p>- Designed binary data transfer pipelines for seamless client to database image upload</p>
                            <p>Languages: HTML, CSS, JS, C#, SQL <br/>Technologies: ASP.net, Telerik UI</p>
                        </Card>
                    </CardsContainer>
                </div>
            </Section> 
        </div>
    );
}

function CardsContainer(props) {
    return (
        <div className="Cards-Container">
            {props.children}
        </div>
    );
}

export default Experience;