import React, {useState} from 'react';
import {
    Navbar, 
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem, 
    Button
} from 'reactstrap';

const Sitebar = (props) => {//make this a header navbar with navbarBrand on left and a signup/sign in toggle or dropdown with submit?
    
    const [isOpen, setIsOpen] = useState(false);//isOpen is just a boolean value, set in our state
    const toggle = () => {//building out our toggle function
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return (
        <Navbar style={{backgroundColor: '#e8f8f5'}} light expand="md">
            <NavbarBrand href="/">Vegetarian Meal Ideas</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clearToken}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;