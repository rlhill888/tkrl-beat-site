import React, {useState} from "react";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Container from '@mui/material/Container';
import {useHistory } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './photos/tkrl_logo_gif.gif'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
// import AudioPlayer from "./AudioPlayer";
import AudioPlayer from 'material-ui-audio-player';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Popper from '@mui/material/Popper';


function NavBar({songSrc, user, setUser}){
    const history = useHistory()
    const [openDrawer, setOpenDrawer]= useState(false)

    // const useStyles = makeStyles((theme) => {
    //     return {
    //       root: {
    //         [theme.breakpoints.down('sm')]: {
    //           width: '100%',
    //         },
    //       },
    //       loopIcon: {
    //         color: '#3f51b5',
    //         '&.selected': {
    //           color: '#0921a9',
    //         },
    //         '&:hover': {
    //           color: '#7986cb',
    //         },
    //         [theme.breakpoints.down('sm')]: {
    //           display: 'none',
    //         },
    //       },
    //       playIcon: {
    //         color: '#f50057',
    //         '&:hover': {
    //           color: '#ff4081',
    //         },
    //       },
    //       replayIcon: {
    //         color: '#e6e600',
    //       },
    //       pauseIcon: {
    //         color: '#0099ff',
    //       },
    //       volumeIcon: {
    //         color: 'rgba(0, 0, 0, 0.54)',
    //       },
    //       volumeSlider: {
    //         color: 'black',
    //       },
    //       progressTime: {
    //         color: 'rgba(0, 0, 0, 0.54)',
    //       },
    //       mainSlider: {
    //         color: '#3f51b5',
    //         '& .MuiSlider-rail': {
    //           color: '#7986cb',
    //         },
    //         '& .MuiSlider-track': {
    //           color: '#3f51b5',
    //         },
    //         '& .MuiSlider-thumb': {
    //           color: '#303f9f',
    //         },
    //       },
    //     };
    //   });

    const theme= createTheme({
        palette: {
            type: 'light',
            primary: {
              main: '#ff009d',
              light: '#606060',
            },
            secondary: {
              main: '#5400b3',
            },
            background: {
              default: '#ffffff',
              paper: 'black',
            },
          }
    })

    return(
        <div style={{
            marginBottom: '50px'
        }}>
        <AppBar 
        
        className='app_bar'>
            <Toolbar>
            <Button onClick={()=> setOpenDrawer(true)}> 
            <MenuIcon  />
        </Button>


        <center>
            <img height='75' src={logo}></img>

        </center>
        <IconButton onClick={()=> history.push('/SearchSpecificBeat')}>
            <SearchIcon color='primary'/>
        </IconButton>
        
        <Box
        style={{
            position: 'absolute',
           right: '37%',
           left: '37%'
       }}>

           <ThemeProvider theme={theme}>
        <AudioPlayer 
        variation="primary"
        src={songSrc}
        
        />
        </ThemeProvider>
        </Box>
       

        <Button style={{
             position: 'absolute',
            right: 30
        }}
        onClick={()=> history.push('/cart')}
        >
            <ShoppingCartIcon />
        </Button>
        {user? 
        
        <div
        style={{
            position: 'absolute',
           right: 120
       }}
        > 
        <Button  
        onClick={()=>{
            history.push('/profile')
        }}
        >{user.first_name} {user.last_name}</Button>
        <Button onClick={()=>{
            fetch('logout', {
                method: 'DELETE',
                headers: {'Content-Type' : 'application/json'}
            })
            window.location.reload()
            setUser(null)
        }}>Log Out</Button>
        </div>
        
        : 
        
        <div
        style={{
            position: 'absolute',
           right: 120
       }}
        > 
        <Button
        onClick={()=> history.push('/login')}
        >Log In</Button>
        </div>}
        </Toolbar>
        </AppBar>
        
            <Drawer  style={{ textAlign:'center'}} anchor='left' open={openDrawer} onClose={()=> setOpenDrawer(false)}>
                <Box className='navbar_background' p={2} width='250px' role='presentation' > 
                <Box >
                

                    <Container>
                        <Box m={2} p={2}>
                            <center>
                        <img height='80' src={logo}></img>
                        </center>

                
                    <br />
                    <br />
                    <br />
                    <br />
                   
                    {/* <Button 
                    
                    onClick={()=> history.push('/home')} > 
                        <HomeIcon />
                         {' '}Home
                         </Button>
                        
                    <br />
                    <br />
                    <br /> */}
                  
                    <Button 
                   
                    onClick={()=> history.push('/ExploreBeats')} >
                        <MusicNoteIcon />
                        Explore Beats</Button>
                    <br />
                    <br />
                    <br />
                    
                    {/* <Button 
                    
                    onClick={()=> history.push('/studiosessions')}
                   >
                        <DateRangeIcon />
                        Schedule Studio Session</Button>
                    <br />
                    <br />
                    <br /> */}
                    
                    <Button 
                    
                    onClick={()=> history.push('/contact')}
                    >
                        <ConnectWithoutContactIcon />
                        Contact</Button>

                    </Box>
                    </Container>

                    </Box>
                </Box>

            </Drawer>
        </div>
    )
}

export default NavBar