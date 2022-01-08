import { Container, Title } from "../styles"
import Header from "../Header"
import Footer from "../Footer"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import "dayjs/locale/pt-br"
import axios from "axios";
import { UserContext } from "../../../context/user";
import { useContext, useEffect, useState } from "react";
dayjs.locale("pt-br")

export default function Historic(){
    const { user } = useContext(UserContext)
    const [ daysComplete, setDaysComplete ] = useState([])
    const [ daysNotComplete, setDaysNotComplete ] = useState([])

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
        })
        promise.then(response => {
            const days = response.data
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
            <Calendar
                calendarType={"US"}
                locale={"pt-br"}
                formatDay ={(locale, date) => dayjs(date).format('DD')}
                tileClassName={ ({ date }) => { 
                    if(daysComplete.includes( dayjs(date).format("YYYY-MM-DD"))) return "complete"
                    else if(daysNotComplete.includes( dayjs(date).format("YYYY-MM-DD"))) return "not-complete"
                }}
            />
            <Footer/>
        </Container>
    )
}