import React from 'react'
import "./Topbar.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarLeft">
        <div className="instagram">
        <FaInstagramSquare />
        </div>
        </div>
        

        <div class="topbarCenter">
        
        <input type="text"
        placeholder="search"  className="search"/>
        </div>
        
       <div className="topbarRight">
       <section classsName="icons">
<RiHome2Fill className="icon"/>
<CiLocationArrow1 className="icon"/>

<FaRegHeart className="icon"/>
</section>   
      <div className="profile">
      <img src="/public/images/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDc5LW1rLTk2OTAtam9iNTgzXzEucG5n.webp " alt="" className="profilePic" />
       </div>
       </div>
      
      
    </div>
  )
}

export default Topbar;
