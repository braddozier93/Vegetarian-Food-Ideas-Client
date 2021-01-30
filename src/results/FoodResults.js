import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';
import APIURL from './../helpers/Environment';
import '../App.css';
//import {Button} from '@material-ui/core';



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
                    <Col sm="12">
                <Card id="card" key={index} body outline color="secondary">
                    <CardTitle id="cardTitle">{food.nameOfFood}</CardTitle>
                    <CardImg id="resultimage" src={food.image} alt="Card image cap" />
                    <CardBody>
                    <CardSubtitle style={{paddingBottom:'10px'}}>Link to Recipe/Restaurant:  <a target="_blank" rel="noopener noreferrer" href={food.linkToRecipe.substring(0,8) === "https://" ? food.linkToRecipe : "https://" + food.linkToRecipe}>{food.linkToRecipe}</a></CardSubtitle>
                    <CardSubtitle style={{paddingBottom:'10px'}}>Category:  {food.category}</CardSubtitle>
                    <CardSubtitle style={{paddingBottom:'5px'}}>Cuisine:  {food.cuisine}</CardSubtitle>
                    <CardText>Notes:  {food.descriptionOfFood}</CardText>
                    <CardText>My Rating:  {food.rating}</CardText>
                        <div id="cardbuttons">
                        <Button onClick={() => {props.editUpdateFood(food); props.updateOn()}}>Update My Food</Button>
                        <Button id="deleteMe" onClick={() => {deleteFood(food)}}>Delete My Food</Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                </Row>
            )
        })
    }

    return(
        <div>
            <h3 id="resultsheading">Vegetarian Meal Ideas For Carnivorous Cravings</h3>
            <div>
                {FoodMapper()}
            </div>
        </div>
    )
}

export default FoodResults;