import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { NavbarData } from "../navbarData/NavbarData";
import { Container, Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import {useEffect, useState} from "react";

import logoPetsgo from '../../images/navLogo/logo 3.svg';

import './navbar.scss';
import '../../style/responsive.scss';
import '../../style/animate.min.css';

import NavbarM from "../mobileNavbar/NavbarM";

const Navbar = () => {

    const renderNavlinks = NavbarData.map(({path, name}) => {
            return(
                <NavLink
                    key={path}
                    to={path}
                    className="navLink"
                >
                    <h4>{name}</h4>
                </NavLink>
            )
    });

    const renderNavlinkForMobile = NavbarData.map(({icon, path}) => {
        return(
            <NavLink
                className='navLinkMob'
                key={path}
                to={path}>
                <span className="navLinkMob_icon">{icon}</span>
            </NavLink>
        )
    })

    let backColor = document.querySelector("body");

    const renderComponents = NavbarData.map(({path, Component}) => {
       return(
           <Route path={path} key={path} element={<Component backColor={backColor} />}/>
       )
    });

    const [navAnimated, setNavAnimated] = useState(false);
    useEffect(() => {

        const animate = setTimeout(() => setNavAnimated(true), 10);

        return () => {
            clearTimeout(animate)
            console.log('animate end');
        }
    }, []);

    return(
        <BrowserRouter>
            <div className={navAnimated ? "navbar animatedNavbar" : "navbar"}>
                <Container>
                    <Row>
                        <Col className="navCenter">
                            <div className="navbarContainer">
                                <div className="navbarContainer_logo">
                                    <Link to='/' className="navbarContainer_logo_img">
                                        <img src={logoPetsgo} alt="logo"/>
                                    </Link>
                                </div>
                                <div className="navbarContainer_links">
                                    {renderNavlinks}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <NavbarM renderNavlinkForMobile={renderNavlinkForMobile}/>
            <Routes>
                {renderComponents}
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;