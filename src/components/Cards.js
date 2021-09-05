import "./Cards.css";
import React, { useState, useEffect } from "react";
import man from "../assets/man.svg";
import mail from "../assets/mail.svg";
import woman from "../assets/woman.svg";
import gman from "../assets/growing-up-man.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import gwoman from "../assets/growing-up-woman.svg";
import map from "../assets/map.png";
import axios from "axios";

const Cards = () => {
  const [itemList, setItemList] = useState([]);
  const [isVisible, setVisible] = useState(true);
  const [showText, setShowText] = useState({ upper: "", bottom: "" });
  const [addButtonList, setAddButtonList] = useState ([]);

  useEffect(async () => {
    await axios
      .get("https://randomuser.me/api/")
      .then((res) => setItemList(res.data.results));
  }, [isVisible]);

const addBtn = () =>{
  setAddButtonList([
    ...addButtonList,
    {
      id: itemList[0]?.login?.uuid,
      first: itemList[0]?.name?.first,
      email: itemList[0].email,
      phone: itemList[0].cell,
      age: itemList[0].dob.age,
    },
  ])
}








  return (
    <div className="Cards">
      <img
        id="profil_photo"
        src={itemList[0]?.picture?.large || null}
        alt="photo"
      />
      <div className="infos">
        {showText.upper ? (
          <h4 className="info"> My {showText.upper} is </h4>
        ) : (
          <h4 className="info"> Hi</h4>
        )}
        <h3 className="isa">{showText.bottom}</h3>
      </div>
      <div className="icons">
        <img
          className="icon"
          src={itemList[0]?.gender == "male" ? man : woman}
          alt="name"
          onMouseOver={() =>
            setShowText({ upper: " name ", bottom: itemList[0]?.name?.first })
          }
        />
        <img
          className="icon"
          src={mail}
          alt="mail"
          onMouseOver={() =>
            setShowText({ upper: " mail ", bottom: itemList[0]?.email })
          }
        />
        <img
          className="icon"
          src={itemList[0]?.gender == "male" ? gman : gwoman}
          alt="gwoman-gman"
          onMouseOver={() =>
            setShowText({ upper: " age ", bottom: itemList[0]?.dob?.age })
          }
        />
        <img
          className="icon"
          src={map}
          alt="map"
          onMouseOver={() =>
            setShowText({
              upper: " city ",
              bottom:
                itemList[0]?.location?.city +
                ", " +
                itemList[0]?.location?.country,
            })
          }
        />
        <img
          className="icon"
          src={phone}
          alt="phone"
          onMouseOver={() =>
            setShowText({ upper: " phone ", bottom: itemList[0]?.cell })
          }
        />
        <img
          className="icon"
          src={padlock}
          alt="padlock"
          onMouseOver={() =>
            setShowText({
              upper: " password ",
              bottom: itemList[0]?.login?.password,
            })
          }
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn newUser"
          onClick={() => {
            setVisible(!isVisible);
            setShowText({ upper: " name ", bottom: itemList[0]?.name?.first });
          }}
          >New User
        </button>
        <button 
        type="button"
        className="btn addUser"
        onClick= {addBtn}

        >Add User
        </button>
      </div>
      <div >
      <table className="addUserList">
            <thead >
              <tr className="userListTable">
                <th>First</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            </table>
            
            <tbody>
              {addButtonList.map((user, index) => (
                <tr key={index}>
                  <td>{user.first}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.age}</td>
                </tr>
              ))}
            </tbody>
      </div>
    </div>
  );
};

export default Cards;
