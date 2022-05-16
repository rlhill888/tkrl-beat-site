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


function NavBar(){
    const history = useHistory()
    const [openDrawer, setOpenDrawer]= useState(false)

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

        <Button style={{
             position: 'absolute',
            right: 30
        }}
        onClick={()=> history.push('/cart')}
        >
            <ShoppingCartIcon />
        </Button>
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