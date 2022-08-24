import { Link } from "react-router-dom";
import "./Navbar.css";
import { Search2Icon, StarIcon, UnlockIcon } from "@chakra-ui/icons";
import { Input, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="navbar">

            <div className="top">
                <div className="empty"></div>
                <div className="top_left">
                    <p>United States</p>
                    <p>Customer Care</p>
                </div>

                <div className="top_middle">
                    <p>FREE STANDARD SHIPPING ON ORDERS OVER $200</p>
                </div>

                <div className="top_right">
                    <p>Register</p>
                    <p>Login</p>
                </div>
                <div className="empty"></div>
            </div>

            <div className="middle">
                <div className="empty"></div>
                <div className="middle_left">
                    <Link to="/">WOMEN</Link>
                    <Link to="/men">MEN</Link>
                    <Link to="/kids">KIDS</Link>
                    <Link to="/design+art">DESIGN+ART</Link>
                </div>

                <div className="middle_middle">
                    <img src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" alt="YOOX" />
                </div>

                <div className="middle_right">
                    <Search2Icon onClick={onOpen} />
                    {/* modal insert */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalCloseButton />
                            <ModalFooter>
                                <Input placeholder="Search..." />
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    {/* modal end */}
                    <StarIcon />
                    <UnlockIcon />
                </div>
                <div className="empty"></div>
            </div>

        </div>
    )
}

export default Navbar;