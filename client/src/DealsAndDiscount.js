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
import ExploreBeatDiscountCard from "./EploreBeatDiscountCard";
import './DealsAndDiscount.css'


function DealsAndDiscounts({beats, songSrc, setSongSrc}){

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
        <> 
        <Paper elevation={15} className='newestbeats_background'>

             <h3
               className="titleDiscounts"
               >Newest Deals and Beat Sales</h3>
               <br />


              <Box
              p={4}
              className='mainDiv'
              >


              
                   <br />
                      <Container>
                       <Grid spacing={7}
                       direction="row"
                           alignItems="center"
                           justifyContent="center"
                           style={setGridStyle()}
                            container>
                                <br />
                          
                           {beats.map((beat)=>{
                               return <ExploreBeatDiscountCard beat={beat} setSongSrc={setSongSrc}/>
                           })}
                       </Grid>
                   </Container>
                   




              </Box>
          </Paper>
       </>
    )
}

export default DealsAndDiscounts