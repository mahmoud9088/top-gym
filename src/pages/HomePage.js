import React, { useEffect } from 'react'
import Exercises from '../components/Exercises'
import HomeSlider from '../components/HomeSlider'

const HomePage = ({
  bodyParts,
  exercises,
  setExercises,
  filterByBodyPart,
  setFilterByBodyPart,
}) => {
  return (
    <>
      <HomeSlider />
      <Exercises
        bodyParts={bodyParts}
        exercises={exercises}
        setExercises={setExercises}
        filterByBodyPart={filterByBodyPart}
        setFilterByBodyPart={setFilterByBodyPart}
      />
    </>
  )
}

export default HomePage
