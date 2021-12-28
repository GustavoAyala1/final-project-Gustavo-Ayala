import React from 'react';
import NavBar from '../components/navBar';
import Favorites from '../components/favorites';
import LeftBar from '../components/leftbar';
import HomePage from '../components/homebody';

export default function Home(props) {
  return (
    <>
    <NavBar/>
    <div className='bodyDiv'>
    <LeftBar/>
    <HomePage/>
    </div>
    <Favorites/>
    </>
  );
}
