import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Contato } from "../pages/Contato";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/contato" element={<Contato/>} />
        </Routes>
    )
}