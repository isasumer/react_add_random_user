import React, { useEffect, useState } from "react";
import growMan from "../../assets/growing-up-man.svg";
import growWoman from "../../assets/growing-up-woman.svg";
import mail from "../../assets/mail.svg";
import man from "../../assets/man.svg";
import map from "../../assets/map.svg";
import lock from "../../assets/padlock.svg";
import phone from "../../assets/phone.svg";
import woman from "../../assets/woman.svg";
// import design from "../../assets/design.svg";
import axios from "axios";
import "./Card.css";

function Card() {
  const [cards, setCards] = useState([]);
  const [showInfo, setShowInfo] = useState({ title: "", info: "" });
  const [addUser, setAddUser] = useState([]);
  const [changeButton, setChangeButton] = useState(true);
  const [showTable, setShowTable] = useState(false);

  // console.log(cards);

  useEffect(() => {
    myApi();
  }, []);

  //oliver çözümü

  // const {phone, email, gender} = cards[0];
  // const {large : image} =  cards[0].picture;
  // const {password} =  cards[0].login;
  // const {first,last} =  cards[0].name;
  // const {name : street} =  cards[0].location.street
  // const {age} =  cards[0].dob;

  // const newPerson = {
  //   first,
  //   email,
  //   phone,
  //   age
  // };

  // const addPerson = () => {
  //   // console.log(personArray.filter((user)=> user.email === person.email ))
  //   if(personArray.filter((user)=> user.email == person.email).length > 0){
  //     alert('var zaten...')
  //   }else{
  //     setPersonArray([...personArray, person]);
  //   }
  // };
  const myApi = async () => {
    let resultApi = await getMyApi();
    setCards(resultApi);
    setShowInfo({
      title: "My name is",
      info: cards[0]?.name?.first,
    });
    setChangeButton(true);
    setShowTable(false);
  };

  const getMyApi = async () => {
    let responseResults;
    await axios
      .get("https://randomuser.me/api/")
      .then((response) => (responseResults = response.data.results))
      .catch((err) => console.log(err));
    return responseResults;
  };

  const addUserBtn = () => {
    setShowTable(true);
    addUser.length > 0
      ? addUser?.forEach((item) =>
          item.id !== cards[0]?.login?.uuid
            ? setAddUser([
                ...addUser,
                {
                  id: cards[0]?.login?.uuid,
                  first: cards[0]?.name?.first,
                  email: cards[0].email,
                  phone: cards[0].cell,
                  age: cards[0].dob.age,
                },
              ])
            : setChangeButton(false)
        )
      : setAddUser([
          ...addUser,
          {
            id: cards[0]?.login?.uuid,
            first: cards[0]?.name?.first,
            email: cards[0].email,
            phone: cards[0].cell,
            age: cards[0].dob.age,
          },
        ]);
  };

  return (
    <div>
      <div className="container">
        <div className="headerContainer">
          <div className="picture">
            <img
              className="image-db"
              src={cards[0]?.picture?.large}
              alt="img"
            />
          </div>
        </div>
        <div className="showInfo">
          <p> {showInfo.title} </p>
          <p className="bigger"> {showInfo.info} </p>
        </div>

        <div className="iconList">
          <div className="icons">
            <div
              id="gender"
              onClick={() =>
                setShowInfo({
                  title: "My name is",
                  info: cards[0]?.name?.first,
                })
              }
            >
              {cards[0]?.gender === "male" ? (
                <img className="icon" src={man} alt="man" />
              ) : (
                <img className="icon" src={woman} alt="woman" />
              )}
            </div>

            <div
              onClick={() =>
                setShowInfo({ title: "My email is", info: cards[0]?.email })
              }
            >
              <img className="icon" src={mail} alt="mail" />
            </div>
            <div
              onClick={() =>
                setShowInfo({ title: "My age is", info: cards[0]?.dob?.age })
              }
            >
              {cards[0]?.gender === "male" ? (
                <img className="icon" src={growMan} alt="man" />
              ) : (
                <img className="icon" src={growWoman} alt="woman" />
              )}
            </div>

            <div
              onClick={() =>
                setShowInfo({
                  title: "My street is",
                  info: cards[0]?.location?.street?.name,
                })
              }
            >
              <img className="icon" src={map} alt="mail" />
            </div>
            <div
              onClick={() =>
                setShowInfo({ title: "My phone is", info: cards[0]?.cell })
              }
            >
              <img className="icon" src={phone} alt="mail" />
            </div>
            <div
              onClick={() =>
                setShowInfo({
                  title: "My password is",
                  info: cards[0]?.login?.password,
                })
              }
            >
              <img className="icon" src={lock} alt="mail" />
            </div>
          </div>
        </div>
        <div className="userArea">
          <div className="changeUser">
            <button type="button" className="btn" onClick={myApi}>
              NEW USER
            </button>
          </div>
          <div className="addUser">
            <button
              type="button"
              className="btn"
              onClick={addUserBtn}
              style={changeButton ? { display: "block" } : { display: "none" }}
            >
              ADD USER
            </button>
          </div>
        </div>
        <div
          className="addUserArea"
          style={showTable ? { display: "block" } : { display: "none" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>First</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {addUser.map((user, index) => (
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
    </div>
  );
}

export default Card;