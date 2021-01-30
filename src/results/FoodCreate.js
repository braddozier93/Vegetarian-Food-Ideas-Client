import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from './../helpers/Environment';

const FoodCreate = (props) => {
    const [nameOfFood, setNameOfFood] = useState('');
    const [image, setImage] = useState('');
    const [linkToRecipe, setLinkToRecipe] = useState('');
    const [category, setCategory] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [descriptionOfFood, setDescriptionOfFood] = useState('');
    const [rating, setRating] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const logObj = {
            nameOfFood: nameOfFood,
            image: image,
            linkToRecipe: linkToRecipe,
            category: category,
            cuisine: cuisine,
            descriptionOfFood:descriptionOfFood,
            rating: rating
        }

        fetch(`${APIURL}/food`, {
            method: 'POST',
            body: JSON.stringify(logObj),//we need the exact object. the server expects to find the properties of logObj, so we must provide them
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setNameOfFood('');
            setImage('');
            setLinkToRecipe('');
            setCategory('');
            setCuisine('');
            setDescriptionOfFood('');
            setRating('')
            props.fetchFoods();//create fetchFoods in the index
            props.createOff();
        })
    }
        return(
            <> 
            <Modal isOpen={true}>
                <ModalHeader>Add a New Food Item</ModalHeader>
                <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="nameOfFood" />
                        <Label for="nameOfFood">Name of Food Item</Label>
                        <Input name="nameOfFood" value={nameOfFood} onChange={(e) => setNameOfFood(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image" />
                        <Label for="image">Add Image URL for Food Item</Label>
                        <Input name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="linkToRecipe" />
                        <Label for="linkToRecipe">Add Link to Recipe or Restuarant</Label>
                        <Input name="linkToRecipe" value={linkToRecipe} onChange={(e) => setLinkToRecipe(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category" />
                        <Label for="exampleSelect">Select a Category</Label>
                        <Input type="select" name="category" id="exampleSelect" value={category} onChange={(e) => setCategory(e.target.value)} >
                            <option>Apps</option>
                            <option>Sides</option>
                            <option>Soups</option>
                            <option>Salads</option>
                            <option>Sandwiches</option>
                            <option>Entrees</option>
                            <option>Desserts</option>
                            <option>Other</option>
                         </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cuisine" />
                        <Label for="exampleSelect">Select a Cuisine Type</Label>
                        <Input type="select" name="cuisine" id="exampleSelect" value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
                            <option>American</option>
                            <option>Mexican</option>
                            <option>Indian</option>
                            <option>Thai</option>
                            <option>Peruvian</option>
                            <option>German</option>
                            <option>European</option>
                            <option>Asian</option>
                            <option>South American</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="descriptionOfFood" />
                        <Label for="descriptionOfFood">Notes</Label>
                        <Input name="descriptionOfFood" value={descriptionOfFood} onChange={(e) => setDescriptionOfFood(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category" />
                        <Label for="exampleSelect">Rate My Meal</Label>
                        <Input type="select" name="rating" id="exampleSelect" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                         </Input>
                    </FormGroup>
                    <Button color="success" type="submit">Click to Submit</Button>
                </Form>
                </ModalBody>
            </Modal>
            </>
    )
}                      //the value of the input fields is defined by the state of this component. hence, without a way to change our state, the input values are locked. 
                        //we have a submit button that will need an event handler
export default FoodCreate;