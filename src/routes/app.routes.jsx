import { Routes, Route } from "react-router-dom"; 

import { Home } from "../pages/Home/Home";
import { Repositores } from "../pages/Repositores/Repositores";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/repositores/:repositores" element={<Repositores/>}/>
        </Routes>
          
           
    )
}