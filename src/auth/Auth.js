import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import './Auth.css';


const Auth = (props) => {//add image above Container and a background for the entire auth.js
    return(
        <Container className="auth-container">
            <h1 id="welcomeHeading">VEG-HEAD</h1>
            <div class="images">
                <img id="foodImages" src={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F04%2F27%2F4548470.jpg-copy.jpg&w=1200&c=sc&poi=face&q=85'}/>
                <img id="foodImages" src={'https://cookieandkate.com/images/2014/02/sweet-potato-and-black-bean-tacos-with-avocado-pepita-dip-2.jpg'}/>
                <img id="foodImages" src={'https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU1fHx2ZWdldGFyaWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}/>
                <img id="foodImages" src={'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dmVnZXRhcmlhbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}/>
            </div>
            <h3 id="welcomeSubheading">Vegetarian Food Ideas For the Carnvivore</h3>
            <Row>
                <Col md="5" className="signin-col">
                <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="2">

                </Col>
                <Col md="5" className="login-col">
                <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;