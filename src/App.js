import "./App.css"
import cw from "./assets/cw.svg"
import design from "./assets/design.svg";
import Cards from "./components/Cards";

const App = () => {
  const word= "<eden8/>"
  return (
<div className="App">
    <img src={cw} alt="cw_logo" id="cw_logo" />
    <Cards  />
<div className="bottom">
      <p>{word}</p>
      <img id="design_logo" src={design} />
      <p>design</p>
    </div>
</div>
  )
}
export default App;


