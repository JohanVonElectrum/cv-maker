import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.tsx";

function App() {
    return (
        <div className={"app"}>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
