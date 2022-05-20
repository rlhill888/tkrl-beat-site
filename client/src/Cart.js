import React from "react";
import NavBar from './Navbar'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CartTableCard from "./CartTableCard";


function Cart({user, songSrc}){
    console.log(user)

    return(
        <>
        <NavBar user={user} songSrc={songSrc}/>
       <Box>
           <Container>
               <Paper className='main_paper_background'>
                   <Box p={4}>
                       <Paper
                       style={{
                           backgroundColor: 'white'
                       }}
                       >
                           <Box p={4}>
                               <h1
                               style={{
                                   textAlign: 'center'
                               }}
                               >Cart</h1>
                               <br />
                               <br />
                               {user ? user.cart.cart_beats.map(cart_beat =>{
                                   return <CartTableCard cart_beat={cart_beat}/>
                               }) :
                               <> </>
                               }

                           </Box>
                       </Paper>

                   </Box>
               </Paper>
           </Container>
       </Box>
        </>
    )
}

export default Cart