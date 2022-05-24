import React, {useState} from "react";
import { GoogleLogin } from 'react-google-login' 
import { GoogleLogout } from 'react-google-login'

function GoogleLoginButton({setUser, user}){
    const [buttonClicked, setButtonClicked]= useState(false)
    const clientId= '435900012800-ideju25l0capooh741acjnja591slp78.apps.googleusercontent.com'

    function onSuccess(res){
       
           fetch('/login_with_email', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                accessToken: res.accessToken,
                profileObj: res.profileObj
            })
        })
        .then(res=> res.json())
        .then(res=> {
            
            // window.location.reload(false)
            console.log(res)})
        console.log('sucess, User:', res)
       
    }

    function onFailure(res){
        console.log('failed', res )
    }
    function onLogOutSuccess(){
        console.log('sucess')
    }

    return(
        <> 
            <GoogleLogin 
            clientId={clientId}
            buttonText={'Log In With Google'}
            onFailure={ onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            onSuccess={res=> onSuccess(res)}
            />
            {/* <GoogleLogout 
            clientId={clientId}
            buttonText={'Log out'}
            onLogOutSuccess={onLogOutSuccess}
            onFailure={err => console.log('fail', err)}
            /> */}
        </>
    )
}

export default GoogleLoginButton