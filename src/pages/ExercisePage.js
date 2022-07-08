import React from 'react'
import ExerciseDetail from '../components/ExerciseDetail'

const ExercisePage = ({ exercises }) => {
  return (
    <>
      <ExerciseDetail exercises={exercises} />
    </>
  )
}

export default ExercisePage
