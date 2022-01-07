import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Container, Title } from "../styles"
import { UserContext } from "../../../context/user";
import CreateHabit from "./CreateHabit"
import Footer from "../Footer"
import Header from "../Header";
import Habit from "./Habit";
import HabitContextProvider from "../../../context/newHabit";
import { NoHabits } from "./styles";

export default function Habits(){
    const { user } = useContext(UserContext)
    const [createHabit, setCreateHabit] = useState("")
    const [habits, setHabits] = useState([])
    const [reloadHabits, setReloadHabits] = useState(false)
    const newHabit = <CreateHabit setReloadHabits={setReloadHabits} setCreateHabit={setCreateHabit}/>

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
        })
        promise.then(response => {
            setHabits(response.data)
            setReloadHabits(false)
        })
    },[user.token, reloadHabits])

    return(
        <HabitContextProvider>
            <Container>
                <Header/>
                <Title>
                    <h2>Meus hábitos</h2>
                    <button onClick={()=>setCreateHabit(newHabit)}>+</button>
                </Title>

                {createHabit}

                {habits.length 
                    ?   habits.map( habit =>  
                            <Habit setReloadHabits={setReloadHabits} habit={habit} key={habit.id}/>
                        )
                    :   <NoHabits>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </NoHabits>
                } 
                <Footer/>
            </Container>
        </HabitContextProvider>
        
    )
}