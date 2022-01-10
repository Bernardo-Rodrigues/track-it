import { useState, useContext, useEffect } from "react";
import { CheckHabit, TodayHabits, UncheckHabit } from "../../../services/Api";
import { UserContext } from "../../../context/user";
import "dayjs/locale/pt-br"
import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import Footer from "../Footer";
import Header from "../Header";
import CheckIcon from "../../../assets/images/CheckIcon.png"
import { Container } from "../styles"
import { Check, DayDetails, Progress, Sequence, TodayHabit } from "./styles";

dayjs.extend(isoWeek)
dayjs.locale('pt-br')

export default function Today(){
    const { user, progress, setProgress } = useContext(UserContext)
    const [todayHabits, setTodayHabits] = useState([])
    const [reloadHabits, setReloadHabits] = useState(false)

    let weekday = dayjs().format("dddd, DD/MM")

    useEffect(()=>{
        const header = { headers: { Authorization: `Bearer ${user.token}` }}
        
        TodayHabits(header)
        .then(response => {
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
    },[todayHabits, setProgress])

    function checkHabit(done, id){
        let promise
        const header = {
            headers: {
              "Authorization": `Bearer ${user.token}`
            }
        }

        if(!done) promise = CheckHabit(id, header) 
        else promise = UncheckHabit(id, header)

        promise.then(() => setReloadHabits(true))
        promise.catch(error=> console.log(error.response))
    }

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
            <Footer progress={progress}/>
        </Container>
    )
}