import React from "react";
import {useState} from 'react';
import {Typography, Button, TextField} from '@mui/material'
import './login.css'
const Login = () => {
    const startText = "Sign in";
    const buttonInitial = "New? Sign up";

    const [labelText, setlabelText] = useState(startText);
    const [buttonText, setButtonText] = useState(buttonInitial);

    function clicked(){
        if(labelText === startText){
            setlabelText('Create a new account')
            setButtonText('Already a user? Sign In')
        }else{
            setlabelText(startText)
            setButtonText(buttonInitial)
        }
    }

    return(

        
        <div className = "Logcontainer" style = {{width:'40%', height:'50%', borderLeft: '12px solid cornflowerblue', textAlign:'center', backgroundColor:'floralWhite', fontFamily: 'Arvo, serif', margin: '0 auto'}}>
           
            
            
            
            <Typography variant = "h3" style = {{fontFamily: 'Arvo, serif'}}> {labelText} </Typography>

            <TextField className = "form" id = "username" variant = "standard" placeholder = "username" size = "normal"  style = {{display: 'block'}}></TextField>

            <TextField className = "form" id = "pass" variant = "standard" placeholder = "password" type = "password" size = "normal"  style = {{display: 'block'}}></TextField>

            <Button style = {{display: 'block', margin:'0 auto', marginTop:'8%' }} variant = "outlined"> <Typography style = {{fontFamily: 'Arvo, serif'}} variant = "h6">Submit </Typography></Button>
        
            <Button variant = "text" onClick = {clicked} style = {{fontFamily: 'Arvo, serif', marginTop: '8%'}}>  <Typography style = {{fontFamily: 'Arvo, serif'}} variant = "button"> {buttonText} </Typography>  </Button>

        </div>
        


    )



}
export default Login;