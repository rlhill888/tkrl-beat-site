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
import {useHistory } from "react-router-dom";
import ExploreBeatCard from "./ExploreBeatCard";

function FeaturedBeats({beats,  setSongSrc}){
    
    const history=useHistory()

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

                                 {beats.map((beat)=>{
                        return <ExploreBeatCard beat={beat} setSongSrc={setSongSrc}/>
                    })}
                           
                        </Grid>
                    </Container>
                    
                    



               </Box>
           </Paper>
        </>
    )
}

export default FeaturedBeats