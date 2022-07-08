import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Typography,
  Stack,
  Pagination,
  Box,
  CardMedia,
  CardActionArea,
  Card,
  CardContent,
} from '@mui/material'
import BgImage from '../assets/images/trainer-bg.jpg'
const DisplayExercises = ({ exercises, filterByBodyPart }) => {
  const [page, setPage] = React.useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }
  console.log('exercises:', exercises)

  const currentData = () => {
    const begin = (page - 1) * 6
    const end = begin + 6
    return filterByBodyPart.slice(begin, end)
  }
  return (
    <Box
      height="100%"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
      }}>
      <Typography
        variant="h1"
        sx={{ color: '#fff', textAlign: 'center', width: '100%' }}>
        Exercises
      </Typography>
      <Grid container spacing={4} justifyContent="center" m="auto" p="40px">
        {currentData().map((exercise, index) => {
          return (
            <Grid item xs={4} key={index} textAlign="center">
              <Link
                to={`/exercise/${exercise.id}`}
                style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: '80%' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={exercise.gifUrl}
                      alt={exercise.name}
                      sx={{
                        width: { md: '200px', xm: '100px' },
                        height: 'auto',
                        margin: 'auto',
                      }}
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="center" gap="20px">
                        <Typography gutterBottom variant="h5" component="div">
                          {exercise.bodyPart}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {exercise.target}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {exercise.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          )
        })}
      </Grid>
      <Pagination
        count={Math.ceil(filterByBodyPart.length / 6)} // you can use toFixed(0) to set the values after the dot to zero
        page={page}
        onChange={handleChange}
        sx={{ width: 'fit-content', margin: 'auto' }}
      />
      {console.log(currentData())}
    </Box>
  )
}

export default DisplayExercises
