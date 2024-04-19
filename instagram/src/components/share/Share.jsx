import React from 'react';
import "./Share.css";
import { posts } from '../../../public/posts/Posts';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { IoArrowRedoOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import {useState} from "react";

function Share() {
  
  return (
    <div className="share">
{
    posts.map((item,index)=><li  className="blog" key={index}> 
<section className="postProfile">
    <img src={item.post} alt="" className="postProfileUser" />
    <nav className="userName">{item.Name}</nav>
    <nav className="iconPost"><HiDotsHorizontal/></nav>
</section>
<img src={item.post} alt="" className="post"/>


<section className="likesSection">
    <FaRegHeart  className="likeicon"/>
<LuMessageCircle className="likeicon"/>
<IoArrowRedoOutline className="likeicon"/>

< CiBookmark  className="likeiconright"/>
</section>


<section className='messages'>
<p><b>UserPost</b> Description that tells more about users post</p>
</section>
<section className="comment">
    <input type="text" placeholder="addComment" className='addComment'/>
</section>
    </li> )
}
</div>
)
}
export default Share;








