import './Experience.css'
import Section from '../Common/Section'
import Card from '../Common/Card'
import staples from '../svgs/staples.svg'
import qbuild from '../svgs/qbuild.svg'
import yrhacks from '../svgs/yrhacks.svg'
function Experience() {
    return (
        <div className="Experience">
            <Section title="EXPEREINCE">
                <CardsContainer>
                    <Card img={staples} title="Staples" description="OCT 19 - MAR 20" footer="Part Time" text="Technology Sales Area Representative">
                        <p>- Educated customers on technology to improve their shopping experience</p>
                        <p>- Listened to customer issues and directed them to alternate solutions/products</p>
                        <p>- Communicated clearly and politely while giving customer service</p>
                    </Card>
                    <Card img={qbuild} title="QBuild" description="JAN 21 - APR 21" footer="Full Time" text="Application Developer">
                        
                    </Card>
                    <Card img={yrhacks} title="YRHacks" description="APR 21 - APR 21" footer="Volunteer" text="Workshop Host">
                        
                    </Card>
                </CardsContainer>
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