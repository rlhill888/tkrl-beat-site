import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import StudioSession from './StudioSession';
import ExploreBeats from './ExploreBeats';
import WelcomePage from './WelcomePage';
import Login from './Login';
import SearchSpecificBeat from './SearchSpecificBeat';
import ShowIndivisualBeat from './ShowIndivisualBeat';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from './Signup';
import Profile from './Profile'
import { GoogleLogin } from 'react-google-login' 
import { gapi } from 'gapi-script'

const theme= createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#ff009d',
          light: '#606060',
        },
        secondary: {
          main: '#5400b3',
        },
        background: {
          default: '#ffffff',
          paper: '#ece6f3',
        },
      }
})



function App() {
const [songSrc, setSongSrc]= useState({src: null, name: null})
const [user, setUser]= useState(null)
const [cart, setCart]= useState(null)

const clientId= '435900012800-ideju25l0capooh741acjnja591slp78.apps.googleusercontent.com'


console.log(user)

function fetchCart(){

}
useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId: clientId,
      scope: ""
    })

    const auth2 = gapi.auth2.getAuthInstance();
if (auth2 != null) {
    auth2.signOut().then(
         auth2.disconnect().then(console.log('LOGOUT SUCCESSFUL'))
     )
}
  }
  // const auth2 = gapi.auth2.getAuthInstance();
  // if (auth2 != null) {
  //     auth2.signOut().then(
  //          auth2.disconnect().then(console.log('LOGOUT SUCCESSFUL'))
  //      )
  // }

  gapi.load('client:auth2', start)

}, [])

useEffect(()=>{
fetch('/me')
.then(res=>{
  if(res.ok){
    res.json()
    .then(res=> setUser(res))
  }
  else{
    console.log('not logged in')
  }
})
}, [])

  return (
   <div className='background'>
    <ThemeProvider theme={theme}>
   <Switch>
    
    <Route exact path="/cart">
        <Cart setSongSrc={setSongSrc} setUser={setUser} user={user} songSrc={songSrc}/>
    </Route>
    <Route exact path="/beat/:id">
        <ShowIndivisualBeat setUser={setUser} user={user} songSrc={songSrc}/>
    </Route>
    <Route exact path="/contact">
        <Contact user={user} setUser={setUser} user={user} songSrc={songSrc}/>
    </Route>
    <Route exact path="/studiosessions">
        <StudioSession />
    </Route>
    <Route exact path="/ExploreBeats">
        <ExploreBeats user={user} setUser={setUser} setSongSrc={setSongSrc} songSrc={songSrc}/>
    </Route>
    <Route exact path="/SearchSpecificBeat">
        <SearchSpecificBeat setSongSrc={setSongSrc} songSrc={songSrc} user={user}/>
    </Route>
    <Route exact path="/Login">
        <Login user={user} setUser={setUser}/>
    </Route>
    <Route exact path="/signup">
        <Signup />
    </Route>
    <Route exact path="/profile">
        <Profile setSongSrc={setSongSrc} setUser={setUser} user={user} songSrc={songSrc}/>
    </Route>
    {/* <Route  exact path="/home">
            <Home />
    </Route> */}
    <Route   path="/">
            <WelcomePage />
    </Route>

   </Switch>
   </ThemeProvider>
   </div>
  );
}

export default App;
