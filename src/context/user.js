import { useState, createContext } from "react"

export const UserContext = createContext();

export default function UserContextProvider({children}){
    const userLocalStorage = localStorage.getItem("user")   
    const [user, setUser] = useState(JSON.parse(userLocalStorage));

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}