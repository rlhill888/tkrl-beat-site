import React, {useState, useEffect} from "react";
import NavBar from './Navbar'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CartTableCard from "./CartTableCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import ModalTkrl from "./ModalTkrl";


function Cart({user, songSrc, setSongSrc}){
    console.log(user)
    const [cart, setCart]= useState([])
    const [rerender, setRerender]= useState(0)
    const [openModal, setOpenModal]=useState(false)
        if(user&&rerender===0){
            setCart(user.cart.cart_beats)
            setRerender(previousState=> previousState+1)
        }

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
                               >
                                   <ShoppingCartIcon  color='primary'/>
                               </h1>
                               <center>
                               <Button onClick={()=>{
                                   cart.map(item=>{
                                       fetch('/user_beats', {
                                           method: 'POST',
                                           headers: {
                                               'Content-Type' : 'application/json'
                                           },
                                           body: JSON.stringify({
                                               beat_id: item.beat_id,
                                               user_id: user.id,
                                               license_id: item.license_id,
                                               music_file_type: item.music_file_type
                                           })
                                       })
                                       .then(res=>{
                                           if(res.ok){
                                               res.json()
                                               .then(res=> {
                                                window.location.reload()
                                                console.log(res)})
                                               cart.map(item=>{
                                                    fetch(`/cart_beats/${item.id}`, {
                                                        method: 'DELETE'
                                                    })
                                                })
                                           }
                                           else{
                                               res.json()
                                               .then(res=> console.log(res))
                                           }
                                       })
                                   })
                                   



                               }}>Proceed To checkout</Button>
                               </center>
                               <br />
                               <br />
                               {user&&cart.length >=1 ? cart.map(cart_beat =>{
                                   return <CartTableCard setSongSrc={setSongSrc} cart_beat={cart_beat}/>
                               }) :
                               <> 
                               <h1>Empty Cart</h1>
                               </>
                               }

                           </Box>
                       </Paper>

                   </Box>
               </Paper>
           </Container>
       </Box>
       <ModalTkrl openModal={openModal} setOpenModal={setOpenModal} />
        </>
    )
}

export default Cart