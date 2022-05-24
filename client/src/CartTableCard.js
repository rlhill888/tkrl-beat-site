import React, {useState, useEffect} from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



function CartTableCard({cart_beat, setSongSrc}){
    

    console.log(cart_beat)

    return(<>
    <Container>
        <Paper elevation={4} style={{
            backgroundColor: 'white'
        }}>
            <Box>
    
    <CardMedia
    style={{
        height: '200px'
    }} 
                    component="img"
                    image={cart_beat.beat.albumn_cover.url}
                    />
                    <center>
        <h1>{cart_beat.beat.beat_name}</h1>
        <h1>{cart_beat.music_file_type} License</h1>
        <h1
        style={{
            color: '#ff009d'
        }}
        >${cart_beat.price}</h1>

        <IconButton onClick={()=> setSongSrc(cart_beat.beat.wav_file.url)}>
            <PlayArrowIcon></PlayArrowIcon>
        </IconButton>
        </center>
        <Stack>
        <Button style={{
            display: 'flex',
            justifyContent: 'flexEnd',
            flex: 'right'
        }} 
        variant='contained' onClick={()=>{
            fetch(`/cart_beats/${cart_beat.id}`, {
                method: 'DELETE'
            })
            window. location. reload()
        }}>Remove From Cart</Button>
        </Stack>
        </Box>
    </Paper>
    
    </Container>
    <br />
    </>)
}

export default CartTableCard