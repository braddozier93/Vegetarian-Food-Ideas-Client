import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';
import APIURL from './../helpers/Environment';

const FoodResults = (props) => {
    const deleteFood = (food) => {
        fetch(`${APIURL}/food/${food.id}`, {
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
                <Row>
                    <Col sm="8">
                <Card key={index} body outline color="secondary">
                    <th scope="row">{food.id}</th>
                    <CardTitle>{food.nameOfFood}</CardTitle>
                    <CardImg top width="200px" height="300px" src={food.image} alt="Card image cap" />
                    <CardBody>
                    <CardSubtitle>Link to Recipe/Restaurant: <a href={food.linkToRecipe} target="blank">{food.linkToRecipe}</a></CardSubtitle>
                    <CardSubtitle>Category: {food.category}</CardSubtitle>
                    <CardSubtitle>Cuisine: {food.cuisine}</CardSubtitle>
                    <CardText>Notes: {food.descriptionOfFood}</CardText>
                    <CardText>My Rating: {food.rating}</CardText>
                        <Button style={{color:'orange'}} onClick={() => {props.editUpdateFood(food); props.updateOn()}}>Update My Food</Button>
                        <Button onClick={() => {deleteFood(food)}}>Delete My Food</Button>
                    </CardBody>
                </Card>
                </Col>
                </Row>
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