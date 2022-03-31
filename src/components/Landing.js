import React, { useState } from 'react';
import LogIn from '../components/Login';
import SignUp from '../components/SignUp';
import NavBar from '../components/NavBar';
import {navigate} from 'gatsby';

const Landing = () => {
    const [counter, setCount] = useState(1);
    
    const toSignUp = () => {
        setCount(2);
    }

    const toLogIn = () => {
        setCount(1);
    }

    const toTimeline = () => {
        navigate('/timeline')
    }

    if (counter===1){
        return (
            <div>
              <LogIn goToSignUp={toSignUp}  goToTimeline={toTimeline}/>
            </div>
        )
    }else if (counter===3){
        
        return (
            <div>
              <NavBar/>
            </div>
        )
    }else{
        return (
            <div>
              <SignUp goToLogin={toLogIn}/>
            </div>
        )
    }
   
}

export default Landing;