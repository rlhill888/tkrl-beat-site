import React, {useState} from "react";
import NavBar from './Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

function Contact(){

    const [body, setBody]= useState('')
    const [subject, setSubject]= useState('')

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
        <NavBar /> 
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
                            <Paper>
                                <Box p={4}>
                                    <form>
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
                                    <Button variant='contained' type='submit' style={{
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
                                <Paper>
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
        
      
        </div>
    )
}

export default Contact