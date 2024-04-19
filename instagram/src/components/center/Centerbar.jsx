import "./Centerbar.css";
import { Pics } from "../../../public/Pictures";
import Feed from "../feed/Feed";


function Centerbar() {
return (
    <div className="center-bar">
<div className="section">
{
    Pics.map((item,index)=><li key={index}>
        <img className="img" src={item.src} alt="" />
        <span className="name">{item.name}</span>
    </li>)
}
</div>
<Feed/>
</div>
  )
}

export default Centerbar
