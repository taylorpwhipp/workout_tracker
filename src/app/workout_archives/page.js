'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Flex, Heading, Text, Card, Button, Separator} from '@radix-ui/themes';
import axios from 'axios';

const WorkoutsPage = () => {
const router = useRouter(); // Initialize the router
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch workouts 
    axios.get('http://localhost:8000/workouts/')
      .then(response => setWorkouts(response.data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);


  return (
    <main className="flex min-h-screen flex-col justify-between p-4">
    <Container size="4">
      <Flex direction="column" gap="4">
        <Heading size="2">Workouts</Heading>
        {workouts.map(workout => (
          <Flex key={workout.id} direction="column" gap="2">
            <Card style={{ maxWidth: 600 }}>
            <Text  as="div" size="2" weight="bold">{new Date(workout.date_created).toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</Text>
            {workout.exercises.map((exercise, index) => (               
              <Flex key={index} gap="2" align="start">
                <Text as="div" size="2" color="gray" style={{ flex: 1, textAlign: 'left' }}>{exercise.exercise_name}</Text>
                <Text as="div" size="2" color="gray" style={{ flex: 1, textAlign: 'left' }}>{exercise.format}</Text>
                <Text as="div" size="2" color="gray" style={{ flex: 1, textAlign: 'left' }}>{exercise.repetition}</Text>
            </Flex>
            ))}
            </Card>
          </Flex>
    
        ))}
            <Button style= {{width: '50%' }} onClick={() => router.push('/')}>Return Home</Button>
      </Flex>
    </Container>
    </main>
  );
};

export default WorkoutsPage;

