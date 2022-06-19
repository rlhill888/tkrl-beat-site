import React, {useState, useEffect} from "react";
import NavBar from './Navbar'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import SearchBeat from "./SearchBeat";
import TempBeatForm from './TempBeatForm'
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import './explorebeat.css'
import EventCard from "./EventCard";
import UpcomingEventsCard from "./UpcomingEventsCard";
import FeaturedBeats from "./FeaturedBeats";
import AudioPlayer from "./AudioPlayer";
import DealsAndDiscounts from "./DealsAndDiscount";
import NewestBeats from "./NewestBeats";
import OmniAuthTest from "./OmiAuthTest";
import CircularProgress from '@mui/material/CircularProgress';




function ExploreBeats({songSrc, setSongSrc, user, setUser}){
    const [featuredBeats, setFeaturedBeats]= useState(null)
    const [beatsWithDeals, SetBeatsWithDeals]= useState(null)
    const [newestBeats, setNewestBeats]= useState(null)

    let featureBeatJsx
    let beatsWithealsJsx
    let newestBeatJsx

    console.log(newestBeats)


        if(featuredBeats!==null){
             featureBeatJsx =<FeaturedBeats songSrc={songSrc} setSongSrc={setSongSrc} beats={featuredBeats}/>
        }
        if(featuredBeats===null){
            featureBeatJsx= <> 
            <center>
                 <CircularProgress />
            </center>
           
            </>
        }

        if(beatsWithDeals!==null){
            beatsWithealsJsx= <DealsAndDiscounts songSrc={songSrc} setSongSrc={setSongSrc} beats={beatsWithDeals}/>
            
       }
       if(beatsWithDeals===null){
        beatsWithealsJsx= <> 
       <center>
                 <CircularProgress />
            </center>
        </>
         
       }

       if(newestBeats!==null){
        newestBeatJsx= <NewestBeats songSrc={songSrc} setSongSrc={setSongSrc} beats={newestBeats}/>
        
        }
        if(newestBeats===null){
        newestBeatJsx= <>
        <center>
                 <CircularProgress />
            </center>
         </>
            
        }
  
    


   



    useEffect(()=>{
        fetch('http://localhost:4000/show_featured_beats')
        .then(res=> res.json())
        .then(res=> {
            setFeaturedBeats(res)
        })
        fetch('http://localhost:4000/show_current_deals_and_sales')
        .then(res=> res.json())
        .then(res => {
            SetBeatsWithDeals(res)})

        fetch('http://localhost:4000/show_newest_beats')
        .then(res=> res.json())
        .then(res => {
            setNewestBeats(res)})

        
    }, [])

    console.log(featuredBeats)

    return(
        <div 
        // className='main_beats_background'
        >  
        <OmniAuthTest />
        <NavBar setUser={setUser} user={user} songSrc={songSrc}/>
        {/* <TempBeatForm /> */}
        
        <Container
        style={{
            color: 'white'
        }}
        >

            
            {beatsWithealsJsx}
           <br />
           <br />
            {newestBeatJsx}
           <br />
           <br />
            {featureBeatJsx}
            
           <br />
        <br />
                  


        </Container>
        <br />
        <br />
       
        </div>
    )
}

export default ExploreBeats