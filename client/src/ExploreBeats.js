import React from "react";
import NavBar from './Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import SearchBeat from "./SearchBeat";
import TempBeatForm from './TempBeatForm'
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import './explorebeat.css'


function ExploreBeats(){

    return(
        <div 
        // className='main_beats_background'
        >  
        <NavBar />
        <Container
        style={{
            color: 'white'
        }}
        >
            
           <Paper elevation={15} className='newestbeats_background'>
               <Box
               p={4}
               >
                    <h3
                    style={{
                        color: 'white'
                    }}
                    >Current Deals And Sales</h3>
                    <br />
                       <Container>
                        <Grid spacing={7}
                        direction="row"
                            alignItems="center"
                            justifyContent="center"
                             container>
                            <Grid item >
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>
                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>

                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>

                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                        </Grid>
                    </Container>

               </Box>
           </Paper>
           <br />
           <br />
           <Paper elevation={15} className='newestbeats_background'>
               <Box
               p={4}
               >
                    <h3
                    style={{
                        color: 'white'
                    }}
                    >Newest Beats</h3>
                    <br />
                       <Container>
                        <Grid spacing={7}
                        direction="row"
                            alignItems="center"
                            justifyContent="center"
                             container>
                            <Grid item >
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>
                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>

                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>

                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                        </Grid>
                    </Container>



               </Box>
           </Paper>
           <br />
           <br />
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
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>
                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>

                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                            <Grid item>
                                <Box >
                                    <CardActionArea>
                                    <Paper>
                                        <Box width='250px' height='250px'>

                                        </Box>
                                    </Paper>
                                    </CardActionArea>

                                </Box>
                            </Grid>
                        </Grid>
                    </Container>





               </Box>
           </Paper>

        </Container>
        <br />
        <br />
       
        </div>
    )
}

export default ExploreBeats