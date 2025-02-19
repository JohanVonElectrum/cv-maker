import "./App.css";
import {Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import useTheme from "./hooks/ThemeHook.ts";
import Home from "@pages/home/Home.tsx";
import Create from "@pages/create/Create.tsx";
import View from "@pages/view/View.tsx";
import Invalid from "@pages/invalid/Invalid.tsx";

function App() {
    const [theme] = useTheme();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className={"app"}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/view" element={<View />}/>
                <Route path="/invalid" element={<Invalid />}/>
            </Routes>
        </div>
    );
}

export default App;
