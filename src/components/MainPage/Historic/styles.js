import styled from "styled-components";

export const CalendarContainer = styled.div`
    position: relative;
`
export const Day = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background: #fff;

    padding: 10px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
`
export const HeaderElement = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const Date = styled.h2`
    font-size: 23px;
    color: #126BA5;
    font-weight:normal;
`
export const CloseDay = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #126BA5;
    color: #fff;
`
export const Habits = styled.div`
    h2{
        font-size: 23px;
        color: #126BA5;
        font-weight:normal;
        margin-bottom:10px;
    }
    p{
        font-size: 18px;
        color: #126BA5;
    }
`
export const Done = styled.span`
    color: ${ ({done}) => done ? "green" : "red" };
`