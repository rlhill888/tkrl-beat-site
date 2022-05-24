import React, {useEffect, useState} from "react";
import NavBar from "./Navbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '@mui/material/Modal';
import {useHistory } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import ModalTkrl from "./ModalTkrl";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


function ShowIndivisualBeat({songSrc, user, setUser}){
    const params= useParams()

    function trackoutButtonDisabled(){
        if(beat.track_outs_price===0){
            return true
        }
        else{
            return false
        }
    }

    const history = useHistory()

    const [beat, setBeat]= useState(null)
    const [modalText, setModalText]=useState('')
    const [openModal, setOpenModal]=useState(false)
    const [openSucessMessage, setSucessMessage]=useState(false)
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400
      }
      function handleModalText(){
        if(modalText==='alreadyAddedToCart'){
            return AlreadyAddedCartText
        }
        if(modalText==='notSignedIn'){
            return notSignedInText
        }
      }


    let AlreadyAddedCartText= (<> 
        <h1>This Beat Has Already Been Added To Your Cart</h1>
    
    </>)

    let notSignedInText=(<>
        <h1>In Order To Add This Item To Your Cart You Must First Be Signed In</h1>
        <br />
        <Button  onClick={()=> history.push('/login')} variant="contained">Log In</Button>
        <br />
        <h2>If You Do Not Have An Account, You Can Make One Here</h2>
        <br />
        <Button onClick={()=> history.push('/signup')}>Sign Up</Button>
        <br />
        <h2> Or Log In With Your Google Account</h2>
        <br />
        <GoogleLoginButton />
    </>)


    console.log(beat)
    console.log(user)

    useEffect(()=>{
        fetch(`/beats/${params.id}`)
        .then(res=>res.json())
        .then(res=> setBeat(res))
    }, [])

    if(user && beat){
        let renderJsx
        let matchedBeat
        user.user_beats.map(user_beat=>{
            if(user_beat.beat.beat_name === beat.beat_name){
                return( matchedBeat= true, renderJsx= <>
                    <div 
        className= 'contact_background'
        > 
        <NavBar setUser={setUser} user={user} songSrc={songSrc}/>

        <Box>
            <Container >
            <Paper className='main_paper_background'>
                <Box p={4}>
                    <CardMedia 
                    component="img"
                    image={beat.albumn_cover.url}
                    />
                    <Paper
                    elevation={4}
                    p={4}
                    style={{
                        backgroundColor: 'white'
                    }}
                    >
                        
                        <h1
                        style={{
                            textAlign: 'center'
                        }}
                        >{beat.beat_name}</h1>
                        <br />
                        <h3
                        style={{
                            textAlign: 'center'
                        }}
                        >{beat.description}</h3>
                        <br />
                        <h3
                        style={{
                            textAlign: 'center'
                        }}
                        >Genre: {beat.genre}</h3>
                        <br />
                        {beat.sampled_beat ? <> 
                        <a 
                            target="_blank"
                            href={beat.sampled_beat_link}>
                        <h3 style={{
                            textAlign: 'center',
                            color: '#ff009d'
                        }}>* This Beat uses Samples From a 3rd party *</h3>  
                        </a>
                        <h3
                        style={{
                            textAlign: 'center',
                            color: '#ff009d'
                        }}
                        >Click the Link above to view the sample</h3>
                        
                        <br /></> : <> </>}
                        <center>
                        <Stack style={{
                            textAlign: 'center'
                        }} direction='row'>

                            <Container>
                            {/* <Button onClick={()=>{
                                if(!user){
                                    return setOpenModal(true), setModalText('notSignedIn')
                                }
                                if(user){
                                const specifcLicense= user.license.filter((license)=> license.name=== 'Mp3 License')
                                const licenseId= specifcLicense[0].id
                                fetch('/cart_beats', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type' : 'application/json'
                                    },
                                    body: JSON.stringify({
                                        cart_id: user.cart.id,
                                        beat_id: beat.id,
                                        license_id: licenseId,
                                        music_file_type: 'mp3',
                                        price: beat.mp3_price,
                                        music_file_type: 'mp3'
                                    })
                                })
                                .then(res=> {
                                    if(res.ok){
                                        res.json()
                                        .then(console.log(res))
                                    }
                                    else{
                                        setModalText('alreadyAddedToCart')
                                        setOpenModal(true)
                                    }
                                })
                                }
                                
                            }}>
                                <Paper
                                style={{
                                    backgroundColor: 'white'
                                }}
                                >
                                <Box p={2}>
                                <h3>Mp3 File</h3>
                                <h3
                                style={{
                                    color: '#ff009d'
                                }}
                                >${beat.mp3_price}</h3>
                                <h3>Add {beat.beat_name} Mp3 File To Cart
                                <br />
                                <ShoppingCartIcon color='primary'/>
                                </h3>
                                </Box>

                                </Paper>
                            </Button>

                            <Button>
                            <Paper
                                style={{
                                    backgroundColor: 'white'
                                }}
                                >
                                    <Box p={2}>
                                <h3>Wav File</h3>
                                <h3
                                style={{
                                    color: '#ff009d'
                                }}
                                >${beat.wav_price}</h3>
                                <h3>Add {beat.beat_name} Wav File To Cart
                                <br />
                                <ShoppingCartIcon color='primary'/>
                                </h3>
                                </Box>
                            </Paper>

                            </Button>
                            
                            <Button
                            disabled={()=>{
                                if(beat.track_outs_price===0){
                                    return true
                                }
                                else{
                                    return false
                                }
                            }}
                            >
                                <Paper
                                style={{
                                    backgroundColor: 'white'
                                }}
                                >
                                    <Box p={2}>


                                <h3
                                >Track Outs File</h3>
                                <h3
                                style={{
                                    color: '#ff009d'
                                }}
                                >${beat.track_outs_price}</h3>
                                <h3>Add {beat.beat_name} Track Outs File To Cart
                                <br />
                                <ShoppingCartIcon color='primary'/>
                                </h3>
                                </Box>


                            </Paper>

                            </Button> */}
                            <h1>
                                You Already Purchased the {user_beat.music_file_type} file for this beat
                            </h1>

                            <a href={beat.wav_file.url} download>
                                <h3
                                style={{
                                    textAlign: 'center',
                                    color: '#ff009d'
                                }}
                                >Download Beat</h3>
                            </a>
                            </Container>

                            </Stack>
                            </center>
                       
                       
                        <br />
                        <br />

                    </Paper>

                </Box>
            </Paper>

            </Container>
        </Box>

       <Modal
       open={openModal}
       onClose={handleCloseModal}
       >
           <Paper className='main_paper_background'>
               <Box
               sx={style}
               >
                   <Paper className='main_paper_background'>
                       <Box p={4}>
                           <Paper style={{
                               backgroundColor: 'white'
                           }}>
                                <Box p={4}>
               {handleModalText()}
               </Box>
               </Paper>
                     </Box>
                    </Paper>
               </Box>
           </Paper>

       </Modal>
     
        </div>

                    </>
                )
            }
        })
        if(matchedBeat===true){
            return (renderJsx)
        }
        
    }

    if(beat===null){
        return(<>
        <h1
        style={{
            color: 'white'
        }}
        >Loading</h1>
        </>)
    }
    else{

        return(
        <div 
        className= 'contact_background'
        > 
        <NavBar setUser={setUser} user={user} songSrc={songSrc}/>

        <Box>
            <Container >
            <Paper className='main_paper_background'>
                <Box p={4}>
                    <CardMedia 
                    component="img"
                    image={beat.albumn_cover.url}
                    />
                    <Paper
                    elevation={4}
                    p={4}
                    style={{
                        backgroundColor: 'white'
                    }}
                    >
                        
                        <h1
                        style={{
                            textAlign: 'center'
                        }}
                        >{beat.beat_name}</h1>
                        <br />
                        <h3
                        style={{
                            textAlign: 'center'
                        }}
                        >{beat.description}</h3>
                        <br />
                        <h3
                        style={{
                            textAlign: 'center'
                        }}
                        >Genre: {beat.genre}</h3>
                        <br />
                        {beat.sampled_beat ? <> 
                        <a 
                            target="_blank"
                            href={beat.sampled_beat_link}>
                        <h3 style={{
                            textAlign: 'center',
                            color: '#ff009d'
                        }}>* This Beat uses Samples From a 3rd party *</h3>  
                        </a>
                        <h3
                        style={{
                            textAlign: 'center',
                            color: '#ff009d'
                        }}
                        >Click the Link above to view the sample</h3>
                        
                        <br /></> : <> </>}
                        <center>
                        <Stack style={{
                            textAlign: 'center'
                        }} direction='row'>

                            <Container>
                            <Button onClick={()=>{
                                if(!user){
                                    return setOpenModal(true), setModalText('notSignedIn')
                                }
                                if(user){
                                const specifcLicense= user.license.filter((license)=> license.name=== 'Mp3 License')
                                const licenseId= specifcLicense[0].id
                                fetch('/cart_beats', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type' : 'application/json'
                                    },
                                    body: JSON.stringify({
                                        cart_id: user.cart.id,
                                        beat_id: beat.id,
                                        license_id: licenseId,
                                        music_file_type: 'mp3',
                                        price: beat.mp3_price,
                                        music_file_type: 'mp3'
                                    })
                                })
                                .then(res=> {
                                    if(res.ok){
                                        res.json()
                                        .then(res=>{
                                            console.log(res)
                                            setSucessMessage(true)
                                        })
                                    }
                                    else{
                                        setModalText('alreadyAddedToCart')
                                        setOpenModal(true)
                                    }
                                })
                                }
                                
                            }}>
                                <Paper
                                elevation={4}
                                style={{
                                    backgroundColor: 'white'
                                }}
                                >
                                <Box p={2}>
                                <h3>Mp3 File</h3>
                                <h3
                                style={{
                                    color: '#ff009d'
                                }}
                                >${beat.mp3_price}</h3>
                                <h3>Add {beat.beat_name} Mp3 File To Cart
                                <br />
                                <ShoppingCartIcon color='primary'/>
                                </h3>
                                </Box>

                                </Paper>
                            </Button>

                            <Button>
                            <Paper
                            elevation={4}
                                style={{
                                    backgroundColor: 'white'
                                }}
                                >
                                    <Box p={2}>
                                <h3>Wav File</h3>
                                <h3
                                style={{
                                    color: '#ff009d'
                                }}
                                >${beat.wav_price}</h3>
                                <h3>Add {beat.beat_name} Wav File To Cart
                                <br />
                                <ShoppingCartIcon color='primary'/>
                                </h3>
                                </Box>
                            </Paper>

                            </Button>
                            
                            <Button
                            disabled={trackoutButtonDisabled()}
                            >
                                <Paper
                                elevation={4}
                                style={{
                                    backgroundColor: 'white'
                                }}
                                >
                                    <Box p={2}>


                                <h3
                                >Track Outs File</h3>
                                <h3
                                style={{
                                    color: '#ff009d'
                                }}
                                >${beat.track_outs_price}</h3>
                                <h3>Add {beat.beat_name} Track Outs File To Cart
                                <br />
                                <ShoppingCartIcon color='primary'/>
                                </h3>
                                </Box>


                            </Paper>

                            </Button>
                            </Container>

                            </Stack>
                            </center>
                       
                       
                        <br />
                        <br />

                    </Paper>

                </Box>
            </Paper>

            </Container>
        </Box>

       <Modal
       open={openModal}
       onClose={handleCloseModal}
       >
           <Paper className='main_paper_background'>
               <Box
               sx={style}
               >
                   <Paper className='main_paper_background'>
                       <Box p={4}>
                           <Paper style={{
                               backgroundColor: 'white'
                           }}>
                                <Box p={4}>
               {handleModalText()}
               </Box>
               </Paper>
                     </Box>
                    </Paper>
               </Box>
           </Paper>

       </Modal>
       <ModalTkrl openModal={openSucessMessage} setOpenModal={setSucessMessage} modalText={<> 
       <h3>{beat.beat_name} was added to your cart.</h3>
       </>}/>
     
        </div>
    )
    }



    
}

export default ShowIndivisualBeat