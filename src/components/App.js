import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "../assets/css/style"
import Cadastro from "./Cadastro"
import Login from "./Login"

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/habitos" element=""></Route>
                <Route path="/hoje" element=""></Route>
                <Route path="/historico" element=""></Route>
            </Routes>
        </BrowserRouter>
    )
}