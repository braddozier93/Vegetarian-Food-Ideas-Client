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
                <img id="foodImages" src={'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/06/bombay-potato.jpg?itok=bDjy0bZr'}/>
                <img id="foodImages" src={'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/08/saag-paneer.jpg?itok=qqVPVReX'}/>
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