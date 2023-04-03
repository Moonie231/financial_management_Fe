import './App.css';
import {Route, Routes} from "react-router-dom";
import Wallet from "./pages/wallet";
import { useSelector } from "react-redux";
import Login from "./page/user/login";
import Register from "./page/user/register";


function App() {
    const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes>
          <Route path={""} element={<Login></Login>}></Route>
          <Route path={"register"} element={<Register></Register>}></Route>
          {
              user !== "User not found" || user !== "Wrong password" ?
                  <>
                  </>
                  :
                  <>
                      <Route path={"/"} element={<Login></Login>}></Route>
                  </>
          }
      </Routes>
    </>
  );
    return (
        <>
            <Routes>
                <Route path={'wallets/:idUser'} element={<Wallet></Wallet>}></Route>
            </Routes>
        </>
    );
}
export default App;
