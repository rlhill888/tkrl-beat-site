import React, {useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import NavBar from "./Navbar";
import Button from '@mui/material/Button';
import {useHistory } from "react-router-dom";
import ErrorsCard from "./ErrorsCard";


function Signup(){
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [passwordConfirmation, setPasswordConfirmation]= useState('')
    const [errors, setErrors]=useState(null)
    const history= useHistory()
console.log(errors)
    return(
        
        <>
        <NavBar />
        <Box>
            <Container>
                <Paper className='main_paper_background'>
                    <Box p={4}>
                        <Paper
                        style={{
                            backgroundColor: 'white'
                        }}
                        >
                            <Box p={2}>
                                <h1>Sign Up</h1>
                                <br />
                                <br />
                                <ErrorsCard errors={errors}/>
                                <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    if(password!==passwordConfirmation){
                                        return setErrors(['Passwords Do Not Match'])
                                    }
                                    fetch('http://localhost:4000/users', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type' : 'application/json'
                                        },
                                        body: JSON.stringify({
                                            first_name: firstName,
                                            last_name: lastName,
                                            email: email, 
                                            password: password
                                        })
                                    })
                                    .then(res=> res.json())
                                    .then(res=> console.log(res))


                                    // history.push('/login')
                                }}>
                                    <center>
                                    <h3>First Name</h3>
                                    <TextField value={firstName} onChange={(e)=> setFirstName(e.target.value)} variant='standard'></TextField>
                                    <br />
                                    <h3>Last Name</h3>
                                    <TextField value={lastName} onChange={(e)=> setLastName(e.target.value)} variant='standard'></TextField>
                                    <h3>Email</h3>
                                    <TextField value={email} onChange={(e)=> setEmail(e.target.value)} variant='standard'></TextField>
                                    <h3>Passowrd</h3>
                                    <TextField value={password} onChange={(e)=> setPassword(e.target.value)} variant='standard'></TextField>
                                    <h3>Confirm Password</h3>
                                    <TextField value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)} variant='standard'></TextField>
                                    <br />
                                    <br />
                                    <Button type='submit'>Create an Account</Button>
                                    </center>
                                </form>

                            </Box>

                        </Paper>

                    </Box>
                </Paper>
            </Container>
        </Box>
        </>
    )
}

export default Signup