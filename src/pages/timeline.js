import * as React from 'react';
import NavBar from '../components/NavBar';
import PostCard from '../components/PostCard';
import BottomAppBar from '../components/BottomAppBar';

export default function timeline () {

  return (
    <React.Fragment>
      <NavBar />
      <PostCard />
      <BottomAppBar />
    </React.Fragment>
   
  );
}
