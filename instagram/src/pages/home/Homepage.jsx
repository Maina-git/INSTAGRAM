import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import "./Homepage.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Centerbar from '../../components/center/Centerbar';
import Rightbar from '../../components/right/Rightbar';
function Homepage() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
      <Centerbar/>
      <Rightbar/>
      </div>
      
    </div>
  )
}

export default Homepage
