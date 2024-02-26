'use client'

import { Container, Flex, Select} from "@radix-ui/themes";
import React, { useState } from 'react';

export default function ExerciseCard(props) {
  const [selectedFormat, setSelectedFormat] = useState('');
  const [options, setOptions] = useState([]);
  const [exerciseName,setExerciseName]= useState('');



  const handleFormatChange = (selectedValue) => {
    setSelectedFormat(selectedValue);

    // Set options based on the selected format
    if (selectedValue === 'Reps') {
      setOptions([6, 8, 10, 12]);
    } else if (selectedValue === 'Time') {
      setOptions(['30s', '1m', '2m', '5m']);
    } else {
      setOptions([]);
    }
  };

  const { data, onExerciseSave } = props;
  console.log(props)
  const handleSaveExercise = (e)=>{
    let exerciseDeets = {'exercise_name':exerciseName,'exercise_format':selectedFormat,'exercise_duration': e} 
    onExerciseSave(exerciseDeets)
  }

  const renderSelectGroup = (label, items) => (
    <Select.Group style={{ flex: 1 }}>
      <Select.Label>{label}</Select.Label>
      {items.map((item) => (
        <Select.Item key={item} value={item}>
          {item}
        </Select.Item>
      ))}
    </Select.Group>
  );

  return (
    <main>
      <Container size="1" >
        <Flex direction="column" gap="3">
          <Flex direction="row" gap="3">
            <Container  style={{  flex: 1}}>
            <Select.Root onValueChange={(e)=> setExerciseName(e)}>
              <Select.Trigger placeholder="Select an exercise" />
              <Select.Content>
                {renderSelectGroup('Exercise', data.map((exercise) => exercise.name))}
              </Select.Content>
            </Select.Root>
            </Container>

            <Container style={{  flex: 1}}>
            <Select.Root onValueChange={(e) => handleFormatChange(e)}>
              <Select.Trigger placeholder="Select a format" />
              <Select.Content>
                {renderSelectGroup('Format', ['Reps', 'Time'])}
              </Select.Content>
            </Select.Root>
            </Container>

            {selectedFormat && (
              <Container style={{  flex: 1}}>
              <Select.Root onValueChange={(e)=> handleSaveExercise(e)}>
                <Select.Trigger placeholder={`Select ${selectedFormat}`} />
                <Select.Content>
                  {renderSelectGroup(selectedFormat, options)}
                </Select.Content>
              </Select.Root>
              </Container>
            )}
          </Flex>
        </Flex>
      </Container>
    </main>
  );
}