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
import ExploreBeatCard from "./ExploreBeatCard";
import './allspecialbeats.css'


function NewestBeats({beats, songSrc, setSongSrc}){

    function setGridStyle(){
        if(window.innerWidth<=768){
            return(
                {
                    width: '255vw'
                }
            )
        }
        if(window.innerWidth<=1279){
            return(
                {
                    width: '125vw'
                }
            )
        }
        if(window.innerWidth>1279){
            return(
                {
                    width: '70vw'

                }
            )
        }
    }

  

    return(

        <div
        style={{
            position: 'relative'
        }}
        > 
        <Paper elevation={15} className='newestbeats_background'>
              

              <center>

                   <h3
               className="title"
               >Newest Beats</h3>

              </center>

                   
               
              <Box
              p={4}
              className='mainDiv'
              >


               
                   <br />
                      <Container>
                        <div
                        className="grid"
                        >

                            <Grid spacing={7}
                       direction="row"
                           alignItems="center"
                           justifyContent="center"
                            container
                            style={setGridStyle()}
                            
                            >
                             
{beats.map((beat)=>{
                                    return <ExploreBeatCard beat={beat} setSongSrc={setSongSrc}/>
                                })}

                            
                               
                                     
                          
                              

                               
                       </Grid>
                        </div>
                       
                   </Container>
                   




              </Box>
          </Paper>
       </div>
    )
}

export default NewestBeats