import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';


function FeaturedBeats(){

    return(
        <>
       <Box>
           <Container>
               <Paper className='main_paper_background'>
                   <Box style={{textAlign: 'center'}} p={3} pb={5}>
                       <h3>Featured Beats</h3>
                       <Container>
                        <Grid spacing={2}
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
       </Box>
        </>
    )
}

export default FeaturedBeats