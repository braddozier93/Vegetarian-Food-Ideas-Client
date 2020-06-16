import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import APIURL from './../helpers/Environment';

const FoodResults = (props) => {
    const deleteFood = (food) => {
        fetch(`${APIURL}/${food.id}`, {
            method: 'DELETE', 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchFoods())
    }

    const FoodMapper = () => {
        return props.foods.map((food, index) => {
            return (
                <Card key={index}>
                    <th scope="row">{food.id}</th>
                    <CardTitle>{food.nameOfFood}</CardTitle>
                    <CardImg top width="200px" height="auto" src={food.image} alt="Card image cap" />
                    <CardBody>
                    <CardSubtitle><a href={food.linkToRecipe}></a></CardSubtitle>
                    <CardSubtitle>{food.category}</CardSubtitle>
                    <CardSubtitle>{food.cuisine}</CardSubtitle>
                    <CardText>{food.descriptionOfFood}</CardText>
                    <CardText>{food.rating}</CardText>
                        <Button style={{color:'orange'}} onClick={() => {props.editUpdateFood(food); props.updateOn()}}>Update</Button>
                        <Button onClick={() => {deleteFood(food)}}>Delete</Button>
                    </CardBody>
                </Card>
            )
        })
    }

    return(
        <div>
            <h3>My Vegetarian Meal Ideas
            </h3>
            <div>
                {FoodMapper()}
            </div>
        </div>
    )
}

export default FoodResults;