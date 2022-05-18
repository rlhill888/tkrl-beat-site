import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import Slider from '@mui/material/Slider';



function AudioPlayer(){
    const [musicPlaying, setMusicPlaying]= useState(false)
    const [maxLength, setMaxLength]= useState(200)
    const [position, setPosition]= useState(0)
    let musicIcon

    if(musicPlaying){
        musicIcon= <PauseCircleFilledIcon size="large" />
    }
    if(!musicPlaying){
        musicIcon= <PlayCircleFilledIcon size="large"/>

    }
    if(musicPlaying){
        setInterval(()=>{
            setPosition((previousState)=> previousState+1)
        }, 1000)
    }

    return(
        <>
       
            <Box style={{
                textAlign: 'center'
            }}>
            <IconButton onClick={()=> setMusicPlaying((previousState)=> !previousState)} color='primary' size="large">
                {musicIcon}
            </IconButton>
            <center>
            <Box width='500px'>
            <Slider 
            max={maxLength}
            value={position}
            valueLabelDisplay="auto"
            aria-label="time-indicator"
            onChange={(e)=> setPosition(e.target.value)}
            
            ></Slider>
            </Box>
            </center>
            

            </Box>

       
        </>
    )
}

export default AudioPlayer