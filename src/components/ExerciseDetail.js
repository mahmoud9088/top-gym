import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Logo2 from '../assets/images/classes-bg.jpg'
import BodyPartIcon from '../assets/icons/body-part.png'
import TargetIcon from '../assets/icons/target.png'
import EquipmentIcon from '../assets/icons/equipment.png'
const ExerciseDetail = ({ exercises, setSelectedExercise, youtubeRelated }) => {
  const { id } = useParams()
  console.log('id', id)
  console.log(youtubeRelated)
  return (
    <Box>
      {exercises.map((exercise) => {
        if (exercise.id === id) {
          setSelectedExercise(exercise.name)
          return (
            <Stack>
              <Box
                sx={{
                  backgroundImage: `url(${Logo2})`,
                  backgroundSize: 'cover',
                  height: '70vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  gap: '20px',
                  pb: '10vh',
                }}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#fff',
                    fontSize: {
                      lg: '60px',
                      md: '50px',
                      sm: '40px',
                      xs: '30px',
                    },
                  }}>
                  {exercise.name}
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: '#233ede' }}>
                  Learn More
                </Button>
              </Box>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                p="100px 0"
                sx={{
                  height: '80%',
                  gap: { md: '100px', sm: '80px', xs: '50px' },
                  flexDirection: { sm: 'row', xs: 'column-reverse' },
                }}>
                <img
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  style={{ width: '40vw' }}
                />

                <Stack
                  sx={{
                    width: { sm: '40%', xs: '80%' },
                    gap: '20px',
                    textAlign: { sm: 'left', xs: 'center' },
                  }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        lg: '48px',
                        md: '36px',
                        sm: '30',
                        xs: '36px',
                      },
                    }}>
                    {exercise.name}
                  </Typography>
                  <Typography>
                    Exercises keep you strong.{exercise.name} bup is one of the
                    best exercises to target your {exercise.target}. It will
                    hellp your improve your mood and gain energy.
                  </Typography>
                  <Stack direction="row" alignItems="center" gap="10px">
                    <Avatar
                      src={BodyPartIcon}
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#f9c5c5',
                        padding: '15px',
                      }}
                    />
                    <Typography>{exercise.name}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap="10px">
                    <Avatar
                      src={TargetIcon}
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#f9c5c5',
                        padding: '15px',
                      }}
                    />
                    <Typography>{exercise.target}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap="10px">
                    <Avatar
                      src={EquipmentIcon}
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: '#f9c5c5',
                        padding: '15px',
                      }}
                    />
                    <Typography>{exercise.equipment}</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          )
        }
      })}
    </Box>
  )
}

export default ExerciseDetail
