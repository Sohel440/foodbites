import React, { useState } from 'react';

import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import './Home.css';
import ExploreMenu from '../../components/Explore/ExploreMenu';


const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
    {/* <AppDownload/> */}
    
    </div>
  )
}

export default Home