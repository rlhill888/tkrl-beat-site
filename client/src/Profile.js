import React, {useState, useEffect} from "react";
import NavBar from "./Navbar";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ExploreBeatCard from "./ExploreBeatCard";
import Grid from '@mui/material/Grid';


function Profile({user, setUser, songSrc, setSongSrc}){
    if(!user){
        return(
            <>
            <h1>Loading</h1>
            </>
        )
    }
    


    return(
        <>
        <NavBar setUser={setUser} user={user} songSrc={songSrc}/>
    
        <Box>
            <Container>
                <Paper className='main_paper_background'>
                    <Box p={4}>
                        <Paper style={{
                            backgroundColor: 'white'
                        }}>
                            <Box p={4}>


                                <h1>Beats That You Own</h1>
                                <br />
                                <br />
                                <Grid container  spacing={3}>
                                {user.user_beats.map(user_beat=>{
                                    return (
                                    <>
                                    <Grid item >
                                    <ExploreBeatCard beat={user_beat.beat} setSongSrc={setSongSrc}/>
                                    </Grid>
                                    </>)

                                })}
                                </Grid>
                            </Box>


                        </Paper>

                    </Box>
                </Paper>
            </Container>
        </Box>
        </>
    )
}

export default Profile