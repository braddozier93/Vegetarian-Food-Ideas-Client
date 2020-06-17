import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from './../helpers/Environment';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
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
        <h1 style={{textAlign:"center"}}>Login</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />{/**the value of the input fields is ultimately controlled by react. Because this component doesn't implement any use for setUsername or setPassword, the input fields will be stuck with no text inside, even if the user types them in */}
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
            </FormGroup>
            <Button type="submit" color="secondary">Login</Button>
        </Form>
    </div>
    )
}

export default Login;