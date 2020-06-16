import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import FoodResults from './FoodResults';
import FoodEdit from './FoodEdit';
import FoodCreate from './FoodCreate';
import APIURL from './../helpers/Environment';

const FoodIndex = (props) => {
    const [foods, setFoods] = useState([]);//add state variables to our WorkoutIndex component
    const [updateActive, setUpdateActive] = useState(false);//used to conditionally display our WorkoutEdit component.Boolean..only active(true) when a user clicks the update button within a row of our WorkoutTable component
    const [foodToUpdate, setFoodToUpdate] = useState({}); //used as a prop by WorkoutEdit. when the user clicks on a row of the workoutTable, this will be switched from an empty object to the workout object displayed by the rown the user clicked on. WorkoutEdit will then use this object to request updated workout details to the appropriate workout in our database.
    const [createActive, setCreateActive] = useState(false);
    const [foodToCreate, setFoodToCreate] = useState({});

    const editUpdateFood = (food) => {//it updates our workoutToUpdate state variable based on the input to this function
        setFoodToUpdate(food);
        console.log(food);
    }  
    const updateOn = () => {//used to togglew our workoutEdit display. On will be passed a prop to WorkoutTable, which will use the function when the user clicks on the Update button. 
        setUpdateActive(true);
    }
    const updateOff = () => {//used to toggle our WorkoutEdit display. Off will used by WorkoutEdit when we have completed or cancelled the workout edit process.
        setUpdateActive(false)
    }
    const createOn = () => {
        setCreateActive(true);
    }
    const createOff = () => {
        setCreateActive(false);
    }
             
    const fetchFoods = () => {
        fetch(`${APIURL}/food`, {//fetching our workouts from the server
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
        <Container>
            <Row>
                <Col md="1">
                    <Button type="button" onClick={createOn}>Add Food Item</Button>
                    {createActive ? <FoodCreate foodToCreate={foodToCreate}
                createOff={createOff} token={props.token} fetchFoods={fetchFoods}/> : <></>}
                    {/* <FoodCreate /> */}
                 </Col>
                 <Col md="11">{/**adding props to our FoodResults call//we later modified our WorkoutResults component so that FoodEdit will be displayed at appropriate times */}
                    <FoodResults foods={foods} editUpdateFood={editUpdateFood} updateOn={updateOn} fetchFoods={fetchFoods} token={props.token} />
                 </Col>
                {updateActive ? <FoodEdit foodToUpdate={foodToUpdate}
                updateOff={updateOff} token={props.token} fetchFoods={fetchFoods}/> : <></>}
            </Row>
        </Container>
    )
};


export default FoodIndex;