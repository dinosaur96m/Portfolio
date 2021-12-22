import { StickyContainer, Sticky } from "react-sticky"

function About() {
    return (
        <StickyContainer>
        <div className="about">
            <Sticky> 
                { () => {
                return (
                    <div className="aboutContent">
                        <div className="skills">
                            <h2 id="skillsTitle">Technical Skills</h2>
                            <i class="fab fa-js-square"></i>
                            <span>MongoDB, Express.JS, React.JS, Node.JS</span>
                            <span>HTML, CSS, JavaScript</span>
                            <span>PostgresSQL, Sequelize, Git, GitHub, Bootstrap</span>
                        </div>
                        <div className="resume">
                            <h1>RESUME</h1>
                        </div>
                        <img id="headshot" src="/images/headshot.jpeg" alt="headshot" />
                    </div>
                    )
                }
            }</Sticky>
        </div>
        </StickyContainer>
    )
}

export default About