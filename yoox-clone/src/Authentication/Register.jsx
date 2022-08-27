import React from 'react';
import "./Register.css";
import { Icon } from "@chakra-ui/react";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
function Register() {
    return (
        <div className="registerPage">

            {/* Register page header */}
            <div className="registerPage__header">
                <h1>myoox</h1>
                <h2>registration</h2>
                <p>Take advantage of a faster checkout and enjoy promotions for registered customers only</p>
                <h4>Discover all the benefits</h4>
            </div>

            {/* Resigter with social media */}
            <div className="facebookGoogle__part">
                <h4>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</h4>
                <div className="facebookGoogle">
                    <Icon as={ImFacebook} />
                </div>

                <div className="facebookGoogle">
                    <Icon as={FcGoogle} />
                </div>

            </div>

            {/* Form div */}
        </div>
    )
}

export default Register