import { Box, Icon, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayArrow'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
const YoutubeVideos = ({
  selectedExercise,
  setSelectedExercise,
  youtubeRelated,
}) => {
  return (
    <Box sx={{ bgcolor: '#ebedf8' }}>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          margin: 'auto',
          padding: '40px',
          width: { md: '60vw', sm: '80vw', xs: '100vw' },
          fontSize: {
            lg: '48px',
            md: '36px',
            sm: '30',
            xs: '36px',
          },
        }}>
        Watch <span style={{ color: '#1565c0' }}>{selectedExercise}</span>{' '}
        exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '50px',
          justifyContent: 'center',
        }}>
        {youtubeRelated.slice(0, 6).map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: '410px',
                height: '230px',
                position: 'relative',
              }}>
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer">
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    bgcolor: '#1565c0',
                  }}>
                  <PlayCircleIcon
                    size="large"
                    sx={{ color: '#fff', width: '40px', height: '40px' }}
                  />
                </IconButton>
              </a>
              <Typography>{item.video.title}</Typography>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

export default YoutubeVideos
