import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import FoodResults from './FoodResults';
import FoodEdit from './FoodEdit';
import FoodCreate from './FoodCreate';
import APIURL from './../helpers/Environment';

const FoodIndex = (props) => {
    const [foods, setFoods] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [foodToUpdate, setFoodToUpdate] = useState({}); 
    const [createActive, setCreateActive] = useState(false);
    const [foodToCreate, setFoodToCreate] = useState({});

    const editUpdateFood = (food) => {
        setFoodToUpdate(food);
        console.log(food);
    }  
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false)
    }
    const createOn = () => {
        setCreateActive(true);
    }
    const createOff = () => {
        setCreateActive(false);
    }
             
    const fetchFoods = () => {
        fetch(`${APIURL}/food`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
            )
        }).then((res) => res.json())
        .then((logData) => {
            setFoods(logData.logs);
            console.log(logData);
        })
    };
        
    useEffect(() => {
        fetchFoods();
    }, [])



    return(
        <Container id="container">
            <Row>
                <Col md="3">
                    <Button type="button" onClick={createOn} style={{width:'200px',marginTop:'250px'}}>Add Food Item</Button>
                    {createActive ? <FoodCreate foodToCreate={foodToCreate}createOff={createOff} token={props.token} fetchFoods={fetchFoods}/> : <></>}
                
                    {/*
                    <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleSelect">Search by Cuisine Type</Label>
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
                    </Form>    
                    */}
                        
                </Col>
                 <Col md="6">
                    <FoodResults foods={foods} editUpdateFood={editUpdateFood} updateOn={updateOn} fetchFoods={fetchFoods} token={props.token} />
                 </Col>
                {updateActive ? <FoodEdit foodToUpdate={foodToUpdate}
                updateOff={updateOff} token={props.token} fetchFoods={fetchFoods}/> : <></>}
                <Col md="3">
                {/* <Form style={{marginTop: '225px'}}>
                    <FormGroup style={{marginTop: '75px'}}>
                        <Label htmlFor="category" />
                        <Input type="select" name="category" id="exampleSelect"  >
                            <option>Apps</option>
                            <option>Sides</option>
                            <option>Soups</option>
                            <option>Salads</option>
                            <option>Sandwiches</option>
                            <option>Entrees</option>
                            <option>Desserts</option>
                            <option>Other</option>
                         </Input>
                         <Button>Search by Category</Button>
                    </FormGroup>
                    </Form> */}
                </Col>
            </Row>
        </Container>
    )
};


export default FoodIndex;