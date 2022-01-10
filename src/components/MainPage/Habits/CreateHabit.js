import { useState, useContext } from "react";
import { HabitContext } from "../../../context/newHabit";
import { UserContext } from "../../../context/user";
import { NewHabit } from "../../../services/Api";
import Loader from "react-loader-spinner";
import { Day,  HabitDays,  Button, Buttons, CreateHabitElement, HabitInput } from "./styles";

export default function CreateHabit({setCreateHabit, setReloadHabits}){
    const { habitName, setHabitName, habitDays, setHabitDays } = useContext(HabitContext)
    const { user } = useContext(UserContext)
    const [disabledFields, setDisabledFields] = useState(false)

    function clickDay(e){
        if(habitDays.includes(parseInt(e.target.name))) setHabitDays(habitDays.filter( element => element !== parseInt(e.target.name)))
        else setHabitDays([...habitDays, parseInt(e.target.name)])
    }
    
    function confirmHabit(){
        setDisabledFields(true)

        const body = {name:habitName, days:habitDays}
        const header =  {headers: { Authorization: `Bearer ${user.token}` }}

        NewHabit(body, header)
        .then(() => {
            setHabitDays([])
            setHabitName("")
            setReloadHabits(true)
            setCreateHabit("")
        })
        .catch(error => {
            alert(error.response.data.details)
            setDisabledFields(false)
        });
    }

    return(
        <CreateHabitElement>
            <HabitInput
                type="text" 
                value={habitName}
                onChange={ e =>setHabitName(e.target.value)}
                placeholder="nome do hábito"
                disabled={disabledFields}
            />
            <HabitDays>
                <Day selected={habitDays.includes(0)} name={0} type="button" onClick={clickDay}>D</Day>
                <Day selected={habitDays.includes(1)} name={1} type="button" onClick={clickDay}>S</Day>
                <Day selected={habitDays.includes(2)} name={2} type="button" onClick={clickDay}>T</Day>
                <Day selected={habitDays.includes(3)} name={3} type="button" onClick={clickDay}>Q</Day>
                <Day selected={habitDays.includes(4)} name={4} type="button" onClick={clickDay}>Q</Day>
                <Day selected={habitDays.includes(5)} name={5} type="button" onClick={clickDay}>S</Day>
                <Day selected={habitDays.includes(6)} name={6} type="button" onClick={clickDay}>S</Day>
            </HabitDays>
            <Buttons>
                <Button cancel onClick={()=>setCreateHabit("")} disabled={disabledFields}>Cancelar</Button>
                <Button onClick={confirmHabit} disabled={disabledFields}>
                    {disabledFields 
                        ?   <Loader
                                type="ThreeDots"
                                color="#FFF"
                                height={45}
                                width={60}
                            /> 
                        :   "Salvar"
                    }
                </Button>
            </Buttons>
        </CreateHabitElement>
    )
}