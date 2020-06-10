import React, {useState} from 'react';
import {
    Navbar, 
    NavbarBrand,
} from 'reactstrap';

const Sitebar = (props) => {
    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Vegetarian Food Ideas For the Carnivore</NavbarBrand>
        </Navbar>
    )
}

export default Sitebar;