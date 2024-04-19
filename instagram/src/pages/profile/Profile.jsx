import React from 'react'
import "./Profile.css";
import { Pics } from '../../../public/Pictures';


function Profile() {
  return (
    <div className="profileInfo">
    <nav className="profileContainer">
      <img src="/images/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDc5LW1rLTk2OTAtam9iNTgzXzEucG5n.webp" alt="" className="imageProfile"/>
      <nav className="profileName">
   <h2 className="title">Alphonso</h2>
   <p className="caption">A*L*P*H*A</p>
      </nav>
</nav>
<hr className="hr"></hr>
<div className="sugestions">

<h2 className="suggestionsHeader">Suggestions for you</h2>

{
    Pics.map((item,index)=><li  className="profileList"
    key={index}>
        <nav className="profileFriends">
        <img src={item.src} alt=""  className="friends"/>
        <p className="friendsName">{item.name}</p>
</nav>
        <nav className="followers">{item.info}
        <button className="follow">follow</button>
        </nav>
       


    </li>)
}

</div>


    </div>
  )
}

export default Profile;
