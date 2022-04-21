import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaInstagram} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    OptionLink,
    OptionLink2,
    Icon,
    Container,
    List
} from './FooterStyles'

const Footer = () => {

    return (
        <Container>
            <div className="border-bottom pb-5 mb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-6 text-lg-center">
                            <ul className="list-unstyled nav-links nav-left mb-4 mb-lg-0">
                                <List><OptionLink to='/'>HOME</OptionLink></List>
                                &nbsp;&nbsp;
                                <List><OptionLink to='/Shop'>SHOP</OptionLink></List>
                                &nbsp;&nbsp;
                                <List><OptionLink to='/contact'>CONTACT</OptionLink></List>
                                &nbsp;&nbsp;
                                <List><OptionLink to='/about'>ABOUT US</OptionLink></List>
                                &nbsp;&nbsp;
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <ul>
                                <List><Icon rel="preconnect" to={{pathname: "https://github.com/natebrate"}}
                                          target="_blank"><FaGithub/></Icon></List>
                                <List><Icon rel="preconnect" to={{pathname: "https://github.com/natebrate"}}
                                                target="_blank"><FaInstagram/></Icon>
                                </List>
                                <List><Icon rel="preconnect" to={{pathname: "https://github.com/natebrate"}}
                                                target="_blank"><FaFacebook/></Icon>
                                </List>
                                <List><Icon rel="preconnect" to={{pathname: "https://github.com/Seaside-Development"}}
                                          target="_blank"><FaTwitter/></Icon></List>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
                        <OptionLink2 href="#" className="m-0 p-0">Seaside Development</OptionLink2>
                    </div>
                    <div className="col-lg-4 order-2 order-lg-1 mb-3 mb-lg-0">
                        <ul className="list-unstyled nav-links m-0 nav-left">
                            <List><OptionLink to='/'>Terms</OptionLink></List>
                            &nbsp;&nbsp;
                            <List><OptionLink to='/about'>About</OptionLink></List>
                            &nbsp;&nbsp;
                            <List><OptionLink to='/'>Privacy</OptionLink></List>
                            &nbsp;&nbsp;
                            <List><OptionLink to='/contact'>Contact</OptionLink></List>
                            &nbsp;&nbsp;
                            &nbsp;&nbsp;
                            <List>
                                <a aria-label='Admin Panel'
                                   target="_blank"
                                   rel="preconnect noreferrer"
                                   href="https://app.jetadmin.io/app/firebaseadmind/prod/page/firebase_carts_list">Admin</a>
                            </List>
                        </ul>
                    </div>

                    <div className="col-lg-4 text-lg-right order-3 order-lg-3">
                        <p className="m-0 text-muted"><small>&copy; 2022. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;
