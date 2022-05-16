import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function EventCard(){

    return(
        <> 
        <Box>
            <Container>
                <Paper>
                    <Box p={2}>
                    <CardMedia 
                    component='img'
                    image='https://images.prismic.io/philadelphia-rushstreetgaming/6dd412a5-fa75-498e-b0e5-02206f45afab_49165+RIV+Events+Photo+Resizes+For+New+Website+1945x8216.jpg?auto=compress,format'
                    />
                    <br />
                    <hr />
                    <br />
                    <CardContent>
                        <h3>Basic description of events/upcoming events/ beats I really want people to check out</h3>
                    </CardContent>

                    </Box>
                </Paper>
            </Container>
        </Box>
        </>
    )
}

export default EventCard