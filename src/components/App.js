import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "../assets/css/style"
import SignUp from "./HomePage/SignUp"
import SignIn from "./HomePage/SignIn"
import Habits from "./MainPage/Habits"
import Today from "./MainPage/Today"
import GlobalContext from "../context"

export default function App(){
    return(
        <GlobalContext>
            <BrowserRouter>
                <GlobalStyle/>
                <Routes>
                    <Route path="/" element={<SignIn />}></Route>
                    <Route path="/cadastro" element={<SignUp/>}></Route>
                    <Route path="/habitos" element={<Habits />}></Route>
                    <Route path="/hoje" element={<Today/>}></Route>
                    <Route path="/historico" element=""></Route>
                </Routes>
            </BrowserRouter>    
        </GlobalContext> 
    )
}