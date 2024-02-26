import { Container, Flex, Heading, Text, Button } from "@radix-ui/themes";
import WorkoutBuilder from "./workout_builder/page";

async function getData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData('http://localhost:8000/exercises/');
  // Keeping this for time being to evaluate how I want to filter/ grab data on the client vs server and filter
  // const muscle_groups = await getData('http://localhost:8000/muscle_groups/');
  // const large_groups =  [...new Set(muscle_groups.map(item=>item.large_group))]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Container size="4" grow="1">
        <Flex direction="column" pb="4" gap="3" align={"center"}>
          <Heading >Workout Builder</Heading>
          <Text>Select exercises from the dropdown to build your first workout</Text>
        </Flex>

        <Flex direction="row" gap="8">
          {/* Exercise Cards */}
          <Flex gap="4" direction="column" style={{ flex: 1 }}>
            <WorkoutBuilder data={data}/>
          </Flex>
          {/* Muscle Groups List */}
          {/* <Flex style={{ flex: 1 }} direction="column" gap="4"> 
            <Heading>Muscle Groups</Heading>
            {large_groups.map((item) => (
              <Button key={item} className="mb-2">{item}</Button>
            ))}
          </Flex> */}
        </Flex>
      </Container>

    </main>
  );
}
