import react from 'react'
import EventCard from './EventCard';
import NavBar from './Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import FeaturedBeats from './FeaturedBeats';
import logo from './photos/tkrl_logo.png'
import UpcomingEventsCard from './UpcomingEventsCard';


function Home(){

    return(
        <div
        
        >
        <NavBar />
        
        <br />
        <br />
        <br />
          <center>
            <img src={logo}></img>
            </center>
        <FeaturedBeats />
        <br />
        <br />
        <br />
        <Box>
            <Container
            maxWidth='lg'
            >

                <Paper className='main_paper_background'>
                    <Box p={4}>
                      

            <EventCard />
            <br />
            <br />
            <UpcomingEventsCard />
           





                    </Box>
                </Paper>
            </Container>


        </Box>
        

        </div>
    )
}

export default Home