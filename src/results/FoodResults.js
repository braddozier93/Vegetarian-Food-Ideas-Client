import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';
//import {Link} from "react-router-dom";
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
                    <Col sm="12">
                <Card key={index} body outline color="secondary" style={{marginBottom:'10px'}}>
                    <CardTitle style={{textAlign:'center'}}>{food.nameOfFood}</CardTitle>
                    <CardImg top width="180px" height="180px" src={food.image} alt="Card image cap" />
                    <CardBody>
                    <CardSubtitle style={{paddingBottom:'10px'}}>Link to Recipe/Restaurant:<a target="_blank" href={"https://" + food.linkToRecipe}>{food.linkToRecipe}</a></CardSubtitle>
                    <CardSubtitle style={{paddingBottom:'10px'}}>Category: {food.category}</CardSubtitle>
                    <CardSubtitle>Cuisine: {food.cuisine}</CardSubtitle>
                    <CardText>Notes: {food.descriptionOfFood}</CardText>
                    <CardText>My Rating: {food.rating}</CardText>
                        <Button style={{color:'orange'}} onClick={() => {props.editUpdateFood(food); props.updateOn()}}>Update My Food</Button>
                        <Button style={{color:'orange', marginLeft:'171px'}}onClick={() => {deleteFood(food)}}>Delete My Food</Button>
                    </CardBody>
                </Card>
                </Col>
                </Row>
            )
        })
    }

    return(
        <div>
            <h3 style={{textAlign:'center',marginTop:'20px', marginBottom:'20px'}}>My Vegetarian Meal Ideas</h3>
            <div>
                {FoodMapper()}
            </div>
        </div>
    )
}

export default FoodResults;