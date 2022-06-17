import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { Link } from 'react-router-dom';
import { ServiceData } from "./ServiceData";
import Masonry from "react-masonry-css";

import '../../style/styles.scss';
import '../../style/responsive.scss';

const Services = (props) => {
    props.backColor.style.backgroundColor = '#FEE8EA';
    const renderData = ServiceData.map(({id, image, title, description}) => {
        return(
            <div className="service_content" key={id}>
                <div className="service_content_img">
                    <img src={image} alt={image} />
                </div>
                <div className="service_content_title">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        )
    });



    return(
        <div className="pageTop serviceTop masonryCenter pageTopForAll">
            {/*<Container>
                <Row>
                    <Col lg={6}>
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                            <div className='service'>

                            </div>
                        </Animated>
                    </Col>
                    <Col lg={6}>
                        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                            <div className="lakiBoxService">
                                <img style={{objectFit: 'cover'}} src={servLaki} alt="serviceImage"/>
                            </div>
                        </Animated>
                    </Col>
                </Row>
            </Container>*/}
            <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                <Masonry
                    breakpointCols={{
                        default: 3,
                        1100: 2,
                        700: 1
                    }}
                    className="my-masonry-grid masonry-grid-change"
                    columnClassName="my-masonry-grid_column">
                    {renderData}
                </Masonry>
            </Animated>
        </div>
    )
}
export default Services;