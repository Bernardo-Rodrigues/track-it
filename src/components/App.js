import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "../css/style"


export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element=""></Route>
            </Routes>
        </BrowserRouter>
    )
}