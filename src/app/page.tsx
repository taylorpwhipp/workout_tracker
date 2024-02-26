import Image from "next/image";
import { Container, Flex, Heading, Text,Card } from "@radix-ui/themes";
// import DailyLog from "./workout_builder/page";
import ExerciseCard from "./exercise_card/exercise_card";
import DailyLog from "./workout_builder/page";
import WorkoutBuilder from "./workout_builder/page";


async function getData() {


  const resp = await fetch('http://127.0.0.1:8000/exercises/')
  const res = await fetch('http://127.0.0.1:8000/exercises/')
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
      const data = await getData()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="4">
        
        <Flex direction = "column" pb="4">
        <Heading>Workout Builder </Heading>
        <Text> Here you can make workouts with EAZZZZE</Text>
        </Flex>
        <Flex gap="4" direction="column">
          {/* <ExerciseCard data={data}/> */}
          <WorkoutBuilder data={data}/>

        </Flex>
      </Container>
      
    </main>
  );
}
