import React, {useState} from "react";
import NavBar from './Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import ModalTkrl from './ModalTkrl';
import { Modal } from "@material-ui/core";
import {useHistory } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";


function Contact({songSrc, user, setUser}){

    const [body, setBody]= useState('')
    const [subject, setSubject]= useState('')
    const [phoneNumber, setPhoneNumber]= useState('')
    const [email, setEmail]= useState('')
    const [openModal, setOpenModal]=useState(false)
    const [openMessageSubmitted, setOpenMessageSubmited]= useState(false)
    const history= useHistory()


    const signInModalText= <>

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
    </>

    function handleSubmit(e){
        e.preventDefault()
        fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                subject: subject,
                body_message: body,
                contact_phone_number: phoneNumber,
                contact_email: email,
                user_id: user.id
            })
        })
        .then(res=>{
            if(res.ok){
                res.json()
                .then(res=> {
                    setOpenMessageSubmited(true)
                    console.log(res)})
            }
            else{
                res.json()
                .then(res=> console.log(res))
            }
        })
    }

    return(
        <div
        style={{
            position:'absolute',
            top:'0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }}
        className= 'contact_background'
        >
        <NavBar user={user} setUser={setUser} songSrc={songSrc}/> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <Box>
            <Container>
                <Paper className='main_paper_background'>
                    <Box p={4}>
                        <br />
                        <br />
                        <br />
                        <Container>
                            <Paper style={{
                                backgroundColor: 'white'
                            } }>
                                <Box p={4}>
                                    <form >
                                    <h2>Send Me a Message</h2>
                                    <br />
                                    <br />
                                    <h3>subject</h3>
                                    <TextField value={subject} onChange={(e)=> setSubject(e.target.value)} fullWidth></TextField>
                                    <br />
                                    <br />
                                    <h3>body</h3>
                                    <TextField value={body} onChange={(e)=> setBody(e.target.value)} fullWidth >
                                    </TextField>
                                    <br >
                                    </br>
                                    <br />
                                    <div 
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                    >
                                    <div
                                     style={{
                                        width: '45%'
                                    }}
                                    >
                                    <h3>Contact Phone Number</h3>
                                    <TextField
                                    onChange={(e)=> setPhoneNumber(e.target.value)}
                                    style={{
                                        width: '100%'
                                    }}
                                    placeholder= '(xxx)-xxx-xxxx'
                                   
                                    ></TextField>
                                    </div>
                                    {/* <br />
                                    <br /> */}
                                    <div
                                     style={{
                                        width: '45%'
                                    }}
                                    >
                                    <h3>Contact Email</h3>
                                    <TextField
                                    onChange={(e)=> setEmail(e.target.value)}
                                     placeholder= 'example@gmail.com'
                                      style={{
                                        width: '100%'
                                    }}
                                    ></TextField>
                                    </div>
                                    </div>
                                    <br />
                                    <br />
                                    <Button 
                                    onClick={(e)=>{
                                        if(!user){
                                           setOpenModal(true)
                                        }
                                        if(user){
                                            handleSubmit(e)
                                        }
                                    }}
                                    variant='contained' style={{
                                        color: 'black'
                                    }}>Submit</Button>
                                    </form>
                                    

                                </Box>
                            </Paper>
                        </Container>









                        <br />
                        <br />
                        <br />
                        <Container>
                            <Box>
                                <Paper
                                style={{
                                    backgroundColor: 'white'
                                } }
                                >
                                    <Box p={2}>

                                        <h2>Other Ways To Contact Me</h2>
                                        <br />



                                        <Stack direction="row">
                                            <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png'/>
                                            <h3>
                                                
                                                Instagram
                                            </h3>
                                        </Stack>

                                        <Stack direction="row">

                                             <Avatar src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1444832710/jpxymsto2juy4n68q1ib.png'/>
                                            <h3>

                                               
                                                BeatStars
                                            </h3>
                                        </Stack>

                                        <Stack direction="row">

                                            <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png'/>
                                            <h3>
                                                
                                                Email
                                            </h3>
                                        </Stack>

                                            



                                       

                                    </Box>
                                </Paper>
                            </Box>
                        </Container>

                    </Box>
                </Paper>
            </Container>
        </Box>
        <ModalTkrl openModal={openModal} setOpenModal={setOpenModal} modalText={signInModalText}/>
        <ModalTkrl openModal={openMessageSubmitted} setOpenModal={setOpenMessageSubmited} 
        modalText={<> 
        <h3> Your Message Was Sent Successfully!
            <br />
            We Will Contact You Soon!
        </h3>
        </>}/>
        
      
        </div>
    )
}

export default Contact