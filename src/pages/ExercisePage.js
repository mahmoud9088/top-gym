import React, { useEffect, useState } from 'react'
import ExerciseDetail from '../components/ExerciseDetail'
import YoutubeVideos from '../components/YoutubeVideos'
import { fetchData, youtubeSearchOption } from '../fetchApi/fetchData'

const ExercisePage = ({ exercises }) => {
  const [selectedExercise, setSelectedExercise] = useState('')
  const [youtubeRelated, setYoutubeRelated] = useState([])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const fetchYoutube = async () => {
      if (selectedExercise) {
        const data = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${selectedExercise} exercise`,
          youtubeSearchOption
        )
        setYoutubeRelated(data.contents)
        return data
      }
    }
    fetchYoutube()
  }, [selectedExercise])
  return (
    <>
      <ExerciseDetail
        exercises={exercises}
        setSelectedExercise={setSelectedExercise}
        youtubeRelated={youtubeRelated}
      />
      <YoutubeVideos
        selectedExercise={selectedExercise}
        setSelectedExercise={setSelectedExercise}
        youtubeRelated={youtubeRelated}
      />
    </>
  )
}

export default ExercisePage
