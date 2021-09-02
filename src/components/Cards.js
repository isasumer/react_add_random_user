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

const Cards = () => {
  return (
    <div className="Cards">
      <img id="profil_photo"  />
      <div className="infos">
          <h4 className="my">My {} is</h4>
          <h3 className="info"></h3>
      </div>
      <div className="icons">
        <img className="icon" src={true ? man: woman} alt="" />
        <img className="icon" src={mail} alt="" />
        <img className="icon" src={gwoman} alt="" />
        <img className="icon" src={map} alt="" />
        <img className="icon" src={phone} alt="" />
        <img className="icon" src={padlock} alt="" />
      </div>
      <div className="btn-group">
          <button className="btn" >New User</button>
          <button className="btn">Add User</button>
      </div>
    </div>
  );
};

export default Cards;
