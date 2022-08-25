import { useState } from 'react';
import '../App.css';
import Top from '../Components/Top'
import Search from '../Components/Search';
import SideComponent from '../Components/SideComponent';
import APIData from '../Components/APIData';
import Lower from '../Components/Lower';


function Home() {

  return (
    <div className='App'>
      <Top />
      <Search />
      <div style={{ display: 'flex', marginTop: '100px' }}>
        <SideComponent />
        <APIData />
      </div>
      <Lower />
    </div>
  );
}

export default Home;
