import React from "react";
import Stack from '@mui/material/Stack';


function CartTableCard({cart_beat}){
    return(<>
    <Stack direction="row">
        <img height='50px' width='50px'></img>
        <center>
        <h1>{cart_beat.beat.beat_name}</h1>
        </center>
    </Stack>
    
    
    </>)
}

export default CartTableCard