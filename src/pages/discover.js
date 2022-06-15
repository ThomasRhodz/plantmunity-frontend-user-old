import React from 'react'
import NavBar from '../components/navigation/NavBar';
import Tab from '../components/body/DiscoverTab';
import BottomNavBar from '../components/navigation/BottomNavBar';

const discover = () => {

    return (
        <React.Fragment>
            <NavBar iconID={2}/>
            <Tab/>
            <BottomNavBar iconID={2}/>
        </React.Fragment>
    )
}

export default discover