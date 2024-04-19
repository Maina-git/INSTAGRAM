import "./Sidebar.css"

import { RiHome2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { MdExplore } from "react-icons/md"
import { SiGooglemessages } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";



function Sidebar() {


const Users=[

{
    icon:<RiHome2Fill/>,
    text:"Home"
},
{
    icon:<FaSearch/>,
    text:"Search"
},
{
    icon:<MdExplore/>,
    text:"Explore"
},
{
    icon:<SiGooglemessages/> ,
    text:"Messages"
},
{
 icon:<CiHeart/>,
text:"Notifications"
},
{
    icon: <MdOutlineAddBox/>,
    text:"Create"
},

];



  return (
    <div className="sidebar">
        <ul>
        {
Users.map((item)=><li  
className="listItem"
key={item}>
    <nav className="item">{item.icon}</nav>
    <nav className="text">{item.text}</nav>
</li>)
}
        </ul>


<nav className="moreButton">
<button className="more"><MdOutlineStorage/></button>
<span className="more-text">More</span>
</nav>
 </div> 
  )
}
export default Sidebar;
