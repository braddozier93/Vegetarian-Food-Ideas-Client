import React, {useState} from 'react';
import {Modal, ModalHeader,ModalBody, Label, Input, Button, Form, FormGroup} from 'reactstrap';
import APIURL from './../helpers/Environment';

const FoodEdit = (props) => {
    const [editName, setEditName] = useState(props.foodToUpdate.nameOfFood);
    const [editIma, setEditIma] = useState(props.foodToUpdate.image);
    const [editLin, setEditLin] = useState(props.foodToUpdate.linkToRecipe);
    const [editCat, setEditCat] = useState(props.foodToUpdate.category);
    const [editCuis, setEditCuis] = useState(props.foodToUpdate.cuisine);
    const [editDesc, setEditDesc] = useState(props.foodToUpdate.descriptionOfFood);
    const [editRat, setEditRat] = useState(props.foodToUpdate.rating);

    const foodUpdate = (event, food) => {//foodUpdate takes two arguments. the 1st allows us to avoid a page reload, the 2nd is used to specify the food needing an update in our database
        event.preventDefault();
        fetch(`${APIURL}/food/${props.foodToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({nameOfFood: editName, image: editIma, linkToRecipe: editLin, category: editCat, cuisine: editCuis, descriptionOfFood: editDesc, rating: editRat}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {//we fetch all foods after completing the update, and turn off the FoodEdit visibility
            props.fetchFoods();
            props.updateOff();
         })
    }
    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit a food item</ModalHeader>
            <ModalBody>
                <Form onSubmit={foodUpdate}>{/**triggering the foodUpdate function when we submit the edit form */}
                    <FormGroup>
                        <Label htmlFor="name">Edit Link to Recipe/Restaurant:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Edit Link to Recipe/Restaurant:</Label>
                        <Input name="image" value={editIma} onChange={(e) => setEditIma(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="link">Edit Link to Recipe/Restaurant:</Label>
                        <Input name="link" value={editLin} onChange={(e) => setEditLin(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category">Edit Category:</Label>
                        <Input name="category" value={editCat} onChange={(e) => setEditCat(e.target.value)}>
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
                        <Label htmlFor="cuisine">Edit Cuisine Type:</Label>
                        <Input type="select" name="cuisine" value={editCuis} onChange={(e) => setEditCuis(e.target.value)}>
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
                        <Label htmlFor="descriptionOfFood">Edit Description:</Label>
                        <Input name="descriptionOfFood" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="rating">Edit Workout Rating:</Label>
                        <Input type="select" name="result" value={editRat} onChange={(e) => setEditRat(e.target.value)}>
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
                    <Button type="submit">Update Food</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default FoodEdit;