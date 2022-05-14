import react from 'react'
import NavBar from './Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';


function Home(){

    return(
        <div
        >
        <NavBar />
        
        <br />
        <br />
        <br />
        

        <Box>
            <Container>

                <Paper className='main_paper_background'>
                    <Box p={4}>
            <h1
            style={{textAlign:'center'}}
            >home</h1>
                    </Box>
                </Paper>
            </Container>


        </Box>
        

        </div>
    )
}

export default Home