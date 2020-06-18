import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
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
                    {/*<Button type="button" onClick={createOn} style={{width:'200px',marginTop: '100px'}}>Search by Category</Button>
                    <Button type="button" onClick={createOn} style={{width:'200px',marginTop: '100px'}}>Search by Cuisine</Button>  */}             
                 </Col>
                 <Col md="6">
                    <FoodResults foods={foods} editUpdateFood={editUpdateFood} updateOn={updateOn} fetchFoods={fetchFoods} token={props.token} />
                 </Col>
                {updateActive ? <FoodEdit foodToUpdate={foodToUpdate}
                updateOff={updateOff} token={props.token} fetchFoods={fetchFoods}/> : <></>}
                <Col md="3">
                </Col>
            </Row>
        </Container>
    )
};


export default FoodIndex;