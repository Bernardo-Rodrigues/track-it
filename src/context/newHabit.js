import { useState, createContext } from "react"

export const HabitContext = createContext();

export default function HabitContextProvider({children}){
    const [habitName, setHabitName] = useState("")
    const [habitDays, setHabitDays] = useState([])

    return <HabitContext.Provider value={{habitName, setHabitName, habitDays, setHabitDays}}>{children}</HabitContext.Provider>
}