import React, { useState } from 'react';
import LogIn from '../parts/Login';
import SignUp from '../parts/SignUp';
import NavBar from '../navigation/NavBar';
import {navigate} from 'gatsby';

const UserLog = () => {

    //for initializing a variable as a state that can be use for changing interface
    const [counter, setCount] = useState(1);
    
    //function that changing the count to 2 that changes the interface to sign up form (this function is passed to Login Component)
    const toSignUp = () => {
        setCount(2);
    }

    //function that changing the count to 1 that changes the interface to login up form (this function is passed to Sign Up Component)
    const toLogIn = () => {
        setCount(1);
    }
    //function that brings the user to home their home page when login is succeful. Passed on to Login components
    const toTimeline = () => {
        navigate('/home')
    }

    //conditional statement that contains holds different return base on the counter.
    if (counter===1){
        return (
            <div>
              <LogIn goToSignUp={toSignUp}  goToTimeline={toTimeline}/>
            </div>
        )
    }else if (counter===3){
        //PS: ==ambot unsa ni, nakalimot pako dire HAAHAHHAHA
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

export default UserLog;