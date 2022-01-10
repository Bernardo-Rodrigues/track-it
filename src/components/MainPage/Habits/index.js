import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/user";
import HabitContextProvider from "../../../context/newHabit";
import { listHabits } from "../../../services/api";
import CreateHabit from "./CreateHabit"
import Footer from "../Footer"
import Header from "../Header";
import Habit from "./Habit";
import { Container, Title } from "../styles"
import { NoHabits } from "./styles";

export default function Habits(){
    const { user, progress } = useContext(UserContext)
    const [createHabit, setCreateHabit] = useState("")
    const [habits, setHabits] = useState([])
    const [reloadHabits, setReloadHabits] = useState(false)
    const newHabit = <CreateHabit setReloadHabits={setReloadHabits} setCreateHabit={setCreateHabit}/>

    useEffect(()=>{
        const header = { headers: { Authorization: `Bearer ${user.token}` }}
        
        listHabits(header)
        .then(response => {
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
                <Footer progress={progress}/>
            </Container>
        </HabitContextProvider>
        
    )
}