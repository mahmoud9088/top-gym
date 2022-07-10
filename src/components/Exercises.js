import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import Back from '../assets/icons/b-back.png'
import Cardio from '../assets/icons/b-cardio.png'
import Chest from '../assets/icons/h-chest.png'
import LowerArms from '../assets/icons/larm.png'
import LowerLegs from '../assets/icons/l-leg.png'
import Neck from '../assets/icons/b-neck.png'
import Shoulders from '../assets/icons/shoulder.png'
import UpperArms from '../assets/icons/uarm.png'
import UpperLegs from '../assets/icons/h-uleg.png'
import Waist from '../assets/icons/waist.png'
import DisplayExercises from './DisplayExercises'

const Exercises = ({
  bodyParts,
  exercises,
  setExercises,
  filterByBodyPart,
  setFilterByBodyPart,
}) => {
  const [imgSrc, setImgSrc] = React.useState([
    Back,
    Cardio,
    Chest,
    LowerArms,
    LowerLegs,
    Neck,
    Shoulders,
    UpperArms,
    UpperLegs,
    Waist,
  ])

  return (
    <>
      <Stack
        justifyContent="center"
        bgcolor="#212122"
        p="50px"
        gap="20px"
        sx={{ width: '100%' }}>
        <Typography
          variant="h3"
          sx={{ color: '#fff', textAlign: 'center', mb: '30px' }}>
          Awesome Exercises You
          <br />
          Should Know
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {bodyParts.length !== 0
            ? bodyParts.map((bodyPart, index) => {
                return (
                  <Grid
                    item
                    sm={3}
                    xs={4}
                    key={index}
                    sx={{ textAlign: 'center' }}
                    onClick={() => {
                      const filteredExercises = exercises.filter(
                        (item) => bodyPart === item.bodyPart
                      )
                      console.log('filteredExercises', filteredExercises)
                      console.log('filteredExercises', filteredExercises)
                      setFilterByBodyPart(filteredExercises)
                    }}>
                    <Box
                      component={'a'}
                      href="#exercises"
                      sx={{ textDecoration: 'none', color: '#fff' }}>
                      <img
                        src={imgSrc[index]}
                        alt="neck"
                        style={{
                          width: '82px',
                          height: '82px',
                          cursor: 'pointer',
                        }}
                      />
                      <Typography
                        sx={{ color: '#fff', mt: '20px', cursor: 'pointer' }}>
                        {bodyPart}
                      </Typography>
                    </Box>
                  </Grid>
                )
              })
            : null}
        </Grid>
        <Button
          variant="contained"
          sx={{ width: 'fit-content', margin: 'auto', bgcolor: '#233ede' }}
          onClick={() => setFilterByBodyPart(exercises)}>
          Show All
        </Button>
      </Stack>
      <DisplayExercises
        exercises={exercises}
        filterByBodyPart={filterByBodyPart}
      />
    </>
  )
}

export default Exercises
