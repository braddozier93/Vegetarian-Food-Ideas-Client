import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';//use of bootstrap is same as our login component. these forms contain the same info, but differ only in their titles and the action they initiate with our server when a successful use account is made or processed
import APIURL from './../helpers/Environment';

const Signup = (props) => {
    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');//we've added username and password to our state. these state variables will allow us...
    //const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');//to respond to and control the display of teh user-typed info into the input fields in our form we return from this component

    const handleSubmit = (event) => {//we're taking in an event, adn we are preventing default, which in this instance will prevent our page from refreshing when we submit the form
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {//sending a fetch request to the endpoint determined in our server, that is where we go to signup. this endpoint is determined by whatever back end you are using. it is declared in your 'apicontroller' controller
            method: 'POST',//the method of the fetch is a POST
            body: JSON.stringify({userName: username, userName: username, userName: username, userName: username, password: password}),//we're including a body with our state info set as user. this again correlates to the backend. this has to match what the backend is expecting.
            headers: new Headers({
                'Content-Type': 'application/json'//include the header 'content-type', this lets our server know what type of info we are sending to it, so it can decide if it can handle it and what to do with it.
            })
        }).then(
            (response) => response.json()//resolving the promise from the fetch and calling .json(), allowing us to turn the response into JSON when it resolves.
        ).then((data) => {
            props.updateToken(data.sessionToken)//resolving the .json()promise, and taking the data we get back from the server and then calling our updateToken function with the sessionToken we get back in the data object
        })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>{/**  Just like with our 'onChange' event handler built into the JSX, 
             * we are using an 'onSubmit' event handler in our Form bootstrap component.  The onSubmit handler will
             *  listen to and respond to a 'submit' even with our handleSubmit callback.  Notice again, that we 
             * don't use parentheses within the curly braces, because we aren't calling the callback functions 
             * ourselves--that's handled by the onSubmit handler. */}
                <FormGroup>
                    <Label htmlFor="username">First Name</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />{/**once again, bc our input fields are tied to the state variables, which currently never change, their text content will be static as well */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Last Name</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />{/**once again, bc our input fields are tied to the state variables, which currently never change, their text content will be static as well */}
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />{/**once again, bc our input fields are tied to the state variables, which currently never change, their text content will be static as well */}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="username">Email</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} />{/**once again, bc our input fields are tied to the state variables, which currently never change, their text content will be static as well */}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>{/**add onChange attributes to our JSX aloowing us to handle any input changes to the form...also in username */}
                    {/**We have defined two functions in-line with our JSX.  Each of these functions is a callback
                     *  responding to the onChange event listener we've inserted into the input fields.  Just as with 
                     * vanilla JS we saw in gold badge, these callback functions are called by the event handler, 
                     * not by us.  Thus, we never have to call these functions in our code, just defined them.  
                     * These callback functions, being called within the onChange event handlers, are called with 
                     * an 'event' object as an argument.  This is default behavior to any event handler. 
                     *  Digging into these event objects let us grab hold of the input data the user has typed. */}
                </FormGroup>
                <Button type="submit" color="info">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;