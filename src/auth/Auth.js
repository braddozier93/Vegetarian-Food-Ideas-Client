import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';

const Auth = (props) => {//add image above Container and a background for the entire auth.js
    return(
        <Container className="auth-container">
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