import React from 'react';
import "./Register.css";
import { Checkbox, Icon, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";


function Register() {
    const [value, setValue] = React.useState('1');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

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
            <div className="registerForm">
                <h4>OR WITH YOUR EMAIL</h4>
                <form onSubmit={handleSubmit}>
                    {/* for first name */}
                    <div className="inputs">
                        <Stack spacing={5}>
                            <Input placeholder='FIRST NAME*' size='lg' />

                            <Input placeholder='LAST NAME*' size='lg' />

                            <Input placeholder='E-MAIL*' size='lg' />

                            <Input placeholder='PASSWORD*' size='lg' />
                        </Stack>
                    </div>
                    {/* for radio button */}
                    <div className="gender__inputs">
                        <p>Personalize your shopping experience.</p>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='row'>
                                <Radio value='1'>Female</Radio>
                                <Radio value='2'>Male</Radio>
                            </Stack>
                        </RadioGroup>
                    </div>

                    <div className="dateOfBirth">
                        <p>If you are over 18 years old, celebrate your birthday with us: We have a surprise for you.</p>

                        <Input placeholder='DATE OF BIRTH' size='lg' />

                        <i>I declare that I have read and accept the MYOOX Terms and Conditions of Use</i>
                    </div>

                    <div className="checkedBox">
                        <Checkbox><p className='check__para'>I agree to the use of my personal data in order to be updated on new arrivals, informed about exclusive items and contacted as part of targeted marketing initiatives related to services offered by YOOX.
                            By analyzing my personal data, order history and browsing habits, YOOX can improve my shopping experience with suggestions that correspond to my interests. <br /> <span>For further information, please consult the Privacy Policy.</span></p></Checkbox>
                    </div>

                    <div className='register__botton'>
                        <button>REGISTER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register