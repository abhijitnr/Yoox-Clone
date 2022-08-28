import React from 'react';
import "./Footer.css";
import { EmailIcon, Icon } from '@chakra-ui/icons';
import { Checkbox, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";


function Footer() {
    const [value, setValue] = React.useState('1');
    return (
        <footer className='footer'>

            {/* Footer main div with 5 separete div */}
            <div className="footer_mainDiv">

                <div className='footer__fourDiv'>
                    <h1>new to yoox</h1>
                    <hr />
                    <p>Shopping guide</p>
                    <p>iPhone/iPad/Android</p>
                    <p>Browse all <br /> Designers</p>
                    <p>Browse all <br /> Categories</p>
                </div>

                <div className='footer__fourDiv'>
                    <h1>help</h1>
                    <hr />
                    <p>Shipping times & <br /> costs</p>
                    <p>Payments and web <br /> security </p>
                    <p>Product quality</p>
                    <p>Track your order</p>
                    <p>Returns & refunds</p>
                    <p>FAQs</p>
                    <p>Size Guide</p>
                </div>

                <div className='center__formDiv'>
                    <EmailIcon />
                    <h1>yoox news</h1>
                    <p>Sign up for the newsletter <br />
                        and discover the latest arrivals and <br /> promotions</p>
                    <Input placeholder='INSERT YOUR E-MAIL ADDRESS' />

                    <div className='gender__select'>
                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='row'>
                                <Radio value='1'>Women</Radio>
                                <Radio value='2'>Men</Radio>
                            </Stack>
                        </RadioGroup>
                    </div>
                    <Checkbox><p className='check__para'>I consent to receive YOOX <br /> newsletters via email. For further <br /> information, please consult the <br /> <span>Privacy Policy</span></p></Checkbox>

                    <button className='signup__botton'>SIGN UP</button>
                </div>

                <div className='footer__fourDiv'>
                    <h1>myoox</h1>
                    <hr />
                    <p>Login</p>
                    <p>My Orders</p>
                    <p>My Details</p>
                    <p>Dream Box</p>
                    <p>Premiere</p>
                </div>

                <div className='footer__fourDiv'>
                    <h1>about us</h1>
                    <hr />
                    <p>Company Info</p>
                    <p>Press</p>
                    <p>Affiliation</p>
                    <p>Careers</p>
                </div>

            </div>

            <hr />
            {/* Social media icon div */}
            <div className="social__media">

                <div className='social__media__icon'>
                    <p>connect with us</p>
                    <Icon as={FaFacebookF} />
                    <Icon as={BsTwitter} />
                    <Icon as={BsInstagram} />
                    <Icon as={BsYoutube} />
                    <Icon as={FaPinterestP} />
                    <Icon as={FaTiktok} />
                </div>

                <div className="download__iosAndroid">
                    <Icon as={FcSmartphoneTablet} />
                    <p>DOWNLOAD THE APP FOR iOS / ANDROID</p>
                </div>
            </div>
            <hr />

        </footer>
    )
}

export default Footer