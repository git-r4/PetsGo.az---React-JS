import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";
import {MdArrowForwardIos} from "react-icons/md";
import {Animated} from "react-animated-css";

import '../../style/styles.scss';
import '../../style/responsive.scss';

import lakiImg from '../../images/laki/svg/laki.svg';

const AboutUs = (props) => {
    props.backColor.style.backgroundColor = '#623D5A';
    return(
        <div className="pageTop pageCenter pageTopForAll">
            <Container>
                <Row className="rowCentered">
                    <Col lg={6}>
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                            <div className="page">
                                <div className="page_header">
                                    <h1 className="aboutColor">Haqqımızda</h1>
                                </div>
                                <div className="page_description">
                                    <p className="aboutColor">
                                        PetsGo Azərbaycanın ilk ev heyvanlarına xidmət platformasıdır.<br/>
                                        Ailə üzvlərinizə çevrilən heyvanların baxımı, müalicəsi, ehtiyacları və bu kimi xidmətlər yaxın zamanda telefonlarınızda olacaq.<br/>
                                        Onların ehtiyaclarını ən keyifyyətli və sərfəli üsullarla sizə təqdim edirik.
                                    </p>
                                </div>
                                <div className="page_selectBtn">
                                    <Link to="/xidmetlerimiz" className="btn aboutBorder">
                                        <span className="aboutColor">Xidmətlər <MdArrowForwardIos /></span>
                                        <div className="btn_blobs">
                                            <div className="aboutBackColor"></div>
                                            <div className="aboutBackColor"></div>
                                            <div className="aboutBackColor"></div>
                                        </div>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{height: '0', width: '0'}}>
                                        <defs>
                                            <filter id="goo">
                                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                                <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </Animated>
                    </Col>
                    <Col lg={6} className="forMobileDisplayNone">
                        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                            <div className="lakiBox">
                                <img src={lakiImg} alt="Laki"/>
                            </div>
                        </Animated>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutUs;