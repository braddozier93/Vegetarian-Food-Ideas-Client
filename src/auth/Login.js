import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';//import lots of bootstrap components, many of which are related to bootstrap form. 
import APIURL from './../helpers/Environment';

const Login = (props) => {
    const [username, setUsername] = useState('');//creating state variables 'username' and 'password' which will be fed information from the input fields in our form.
    const [password, setPassword] = useState('');//we want these to be contolled by React, as oppsed to grabbing these values of the input fields without using state variables. to avoid possible bugs
    //userName
    //password
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`,{
            method: 'POST',
            body: JSON.stringify({userName: username, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return (
    <div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />{/**the value of the input fields is ultimately controlled by react. Because this component doesn't implement any use for setUsername or setPassword, the input fields will be stuck with no text inside, even if the user types them in */}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
            </FormGroup>
            <Button type="submit" color="success">Login</Button>
        </Form>
    </div>
    )
}

export default Login;