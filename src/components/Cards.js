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
  const [newUser, setNewUser] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [showText, setShowText] = useState({
    show: true,
    upper: "",
    bottom: "",
  });
  const [addButtonList, setAddButtonList] = useState([]);

  useEffect(async () => {
    await axios
      .get("https://randomuser.me/api/")
      .then((res) => setItemList(res.data.results));
  }, [newUser]);
  const addBtn = () => {
    setAddButtonList([
      ...addButtonList,
      {
        id: itemList[0]?.login?.uuid,
        first: itemList[0]?.name?.first,
        email: itemList[0].email,
        phone: itemList[0].cell,
        age: itemList[0].dob.age,
      },
    ]);
  };
  return (
    <div className="Cards">
      <div className="Card">
        <div className="photo_box">
          <img
            id="profil_photo"
            src={itemList[0]?.picture?.large || null}
            alt="photo"
          />
        </div>
        <div className="infos">
          {showText.show}
          <h4 className="info">{showText.upper}</h4>
          <h3 className="isa">{showText.bottom}</h3>
        </div>
        <div className="icons">
          <img
            className="icon"
            src={itemList[0]?.gender == "male" ? man : woman}
            alt="name"
            onMouseOver={() =>
              setShowText({
                show: true,
                upper: "My name is",
                bottom: itemList[0]?.name?.first,
              })
            }
            onMouseOut={() =>
              setShowText({ show: false, upper: "", bottom: "" })
            }
          />
          <img
            className="icon"
            src={mail}
            alt="mail"
            onMouseOver={() =>
              setShowText({ upper: "My e-mail is", bottom: itemList[0]?.email })
            }
            onMouseOut={() =>
              setShowText({ show: false, upper: "", bottom: "" })
            }
          />
          <img
            className="icon"
            src={itemList[0]?.gender == "male" ? gman : gwoman}
            alt="gwoman-gman"
            onMouseOver={() =>
              setShowText({ upper: "My age is", bottom: itemList[0]?.dob?.age })
            }
            onMouseOut={() =>
              setShowText({ show: false, upper: "", bottom: "" })
            }
          />
          <img
            className="icon"
            src={map}
            alt="map"
            onMouseOver={() =>
              setShowText({
                upper: "My city is",
                bottom:
                  itemList[0]?.location?.city +
                  ", " +
                  itemList[0]?.location?.country,
              })
            }
            onMouseOut={() =>
              setShowText({ show: false, upper: "", bottom: "" })
            }
          />
          <img
            className="icon"
            src={phone}
            alt="phone"
            onMouseOver={() =>
              setShowText({ upper: "My phone is", bottom: itemList[0]?.cell })
            }
            onMouseOut={() =>
              setShowText({ show: false, upper: "", bottom: "" })
            }
          />
          <img
            className="icon"
            src={padlock}
            alt="padlock"
            onMouseOver={() =>
              setShowText({
                upper: "My password is",
                bottom: itemList[0]?.login?.password,
              })
            }
            onMouseOut={() =>
              setShowText({ show: false, upper: "", bottom: "" })
            }
          />
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn newUser"
            onClick={() => {
              setNewUser(!newUser);
            }}
          >
            New User
          </button>
          <button
            type="button"
            className="btn addUser"
            onClick={() => {
              addBtn();
              setShowTable(true);
            }}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="addUserList">
        <table>
          {showTable ? (
            <thead>
              <tr className="userListTable">
                <th>First</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
          ) : null}
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
        </table>
      </div>
    </div>
  );
};
export default Cards;
