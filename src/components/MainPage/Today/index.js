import { Container, Title } from "../styles"
import Footer from "../Footer";
import Header from "../Header";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/user";
import axios from "axios";
import { Check, DayDetails, Progress, Sequence, TodayHabit } from "./styles";
import CheckIcon from "../../../assets/images/CheckIcon.png"
import "dayjs/locale/pt-br"
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
dayjs.extend(isoWeek)
dayjs.locale('pt-br')

export default function Today(){
    const { user } = useContext(UserContext)
    const [todayHabits, setTodayHabits] = useState([])
    const [reloadHabits, setReloadHabits] = useState(false)
    const [progress, setProgress] = useState(0)

    let weekday = dayjs().format("dddd, DD/MM")

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
        })
        promise.then(response => {
            setTodayHabits(response.data)
            setReloadHabits(false)
        })
    },[user.token, reloadHabits])

    useEffect(()=>{
        let cont = 0
        
        todayHabits.forEach( habit => {
            if(habit.done) cont++
        })

        setProgress(parseInt(cont/todayHabits.length*100))
    },[todayHabits])

    function checkHabit(done, id){
        let promise
        const header = {
            headers: {
              "Authorization": `Bearer ${user.token}`
            }
        }

        if(!done) promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, header) 
        else promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, header)
        promise.then(() => setReloadHabits(true))

        promise.catch(error=> console.log(error.response))
    }

    console.log(todayHabits)

    return(
        <Container>
            <Header/>
            <DayDetails>
                <h2>{weekday}</h2>
                {progress 
                    ?   <Progress haveProgress={true}>{progress}% dos hábitos concluídos</Progress>
                    :   <Progress>Nenhum hábito concluído ainda</Progress>
                }
            </DayDetails>
            {todayHabits.length 
                    ?   todayHabits.map( habit =>
                            <TodayHabit habit={habit} key={habit.id}>
                                <h3>{habit.name}</h3>
                                <p>
                                    Sequência atual:  
                                    <Sequence green={habit.done}>
                                        {habit.currentSequence} 
                                        {habit.currentSequence !== 1 ? " dias" : " dia"}
                                    </Sequence><br/>
                                    Seu recorde: 
                                    <Sequence green={habit.currentSequence === habit.highestSequence && habit.highestSequence !== 0}>
                                        {habit.highestSequence} 
                                        {habit.highestSequence !== 1 ? " dias" : " dia"}
                                    </Sequence>
                                </p>
                                <Check done={habit.done} onClick={()=>checkHabit(habit.done, habit.id)}>
                                    <img src={CheckIcon} alt="check"></img>
                                </Check>
                            </TodayHabit>
                        )
                    :   <p>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </p>
                } 
            <Footer/>
        </Container>
    )
}