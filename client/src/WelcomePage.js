import React, {useState, useEffect} from "react";
import logo from './photos/tkrl_logo.png'
import {useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CardActionArea from '@mui/material/CardActionArea';

function WelcomePage(){

   const history= useHistory()
    const [opacity, setOpactity]= useState(0.2)
    const [loopdone, setLoopDone]= useState(false)

    function increaseOpacity(){
        return setOpactity((previousState)=> previousState + .0005)
    }
    function fadeIn(){
        for(let i=0; i<20000; i++){
            setTimeout(increaseOpacity, .1)
            
        }
        setLoopDone(true)
    }

    if(loopdone===false){
        fadeIn()
    }


    return(
        <div
        style={{
            position:'absolute',
            top:'0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            opacity: `${opacity}`
        }}
        className= 'welcome_background'
        >
         
            <img
            style={{
                opacity: `${opacity}`,
                position:'absolute',
                top: '25%',
                left:'26%',
                right: '25%'

            }}
            src={logo}
            ></img>
         
          
            <center>
            <Button
            style={{
                opacity: `${opacity}`,
                position:'absolute',
                top: '50%',
                left:'25%',
                right: '25%',
                fontSize: '24px'
            }}
            onClick={()=> history.push('/ExploreBeats')}
            >
                Welcome
            </Button>
            </center>
        </div>
    )
}

export default WelcomePage