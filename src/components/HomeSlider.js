import React from 'react'
import {
  Box,
  Button,
  MobileStepper,
  Stack,
  Typography,
  Fade,
} from '@mui/material'
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import Slide from '@mui/material/Slide'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const theme = createTheme({
  components: {
    // Name of the component
    MuiMobileStepper: {
      styleOverrides: {
        dot: {
          color: 'green',
          backgroundColor: 'yellow',
        },
      },
    },
  },
})

const images = [
  {
    label: 'Be Fit.Top Gym',
    imgPath: '../assets/images/bg.jpg',
  },
  {
    label: 'Be Fit.Top Trainer',
    imgPath: '../assets/images/bg-2.jpg',
  },
  {
    label: 'Be Fit.Top Body',
    imgPath: '../assets/images/bg-3.jpg',
  },
]

const HomeSlider = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const [elementIn, setElementIn] = React.useState(true)
  const maxSteps = images.length
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)

    setElementIn(false)
    setTimeout(() => {
      setElementIn(true)
    }, 1000)
  }
  return (
    <Box>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={5000}
        enableMouseEvents>
        {images.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box position="relative">
                <Box
                  key={step.label}
                  component="img"
                  sx={{
                    overflow: 'hidden',
                    height: '100vh',
                    display: 'block',
                    width: 'auto',
                    minWidth: '100vw',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Stack
                  direction="column"
                  sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '50%',
                    transform: 'translate(-50%,0)',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Fade in={elementIn} timeout={250}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: 'white',
                        fontSize: {
                          xl: '60',
                          lg: '50px',
                          md: '40px',
                          sm: '30px',
                          xs: '20px',
                        },
                        fontWeight: '900',
                      }}>
                      {step.label}
                    </Typography>
                  </Fade>

                  <Slide in={elementIn} timeout={1000} direction="up">
                    <Fade in={elementIn} timeout={2000}>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: '#233ede', padding: '15px 10px' }}>
                        Get Started
                      </Button>
                    </Fade>
                  </Slide>
                </Stack>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        activeStep={activeStep}
        sx={(theme) => ({
          position: 'absolute',
          top: '90%',
          left: '50%',
          transform: 'translateX(-50%)',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          color: '#fff',
          '& 	.MuiMobileStepper-dots': {
            gap: '10px',
          },
          '& .MuiMobileStepper-dot': {
            backgroundColor: 'white',
          },
          '& .MuiMobileStepper-dotActive': {
            backgroundColor: theme.palette.primary.main,
          },
        })}
      />
    </Box>
  )
}

export default HomeSlider
