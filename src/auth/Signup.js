import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from './../helpers/Environment';

const Signup = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({firstName: firstname, lastName: lastname, userName: username, email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json() 
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input onChange={(e) => setFirstname(e.target.value)} name="firstname" value={firstname} />{/**once again, bc our input fields are tied to the state variables, which currently never change, their text content will be static as well */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input onChange={(e) => setLastname(e.target.value)} name="lastname" value={lastname} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" pattern="(?=.*[!@#$%^&*])(?=.*[a-z]).{4,}" placeholder="4 or More Characters & At Least 1 Special Character"value={username} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Enter Email Address"value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" minlength="5" placeholder="Password Must Be At Least 5 Characters In Length" value={password}/>
                </FormGroup>
                <Button type="submit" color="secondary" style={{marginLeft:'180px'}}>Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;