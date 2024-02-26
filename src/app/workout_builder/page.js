'use client'

import "./workout_builder.css";
import ExerciseCard from "../exercise_card/exercise_card";
import { Container, Button, Flex } from "@radix-ui/themes";
import { BookmarkFilledIcon, PlusIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react';



export default function WorkoutBuilder(props) {
  const [workout,setWorkOut]= useState([])
  
  const upDateWorkOut = (exercise) => {
    setWorkOut((prevWorkout) => [...prevWorkout, exercise]);
  }

  const [componentInstances, setComponentInstances] = useState([<ExerciseCard key={0} data={props.data} onExerciseSave={upDateWorkOut}  />]);

  const addComponent = () => {
    // Create a new instance of the component with a unique key
    const newKey = componentInstances.length;
    const newInstance = <ExerciseCard key={newKey} data={props.data} onExerciseSave={upDateWorkOut} />;
    
    // Update the state with the new instance
    setComponentInstances([...componentInstances, newInstance]);
  }

  async function postWorkout(url = '', data = {}) {
    
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data)
    });
    
    const json = await response.json();
    return json
 }
  
  async function getresponse (){
    postWorkout('http://localhost:8000/create_workout/',workout).then(
      res => {
      alert('Workout Saved')
      })  
          // this ensures we get a new Exercise Dropdown with nothing selected by generating a unique key 
          setComponentInstances([
          <ExerciseCard key={new Date().getTime()} data={props.data} onExerciseSave={upDateWorkOut} />,
        ]);
        // console.log("***bing bing**",componentInstances)
  }
  
  return (
    <main>
      <Container size="3">
        <Flex direction="column" gap="3">
          {/* <ExerciseCard key={regenerateKey} data={props.data}/> */}
      {componentInstances}
         <Button onClick={addComponent}> 
          <PlusIcon/>Add Exercise
          </Button>
          <Button onClick={getresponse}>
            <BookmarkFilledIcon/>Save Workout
          </Button>
        </Flex>
      </Container>
      
    </main>
  );
}