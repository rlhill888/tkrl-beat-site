import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

function ErrorsCard(errors){

    if(errors.length>=1){
         return(
        <>
        <Alert severity="error">
            <h1>Error</h1>

            {errors.map((error)=>{
                return <h3>{error}</h3>
            })}

        </Alert>
        <br />
        <br />

        </>
    )
}
    else{
    return(<>
    </>)
}

   
}

export default ErrorsCard