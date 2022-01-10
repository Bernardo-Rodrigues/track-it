import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/user";
import { history } from "../../../services/api";
import dayjs from 'dayjs';
import "dayjs/locale/pt-br"
import Header from "../Header"
import Footer from "../Footer"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { Container, Title } from "../styles"
import { CalendarContainer, CloseDay, Date, Day, Done, Habits, HeaderElement } from "./styles";

dayjs.locale("pt-br")

export default function Historic(){
    const { user, progress } = useContext(UserContext)
    const [ daysComplete, setDaysComplete ] = useState([])
    const [ daysNotComplete, setDaysNotComplete ] = useState([])
    const [ daysArr, setDaysArr] = useState([])
    const [ selectedDay, setSelectedDay ] = useState()

    useEffect(()=>{
        const header = { headers: { Authorization: `Bearer ${user.token}` }}

        history(header)
        .then(response => {
            const days = response.data
            setDaysArr(days)
            let notComplete = []
            let complete = []

            days.forEach(element => {
                let doneAll = true
                let day = element.day.slice(0,2)
                let month = element.day.slice(3,5)
                let year = element.day.slice(6,10)
                const formatDay = `${year}-${month}-${day}`

                if(formatDay === dayjs().format("YYYY-MM-DD")) return
                
                element.habits.forEach( habit =>{
                    if (habit.done === false) {
                        doneAll = false
                    }
                })

                if(doneAll) complete.push(dayjs(formatDay).format("YYYY-MM-DD"))
                else notComplete.push(dayjs(formatDay).format("YYYY-MM-DD"))
            });

            setDaysComplete(complete)
            setDaysNotComplete(notComplete)
        })
    },[user.token])

    return(
        <Container>
            <Header/>
            <Title><h2>Histórico</h2></Title>
            <CalendarContainer>
                <Calendar
                    calendarType={"US"}
                    locale={"pt-br"}
                    formatDay ={(locale, date) => dayjs(date).format('DD')}
                    tileClassName={ ({ date }) => { 
                        if(daysComplete.includes( dayjs(date).format("YYYY-MM-DD"))) return "complete"
                        else if(daysNotComplete.includes( dayjs(date).format("YYYY-MM-DD"))) return "not-complete"
                    }}
                    onClickDay={(value, event) => {
                        setSelectedDay(daysArr.find( day => day.day === dayjs(value).format("DD/MM/YYYY")))
                    }}
                />
                {selectedDay && 
                    <Day>
                        <HeaderElement>
                            <Date>{selectedDay.day}</Date>
                            <CloseDay onClick={()=> setSelectedDay()}>X</CloseDay>
                        </HeaderElement>
                        <Habits>
                            <h2>Hábitos:</h2>
                            {selectedDay.habits.map( habit => 
                                 <p key={habit.id}>{habit.name} - <Done done={habit.done}>{habit.done ? "Concluído" : "Não concluído"}</Done></p>
                            )}
                        </Habits>
                    </Day>
                } 
            </CalendarContainer>
            <Footer progress={progress}/>
        </Container>
    )
}