import { Day, Delete, HabitDays, HabitElement, HabitName } from "./styles";
import trash from "../../../assets/images/Group.png"
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../context/user";

export default function Habit({habit:{name, days, id}, setReloadHabits}){
    const { user } = useContext(UserContext)

    function deleteHabit(){
        let answer = window.confirm("Excluir hábito?")

        if(answer){
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
                headers: { Authorization: `Bearer ${user.token}` }
            })

            promise.then(setReloadHabits(true))
        }
    }

    return(
        <HabitElement>
            <HabitName>{name}</HabitName>
            <Delete onClick={deleteHabit}><img src={trash} alt="delete"></img></Delete>
            <HabitDays>
                <Day selected={days.includes(0)}>D</Day>
                <Day selected={days.includes(1)}>S</Day>
                <Day selected={days.includes(2)}>T</Day>
                <Day selected={days.includes(3)}>Q</Day>
                <Day selected={days.includes(4)}>Q</Day>
                <Day selected={days.includes(5)}>S</Day>
                <Day selected={days.includes(6)}>S</Day>
            </HabitDays>
        </HabitElement>
    )
}