import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

function ErrorsCard({errors}){
   
    if(errors.length===0){
        return(
            <> </>
        )
    }

    
         return(
        <>
        <Alert 
        style={{
            backgroundColor: '#fcb8c0'
        }}
        severity="error">
            <h1>Error</h1>

            {errors.map((error)=>{
                return <h3 
                key={`error ${error}`}
                >{error}</h3>
            })}

        </Alert>
        <br />
        <br />

        </>
    )
    return(
        <>
        </>
    )

   
}

export default ErrorsCard