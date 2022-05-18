import React, {useState} from "react";
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

function FeaturedBeats({beats}){
    
    
    console.log(beats)
   
    if(beats!==undefined){}
    return(
        <> 
         <Paper elevation={15} className='newestbeats_background'>
               <Box
               p={4}
               >


                <h3
                style={{
                    color: 'white'
                }}
                >Featured beats</h3>
                    <br />
                       <Container>
                        <Grid spacing={7}
                        direction="row"
                            alignItems="center"
                            justifyContent="center"
                             container>
                            <Grid item >
                                <Box >
                                    
                                    <Paper elevation={15}>
                                        <Box width='250px' >
                                            <CardActionArea>
                                            <CardMedia 
                                            component="img"
                                            height="250"
                                            image={beats[0].albumn_cover.url}
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
                                                      
                                                   {beats[0].beat_name}
                                                   
                                                   </h2>
                                                   <center>
                                            <IconButton  >
                                                <PlayArrowIcon color='primary'/>
                                            </IconButton>
                                            </center>
                                               </Box>
                                           </CardContent>
                                        </Box>
                                    </Paper>
                                    

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                   
                                    <Paper>
                                        <Box width='250px' >
                                            <CardActionArea>
                                        <CardMedia 
                                            component="img"
                                            height="250"
                                            image={beats[1].albumn_cover.url}
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
                                                      
                                                   {beats[1].beat_name}
                                                   
                                                   </h2>
                                                   <center>
                                            <IconButton  >
                                                <PlayArrowIcon color='primary'/>
                                            </IconButton>
                                            </center>
                                               </Box>
                                           </CardContent>

                                        </Box>
                                    </Paper>
                                    

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                    
                                    <Paper>
                                        <Box width='250px' >
                                            <CardActionArea>
                                        <CardMedia 
                                            component="img"
                                            height="250"
                                            image={beats[2].albumn_cover.url}
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
                                                      
                                                   {beats[2].beat_name}
                                                   
                                                   </h2>
                                                   <center>
                                            <IconButton  >
                                                <PlayArrowIcon color='primary'/>
                                            </IconButton>
                                            </center>
                                               </Box>
                                           </CardContent>

                                        </Box>
                                    </Paper>
                                   

                                </Box> 
                            </Grid>
                        </Grid>
                    </Container>
                    




               </Box>
           </Paper>
        </>
    )
}

export default FeaturedBeats