import React, {useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NavBar from "./Navbar";
import {useHistory } from "react-router-dom";
import { formControlLabelClasses } from "@mui/material";


function Login({user, setUser}){
    const history= useHistory()

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    if(user){
        history.push('/ExploreBeats')
    }

    return(<>
    <NavBar />
    <Box>
        <Container>
            <Paper className='main_paper_background'>
                <Box p={4}>
                    <Paper
                    elevation={4}
                    style={{
                        backgroundColor: 'white'
                    }}
                    >
                        <Box p={2}>
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                fetch('http://localhost:4000/login', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type' : 'application/json'
                                    },
                                    body: JSON.stringify({
                                        email: email,
                                        password: password
                                    })
                                })
                                .then(res=>{
                                    if(res.ok){
                                        res.json()
                                        .then(res=> setUser(res))
                                    }
                                    else{
                                        res.json()
                                        .then(console.log(res))
                                    }
                                })

                            }}>
                            <center>
                            <h1>Login</h1>
                            <br />
                            <br />
                            <h2>Email</h2>
                            <TextField value={email} onChange={(e)=> setEmail(e.target.value)} variant='standard'></TextField>
                            <br />
                            <br />
                            <h2>Password</h2>
                            <TextField value={password} onChange={(e)=> setPassword(e.target.value)} variant='standard'></TextField>
                            <br />
                            <br />
                            <Button type='submit' variant='contained'>Log In</Button>
                            <br />
                            <br />
                            <h3>New User?</h3>
                            <Button onClick={()=> history.push('/signup')}>Sign Up</Button>
                            </center>
                            </form>


                        </Box>
                    </Paper>

                </Box>
            </Paper>
        </Container>
    </Box>
    </>)
}

export default Login