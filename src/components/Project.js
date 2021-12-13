import Carousel from 'react-bootstrap/Carousel'

function Project(props) {
    return (
        <div className="project">
            <h2 className="projTitle">{props.project.name}</h2>
            <Carousel interval={null} variant="dark" fade={true}>
                <Carousel.Item>
                    <img className="d-block w-100 projImg" src={props.project.imgUrls[0]} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 projImg" src={props.project.imgUrls[1]} alt="Second slide"/>
                </Carousel.Item>
            </Carousel>

            <p>{props.project.description}</p>
            <p>Teck Stack: {props.project.stack}</p>
        </div>
    )
}

export default Project