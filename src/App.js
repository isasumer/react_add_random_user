import "./App.css"
import cw from "./assets/cw.svg"

import Cards from "./components/Cards";

const App = () => {
  
  return (
<div className="App">
    <img src={cw} alt="cw_logo" id="cw_logo" />
    <Cards  />

</div>
  )
}
export default App;


