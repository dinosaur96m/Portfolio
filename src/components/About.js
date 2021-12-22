import { StickyContainer, Sticky } from "react-sticky"

function About() {
    return (
        <StickyContainer>
        <div className="about">
            <Sticky> 
                { () => {
                return (
                    <div className="aboutContent">
                        <h1 className="title">Dino Mantinaos</h1>
                        <div className="intro">
                            Hi there, I'm Dino, a Brooklyn based Software Developer. Thanks for taking the time to learn more about me and my work. I'd love to hear from you!
                        </div>
                        <div className="skills">
                            <h2>Technical Skills</h2>
                            <span>MongoDB, Express.JS, React.JS, Node.JS</span>
                            <span>HTML, CSS, JavaScript</span>
                            <span>PostgresSQL, Sequelize, Git, GitHub, Bootstrap</span>
                        </div>
                        <div className="resume">
                            <h1>RESUME</h1>
                        </div>
                    </div>
                    )
                }
            }</Sticky>
        </div>
        </StickyContainer>
    )
}

export default About