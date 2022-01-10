import { useContext } from "react";
import { UserContext } from "../../../context/user";
import { DeleteHabit } from "../../../services/Api";
import trash from "../../../assets/images/Group.png"
import { Day, Delete, HabitDays, HabitElement, HabitName } from "./styles";

export default function Habit({habit:{name, days, id}, setReloadHabits}){
    const { user } = useContext(UserContext)

    function deleteHabit(){
        let answer = window.confirm("Excluir hábito?")

        if(answer){
            const header = { headers: { Authorization: `Bearer ${user.token}` }}

            DeleteHabit(id, header)
            .then(setReloadHabits(true))
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