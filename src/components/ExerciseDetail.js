import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const ExerciseDetail = ({ exercises }) => {
  const { id } = useParams()
  console.log('id', id)
  return (
    <Box>
      {exercises.map((exercise) => {
        if (exercise.id === id) {
          return <img src={exercise.gifUrl} />
        }
      })}
    </Box>
  )
}

export default ExerciseDetail
