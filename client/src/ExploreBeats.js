import React, {useState, useEffect} from "react";
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
import EventCard from "./EventCard";
import UpcomingEventsCard from "./UpcomingEventsCard";
import FeaturedBeats from "./FeaturedBeats";
import AudioPlayer from "./AudioPlayer";



function ExploreBeats(){
    const [featuredBeats, setFeaturedBeats]= useState(null)
    const [beatsWithDeals, SetBeatsWithDeals]= useState(null)
    const [newestBeats, setNewestBeats]= useState(null)

    let featureBeatJsx
        if(featuredBeats!==null){
             featureBeatJsx =<FeaturedBeats beats={featuredBeats}/>
        }
        if(featuredBeats===null){
            featureBeatJsx= <> </>
        }
  
    


    function updateState(state, setState){
        setState(state)
    }
   



    useEffect(()=>{
        fetch('http://localhost:4000/show_featured_beats')
        .then(res=> res.json())
        .then(res=> {
            setFeaturedBeats(res)
            setFeaturedBeats((p)=> p)
        
        })
        

        fetch('http://localhost:4000/show_current_deals_and_sales')
        .then(res=> res.json())
        .then(res => {
            SetBeatsWithDeals(res)
            SetBeatsWithDeals(res)})

        fetch('http://localhost:4000/show_newest_beats')
        .then(res=> res.json())
        .then(res => {
            setNewestBeats(res)
            setNewestBeats(res)})

        
    }, [])

    console.log(featuredBeats)

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
            {featureBeatJsx}
            
           <br />
        <br />
                  


        </Container>
        <br />
        <br />
       
        </div>
    )
}

export default ExploreBeats