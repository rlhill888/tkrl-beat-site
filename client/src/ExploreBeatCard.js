import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './explorebeat.css'
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Stack from '@mui/material/Stack';
import { margin, padding } from "@mui/system";
import {useHistory } from "react-router-dom";
import OmniAuthTest from "./OmiAuthTest";

function ExploreBeatCard({beat, setSongSrc}){
    const history= useHistory()
    

    return(
        <> 
                        <Grid item >
                                <Box >
                                    
                                    <Paper elevation={15}>
                                        <Box width='250px' >
                                            <CardActionArea onClick={()=>{ 
                                                setSongSrc(beat.wav_file.url)
                                                history.push(`/beat/${beat.id}`)} }>
                                            <CardMedia 
                                            component="img"
                                            height="250"
                                            image={beat.albumn_cover.url}
                                            />
                                            </CardActionArea>
                                          
                                             <CardContent style={{
                                                backgroundColor: 'black'
                                            }}>
                                                <Box height='100px'>

                                            
                                        
                                               <h2 style={{
                                                   textAlign:'center',
                                                   color: 'white'
                                               }}>
                                                      
                                                   {beat.beat_name}
                                                   
                                                   </h2>
                                                   <center>
                                            <IconButton  >
                                                <PlayArrowIcon onClick={()=> setSongSrc(beat.wav_file.url)} color='primary'/>
                                            </IconButton>
                                            </center>
                                               </Box>
                                           </CardContent>
                                        </Box>
                                    </Paper>
                                    

                                </Box>
                            </Grid>
        </>
    )
}

export default ExploreBeatCard