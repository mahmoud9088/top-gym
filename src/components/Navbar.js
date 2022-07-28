import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  Collapse,
  useMediaQuery,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
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

const StyledSearch = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(3),
  //   width: 'auto',
  // },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
}))
const SearchInputBase = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </StyledSearch>
)

const Navbar = ({ exercises, setFilterByBodyPart }) => {
  const [search, setSearch] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [drawerOpen, setDrawerOpen] = React.useState(false)

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    //changes the function state according to the value of open
    setDrawerOpen(open)
  }

  const navMenu = (menuStatus) => {
    return (
      <Box
        sx={{
          display: menuStatus,
          alignItems: 'center',
          gap: '50px',
        }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#fff',
          }}>
          <Typography>Home</Typography>
        </Link>
        <Typography
          component={'a'}
          href="#exercises"
          sx={{ textDecoration: 'none', color: '#fff' }}>
          Exercises
        </Typography>
        <IconButton color="inherit" onClick={handleOpen}>
          <SearchIcon />
        </IconButton>
      </Box>
    )
  }

  return (
    <>
      <AppBar
        sx={{
          bgcolor: 'rgba(0,0,0,0.5)',
          padding: '20px',
          position: 'absolute',
          top: '0',
        }}>
        <Toolbar>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <img alt="logo" src={Logo} style={{ marginRight: '10px' }} />

            <IconButton
              onClick={() => setDrawerOpen(!drawerOpen)}
              sx={{
                display: { sm: 'none', xs: 'block' },
              }}>
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
            {navMenu({ sm: 'flex', xs: 'none' })}
            {/* <Box
              direction="row"
              sx={{ display: { sm: 'flex', xs: 'none' }, mb: 0 }}>
              <ListItemButton
                sx={{
                  '& .alignItemsFlexStart': { flexDirection: 'flex-start' },
                }}
                // sx={{
                //   '&:hover': {
                //     color: '#233ede',
                //   },
                // }}
              >
                <ListItemIcon>
                  <HomeIcon
                    sx={{
                      color: '#fff',
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <FitnessCenterIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Exercises" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
              </ListItemButton>
            </Box> */}
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              sx={{
                '& .MuiDrawer-paperAnchorTop': {
                  backgroundColor: 'rgba(0,0,0,1)',
                  color: '#fff',
                },
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Stack
                  sx={{ width: 'fit-content', gap: '20px', margin: '20px 0' }}>
                  <IconButton
                    sx={{
                      width: 'fit-content',
                      margin: 'auto',
                      backgroundColor: alpha(theme.palette.primary.main, 0.15),
                      borderRadius: '50%',
                      '&:hover': {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.25
                        ),
                      },
                    }}
                    onClick={() => setDrawerOpen(!drawerOpen)}>
                    <CloseIcon sx={{ color: '#fff' }} />
                  </IconButton>
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: '#fff',
                    }}>
                    <ListItemButton
                      onClick={() => setDrawerOpen(false)}
                      sx={{
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.15
                        ),
                        borderRadius: '5px',
                        '&:hover': {
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.25
                          ),
                        },
                      }}>
                      <ListItemIcon>
                        <HomeIcon sx={{ color: '#fff' }} />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </Link>
                  <ListItemButton
                    component={'a'}
                    href="#exercises"
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      backgroundColor: alpha(theme.palette.primary.main, 0.15),
                      borderRadius: '5px',
                      '&:hover': {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.25
                        ),
                      },
                    }}>
                    <ListItemIcon>
                      <FitnessCenterIcon sx={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Exercises" />
                  </ListItemButton>
                  <StyledSearch>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(e.target.value)
                      }}
                    />
                  </StyledSearch>
                  <Button
                    component={'a'}
                    href="#exercises"
                    variant="contained"
                    sx={{
                      color: '#fff',
                      bgcolor: alpha(theme.palette.primary.main, 0.15),
                      '&:hover': {
                        bgcolor: alpha(theme.palette.primary.main, 0.25),
                      },
                    }}
                    onClick={() => {
                      setDrawerOpen(false)
                      if (search) {
                        console.log(search)
                        const searchedExercises = exercises.filter(
                          (exerxise) =>
                            exerxise.name.toLowerCase().includes(search) ||
                            exerxise.target.toLowerCase().includes(search) ||
                            exerxise.equipment.toLowerCase().includes(search) ||
                            exerxise.bodyPart.toLowerCase().includes(search)
                        )

                        setFilterByBodyPart(searchedExercises)
                        console.log('searchedExercises:', searchedExercises)
                      }
                    }}>
                    Search
                  </Button>
                </Stack>
              </Box>
            </Drawer>
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
              placeholder="Type Keywords…"
              onChange={(e) => setSearch(e.target.value)}
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
            <Button
              variant="contained"
              sx={{ height: '50px' }}
              component={'a'}
              href="#exercises"
              onClick={() => {
                handleClose()
                if (search) {
                  console.log(search)
                  const searchedExercises = exercises.filter(
                    (exerxise) =>
                      exerxise.name.toLowerCase().includes(search) ||
                      exerxise.target.toLowerCase().includes(search) ||
                      exerxise.equipment.toLowerCase().includes(search) ||
                      exerxise.bodyPart.toLowerCase().includes(search)
                  )

                  setFilterByBodyPart(searchedExercises)
                  console.log('searchedExercises:', searchedExercises)
                }
              }}>
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
