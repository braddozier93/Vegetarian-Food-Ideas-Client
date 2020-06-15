import React, {useState} from 'react';
import {
    Navbar, 
    NavbarBrand,
} from 'reactstrap';

const Sitebar = (props) => {//make this a header navbar with navbarBrand on left and a signup/sign in toggle or dropdown with submit?
    return (
        <Navbar color="warning" light expand="md">
            <NavbarBrand href="/">Vegetarian food ideas for the carvnivore</NavbarBrand>
        </Navbar>
    )
}

export default Sitebar;