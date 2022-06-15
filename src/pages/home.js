import * as React from 'react';
import NavBar from '../components/navigation/NavBar';
import BottomNavBar from '../components/navigation/BottomNavBar';
import Timeline from '../components/body/Timeline';


export default function home () {
  

  return (
    <React.Fragment>
      <NavBar iconID={1}/>
      <div style={{height:80}} />
      <Timeline />
      <div style={{height:30}} />
      <BottomNavBar iconID={1}/>
    </React.Fragment>
   
  );
}
