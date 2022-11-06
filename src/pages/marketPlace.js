import React from 'react'
import NavBar from '../components/navigation/NavBar';
import BottomNavBar from '../components/navigation/BottomNavBar';
import MarketPlace from '../components/body/MarketPlace';

const marketPlace = () => {
  return (
    <React.Fragment>
        <NavBar iconID={3}/>
        <MarketPlace />
        <BottomNavBar iconID={3}/>
    </React.Fragment>
  )
}

export default marketPlace