import "./App.css";
import cw from "./assets/cw.svg";
import design from "./assets/design.svg";
import Cards from "./components/Cards";

const App = () => {
  const word = "<eden8/>"; //just used at the bottom

  return (
    <div className="App">
      <div>
        <img id="cw_logo" src={cw}></img>
      </div>
      <Cards />
      <div className="bottom">
        <p id="ed8en">{word}</p>
        <img id="design_logo" src={design} />
        <p id="design">design</p>
      </div>
    </div>
  );
};
export default App;
