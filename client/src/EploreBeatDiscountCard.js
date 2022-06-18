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
import './ExploreBeatDiscount.css'

function ExploreBeatDiscountCard({beat, setSongSrc}){

    const history= useHistory()
    console.log(beat)


    return(

        <>
         <Grid item >
                                <Box >
                                    
                                    <Paper elevation={15}>
                                        <Box 
                                        className="mainBox"
                                         >
                                            <CardActionArea onClick={()=> history.push(`/beat/${beat.id}`) }>
                                            <CardMedia 
                                            component="img"
                                            height="250"
                                            image={beat.albumn_cover.url}
                                            />
                                            </CardActionArea>
                                          
                                             <CardContent style={{
                                                backgroundColor: 'black'
                                            }}>
                                                <Box height='150px'>

                                            
                                        
                                               <h2 style={{
                                                   textAlign:'center',
                                                   color: 'white'
                                               }}>
                                                      
                                                   {beat.beat_name}
                                                   
                                                   </h2>
                                                   <h2
                                                   style={{
                                                    textAlign:'center',
                                                    color: '#ff009d'
                                                }}
                                                   >
                                                       {beat.sale_discount_percentage}% OFF
                                                   </h2>
                                                   <center>
                                            <IconButton  onClick={()=> {
                                            
                                                setSongSrc(beat.wav_file.url)}}>
                                                <PlayArrowIcon color='primary'/>
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

export default ExploreBeatDiscountCard