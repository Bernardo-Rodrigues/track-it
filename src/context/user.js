import { useState, createContext } from "react"

export const UserContext = createContext();

export default function UserContextProvider({children}){
    const userLocalStorage = localStorage.getItem("user")   
    const [user, setUser] = useState(JSON.parse(userLocalStorage));
    const [progress, setProgress] = useState(0)

    return <UserContext.Provider value={{user, setUser, progress, setProgress}}>{children}</UserContext.Provider>
}