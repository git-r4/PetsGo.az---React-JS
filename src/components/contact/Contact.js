import { Container, Row, Col } from "react-bootstrap";
import {Animated} from "react-animated-css";
import emailjs from '@emailjs/browser';
import {useEffect, useState} from 'react';

import '../../style/styles.scss';
import '../../style/responsive.scss';
import './contact.scss';
import lakiImg from '../../images/laki/svg/laki-call.svg';
import {clear} from "@testing-library/user-event/dist/clear";

const Contact = (props) => {
    props.backColor.style.backgroundColor = '#623D5A';

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const [checkName, setCheckName] = useState(false);
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkMessage, setCheckMessage] = useState(false);

    const [formSended, setFormSended] = useState(false);

    const allInfo = {
        name: nameValue,
        email: emailValue,
        message: messageValue
    }

    const checking = () => {
        if(allInfo.name.length < 2 || allInfo.name === '' || !isNaN(allInfo.name)){
            setCheckName(true);
        }else{
            setCheckName(false);
        }

        if(allInfo.email === '' || allInfo.email.length < 5){
            setCheckEmail(true);
        }else{
            setCheckEmail(false);
        }

        if(allInfo.message === '' || allInfo.message.length < 5){
            setCheckMessage(true);
        }else{
            setCheckMessage(false);
        }
    }

    const sendFormInfo = (e) => {
        e.preventDefault();
        if(checkName === false && checkEmail === false && checkMessage === false){
            emailjs.sendForm("service_2tc1nfi", "template_cgxt1cc", e.target, 'a4kl4NwzKvq9Dw0jb')
                .then(result => console.log(result))
                .catch(error => console.log(error))
            setNameValue(nameValue => '');
            setEmailValue(emailValue => '');
            setMessageValue(messageValue => '');
            setFormSended(true);
        }else{
            console.log('error');
        }
    }
    return(
        <div className="pageTop pageCenter contactRHeight pageTopForAll">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                            <div className="page">
                                <div className="page_header">
                                    <h1 className="aboutColor">??laq??</h1>
                                </div>
                                <form id="formSendGmail"
                                      className="formStyle"
                                      onSubmit={sendFormInfo}>
                                    <label htmlFor="element" className="form-label">
                                        Ad v?? Soyad
                                        <input name="name"
                                               type="text"
                                               value={nameValue}
                                               onChange={(e) => setNameValue(e.target.value)}
                                               placeholder="Ad v?? Soyad"/>
                                        <span>{checkName ? 'Ad??n??z?? v?? Soyad??n??z?? yaz??n' : ''}</span>
                                    </label>
                                    <label htmlFor="element" className="form-label">
                                        E-po??t ??nvan??
                                        <input
                                            name="email"
                                            type="email"
                                            value={emailValue}
                                            onChange={(e) => setEmailValue(e.target.value)}
                                            placeholder="E-po??t ??nvan??"/>
                                        <span>{checkEmail ? 'Email-inizi ??lav?? edin' : ''}</span>
                                    </label>
                                    <label htmlFor="element" className="form-label">
                                        A????qlama
                                        <textarea
                                            name="message"
                                            type="text"
                                            value={messageValue}
                                            onChange={(e) => setMessageValue(e.target.value)}
                                            placeholder="A????qlama"></textarea>
                                        <span>{checkMessage ? 'Mesaj yaz??n' : ''}</span>
                                    </label>
                                    <div>
                                        <button onClick={checking} type="submit">G??nd??r</button>
                                        <h3 style={formSended ?
                                            {display: 'block'} :
                                            {display: 'none'}}>G??nd??rildi</h3>
                                    </div>
                                </form>
                            </div>
                        </Animated>
                    </Col>
                    <Col lg={6} className="forMobileDisplayNone">
                        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}>
                            <div className="lakiBoxService">
                                <img src={lakiImg} alt="serviceImage"/>
                            </div>
                        </Animated>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact;