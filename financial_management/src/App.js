import './App.css';
import {Route, Routes} from "react-router-dom";
import Helo from "./helo";

function App() {
  return (
    <>
      <Routes>
<Route path = {''} element={<Helo></Helo>}></Route>
      </Routes>
    </>
  );
}

export default App;
