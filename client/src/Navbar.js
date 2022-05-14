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
import './Navbar.css'


function NavBar(){
    const history = useHistory()
    const [openDrawer, setOpenDrawer]= useState(false)

    return(
        <>
        <AppBar className='app_bar'>
            <Toolbar>
            <Button onClick={()=> setOpenDrawer(true)}> 
            <MenuIcon  />
        </Button>
        </Toolbar>
        </AppBar>
        
            <Drawer  style={{ textAlign:'center'}} anchor='left' open={openDrawer} onClose={()=> setOpenDrawer(false)}>
                <Box className='navbar_background' p={2} width='250px' role='presentation' > 
                <Box >
                

                    <Container>
                        <Box m={2} p={2}>

                
                    <br />
                    <br />
                    <br />
                    <br />
                   
                    <Button 
                    
                    onClick={()=> history.push('/')} > 
                        <HomeIcon />
                         {' '}Home
                         </Button>
                        
                    <br />
                    <br />
                    <br />
                  
                    <Button 
                   
                    onClick={()=> history.push('/ExploreBeats')} >
                        <MusicNoteIcon />
                        Explore Beats</Button>
                    <br />
                    <br />
                    <br />
                    
                    <Button 
                    
                    onClick={()=> history.push('/studiosessions')}
                   >
                        <DateRangeIcon />
                        Schedule Studio Session</Button>
                    <br />
                    <br />
                    <br />
                    
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
        </>
    )
}

export default NavBar