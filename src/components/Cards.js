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
// import { is } from "@babel/types";

const Cards = () => {

    const [itemList, setItemList] = useState([]);
    const [isVisible, setVisible] = useState(true);

    useEffect (async ()=> {
       await axios.get("https://randomuser.me/api/").then((res)=>setItemList(res.data.results[0]))
       .catch((err)=>console.log(err))
        
    },[isVisible])


function showText(txt) {
    const text = "My"+ txt+  "is";
    document.querySelector(".info").innerHTML=text;
    
    switch (txt.trim()) {
        case "name":
            const name=true;
            document.querySelector(".isa").innerHTML=<span> name || "Clarusway"</span>;
            console.log(name);
          break;
        case "email":
            document.querySelector(".my").innerHTML=itemList.email || "Clarusway";
          break;
        case "age":
            document.querySelector(".my").innerHTML=itemList.dob?.age || "Clarusway";
          break;
        case "city":
            document.querySelector(".my").innerHTML=itemList.location?.city || "Clarusway";
          break;
        case "phone":
            document.querySelector(".my").innerHTML=itemList?.phone || "Clarusway";
          break;
        case "password":
            document.querySelector(".my").innerHTML=itemList.login?.password || "Clarusway";
          break;
        
      }
    document.querySelector(".my").innerHTML=itemList.info;
    
}
  return (
    
    <div className="Cards">
      <img id="profil_photo" src={itemList.picture?.large || null } alt="photo" />
      <div className="infos">
          <h4 className="info"></h4>
          <h3 className="isa"></h3>
          
      </div>
      <div className="icons">
        <img className="icon" src={true ? man: woman} alt="name" onMouseOver={()=>
                        showText(" name ")}/>
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
