import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import { fetchData, exercisesOption } from './fetchApi/fetchData'
import ExerciseDetail from './components/ExerciseDetail'
import HomePage from './pages/HomePage'
import ExercisePage from './pages/ExercisePage'

const App = () => {
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])
  const [filterByBodyPart, setFilterByBodyPart] = useState([])

  useEffect(() => {
    const fetchBodyPartList = async () => {
      const data = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exercisesOption
      )
      setBodyParts(data)
      return data
    }
    const fetchExercises = async () => {
      const data = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exercisesOption
      )
      setExercises(data)
      setFilterByBodyPart(data)
      return data
    }
    fetchBodyPartList()
    fetchExercises()
  }, [])
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              bodyParts={bodyParts}
              exercises={exercises}
              setExercises={setExercises}
              filterByBodyPart={filterByBodyPart}
              setFilterByBodyPart={setFilterByBodyPart}
            />
          }
        />
        <Route
          path="/exercise/:id"
          element={<ExercisePage exercises={exercises} />}
        />
      </Routes>
    </Box>
  )
}

export default App
