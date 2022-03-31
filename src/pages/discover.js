import React from 'react'
import NavBar from '../components/NavBar';
import Tab from '../components/DiscoverTab';
import BottomAppBar from '../components/BottomAppBar';

const discover = () => {

    return (
        <React.Fragment>
            <NavBar iconID={2}/>
            <Tab/>
            <BottomAppBar iconID={2}/>
        </React.Fragment>
    )
}

export default discover