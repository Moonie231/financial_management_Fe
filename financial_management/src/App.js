import './App.css';
import {Route, Routes} from "react-router-dom";
import Wallet from "./pages/wallet";

function App() {
    return (
        <>
            <Routes>
                <Route path={'wallets/:idUser'} element={<Wallet></Wallet>}></Route>
            </Routes>
        </>
    );
}

export default App;
