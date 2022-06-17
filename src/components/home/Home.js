import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { Link } from 'react-router-dom';

import '../../style/styles.scss';
import '../../style/responsive.scss';

import img1 from '../../images/shapes/asset_project.svg';
import img2 from '../../images/shapes/asset_project2.svg';
import img3 from '../../images/shapes/asset_project3.svg';
import img4 from '../../images/shapes/asset_project4.svg';
import {MdArrowForwardIos} from "react-icons/md";

const Home = (props) => {
    props.backColor.style.backgroundColor = '#FEE8EA';
    return(
        <div className="pageTop pageCenter">
           <Container>
               <Row className="rowCentered">
                   <Col lg={6} md={12} sm={12}>
                       <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                           <div className="page">
                               <div className="page_header">
                                   <h1 className="homeColor">Qayğı</h1>
                               </div>
                               <div className="page_description">
                                   <p className="homeColor">
                                       Onlar sizin ailənizdir.<br/>
                                       Ailənizə ən gözəl qayğını vermək sənin seçimindir<br/>
                                       Ailəniz üçün...
                                   </p>
                               </div>
                               <div className="page_selectBtn">
                                   <Link to="." className="btn homeBorder">
                                       <span className="homeColor">Birini seç <MdArrowForwardIos /></span>
                                       <div className="btn_blobs">
                                           <div className="homeBackColor"></div>
                                           <div className="homeBackColor"></div>
                                           <div className="homeBackColor"></div>
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
                            <div className="pageContent">
                                <div className="pageContent_btn">
                                    <img src={img1} alt="img" />
                                </div>
                                <div className="pageContent_btn">
                                    <img src={img2} alt="img" />
                                </div>
                                <div className="pageContent_btn">
                                    <img src={img3} alt="img" />
                                </div>
                                <div className="pageContent_btn">
                                    <img src={img4} alt="img" />
                                </div>
                            </div>
                        </Animated>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}
export default Home;