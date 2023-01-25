import React from 'react'
import PageNavBar from '../components/navigation/PageNavBar';
import Tab from '../components/body/DiscoverTab';
import BottomNavBar from '../components/navigation/BottomNavBar';

const discover = () => {

    return (
        <React.Fragment>
            <PageNavBar title={'Discover'}/>
            <Tab/>
            <BottomNavBar iconID={2}/>
        </React.Fragment>
    )
}

export default discover