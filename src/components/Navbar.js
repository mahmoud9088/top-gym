import React from 'react'
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Modal,
  Box,
  TextField,
  InputBase,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import Logo from '../assets/icons/logo.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '100vw',
  height: '100%',
  bgcolor: '#073b4c',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar
        sx={{
          bgcolor: 'rgba(0,0,0,0.5)',
          padding: '20px',
          // position: 'absolute',
          // top: '0',
        }}>
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <img alt="logo" src={Logo} style={{ marginRight: '10px' }} />
            <Stack direction="row" sx={{ alignItems: 'center', gap: '50px' }}>
              <Typography>Home</Typography>
              <Typography>Exercises</Typography>
              <IconButton color="inherit" onClick={handleOpen}>
                <SearchIcon />
              </IconButton>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description">
        <Box sx={{ ...style, width: 200 }}>
          <Typography variant="h3" sx={{ color: 'white', mb: '20px' }}>
            SEARCH
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: { sm: 'row', xs: 'column' },
              gap: { sm: '0', xs: '20px' },
              width: '100%',
            }}>
            <InputBase
              variant="outlined"
              sx={{
                placeholder: 'Type Keywords',
                padding: '20px',
                bgcolor: 'white',
                color: 'black',
                width: '35%',
                height: '50px',
                border: 'none',
                boxSizing: 'border-box',
              }}></InputBase>
            <Button variant="contained" sx={{ height: '50px' }}>
              Search
            </Button>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: '#fff',
              }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Navbar
