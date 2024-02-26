import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ExerciseCard } from '../src/app/exercise_card'

test('ExerciseCard renders correctly', () => {
  const data = [
    { name: 'Exercise 1' },
    { name: 'Exercise 2' },
    // Add more exercises as needed
  ];

  const onExerciseSaveMock = jest.fn();

  render(<ExerciseCard data={data} onExerciseSave={onExerciseSaveMock} />);

  // Verify that the component renders properly
  expect(screen.getByPlaceholderText('Select an exercise')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Select a format')).toBeInTheDocument();

  // Trigger the format selection
  fireEvent.click(screen.getByPlaceholderText('Select a format'));
  fireEvent.click(screen.getByText('Reps'));

  // Verify that the third dropdown appears after selecting the format
  expect(screen.getByPlaceholderText('Select Reps')).toBeInTheDocument();

  // Trigger the exercise selection
  fireEvent.click(screen.getByPlaceholderText('Select an exercise'));
  fireEvent.click(screen.getByText('Exercise 1'));

  // Verify that the exercise is selected and the save function is called
  expect(screen.getByPlaceholderText('Select Reps')).toBeInTheDocument();
  fireEvent.click(screen.getByText('6'));

  expect(onExerciseSaveMock).toHaveBeenCalledWith({
    exercise_name: 'Exercise 1',
    exercise_format: 'Reps',
    exercise_duration: '6',
  });
});
