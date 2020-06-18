import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import './Auth.css';


const Auth = (props) => {//add image above Container and a background for the entire auth.js
    return(
        <Container className="auth-container">
            <h1 style={{textAlign:'center', marginTop:'50px', fontSize:'50px'}}>VEGHEAD</h1>
            <div class="images" style={{marginTop:'20px'}}>
                <img id="foodImages" src={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F04%2F27%2F4548470.jpg-copy.jpg&w=1200&c=sc&poi=face&q=85'}/>
                <img id="foodImages" src={'https://cookieandkate.com/images/2014/02/sweet-potato-and-black-bean-tacos-with-avocado-pepita-dip-2.jpg'}/>
                <img id="foodImages" src={'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/06/bombay-potato.jpg?itok=bDjy0bZr'}/>
                <img id="foodImages" src={'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/08/saag-paneer.jpg?itok=qqVPVReX'}/>
            </div>
            <h3 style={{textAlign:'center', marginTop:'30px'}}>Vegetarian Food Ideas For the Carnvivore</h3>
            <Row>
                <Col md="5" style={{padding:'20px 20px 30px 20px', border:'1px solid black', marginTop:'50px', marginBottom:'100px'}}>
                <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="2">

                </Col>
                <Col md="5" className="login-col" style={{padding:'20px 20px 20px 20px', border:'1px solid black', marginTop:'50px', marginBottom:'100px'}}>
                <Login updateToken={props.updateToken} />
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;