import React, {useState, useEffect} from "react";
import "./Cards.css";
import man from "../assets/man.svg";
import mail from "../assets/mail.svg";
import woman from "../assets/woman.svg";
import gman from "../assets/growing-up-man.svg"
import padlock from "../assets/padlock.svg"
import phone from "../assets/phone.svg"
import gwoman from "../assets/growing-up-woman.svg"
import map from "../assets/map.png"
import axios from "axios";
import { computeHeadingLevel } from "@testing-library/dom";


const Cards = () => {

    const [itemList, setItemList] = useState([]);
    const [isVisible, setVisible] = useState(true);



    console.log(itemList[0]?.gender)
    useEffect (async ()=> {
       await axios.get("https://randomuser.me/api/").then((res)=>setItemList(res.data.results))
       .catch((err)=>console.log(err))
        
    },[isVisible])

function showText(txt) {

    const text = "My"+ txt+  "is";
    document.querySelector(".info").innerHTML=text;
}
  return (
  
    <div className="Cards">
      <img id="profil_photo" src={itemList[0]?.picture?.large || null } alt="photo" />
      <div className="infos">
          <h4 className="info">üstteki</h4>
          <h3 className="isa">{itemList[0]?.gender}</h3>
      </div>
      <div className="icons">
        <img className="icon" src={true ? man: woman} alt="name" onMouseOver={()=>
                        showText(" name ", )}/>
        <img className="icon" src={mail} alt="mail" onMouseOver={()=>
                        showText(" email ")} />
        <img className="icon" src={gwoman} alt="gwoman" onMouseOver={()=>
                        showText(" age ")}/>
        <img className="icon" src={map} alt="map" onMouseOver={()=>
                        showText(" city ")} />
        <img className="icon" src={phone} alt="phone" onMouseOver={()=>
                        showText(" phone " )} />
        <img className="icon" src={padlock} alt="padlock" onMouseOver={()=>
                        showText(" password ")}/>
      </div>
      <div className="btn-group">
      <button type="button" className="newUser" onClick={()=>{setVisible(!isVisible)}}>New User</button>
          <button className="btn">Add User</button>
      </div>
    </div>
  );
};

export default Cards;
