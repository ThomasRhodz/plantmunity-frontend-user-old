import React from 'react'
import PageNavBar from '../components/navigation/PageNavBar';
import BottomNavBar from '../components/navigation/BottomNavBar';
import MarketPlace from '../components/body/MarketPlace';

const market = () => {
  return (
    <React.Fragment>
        <PageNavBar title={'Marketplace'}/>
        <MarketPlace />
        <BottomNavBar iconID={3}/>
    </React.Fragment>
  )
}

export default market