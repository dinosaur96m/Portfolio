import { StickyContainer, Sticky } from "react-sticky"
import {useState} from "react"

function About() {

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        hovered ? setHovered(false) : setHovered (true)
    }

    return (
        <StickyContainer className="sticky">
        <div className="about">
            <Sticky> 
                { () => {
                return (
                    <div className="aboutContent">
                        <div className="skills">
                            <h2 id="skillsTitle">Technologies</h2>
                            <i class="fab fa-react techIcon"></i>
                            <i class="fab fa-node-js techIcon"></i>
                            <i class="fab fa-python techIcon"></i>
                            <i class="fab fa-html5 techIcon"></i>
                            <i class="fab fa-js-square techIcon"></i>
                            <i class="fab fa-css3-alt techIcon"></i>
                            <i class="fab fa-bootstrap techIcon"></i>
                            <i class="fab fa-git-square techIcon"></i>
                            <i class="fab fa-github techIcon"></i>
                        </div>
                        <img id="headshot" src="/images/headshot.jpeg" alt="headshot" />
                        <a href="Resume - Jan 2022 .pdf" download><i onMouseEnter={handleHover} onMouseLeave={handleHover} id={hovered ? "resTwo" : "res"} class="fas fa-file-alt techIcon"></i></a>
                    </div>
                    )
                }
            }</Sticky>
        </div>
        </StickyContainer>
    )
}

export default About