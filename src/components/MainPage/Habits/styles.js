import styled from "styled-components";

export const CreateHabitElement = styled.div`
    display:flex;
    flex-direction:column;

    width:340px;
    padding: 17px;
    margin-bottom:30px;
    background:#fff;
    border-radius: 5px;
`
export const HabitElement = styled.div`
    display:flex;
    flex-direction:column;

    position:relative;

    width:340px;
    padding: 15px;
    padding-right:30px;
    margin-bottom:10px;
    background:#fff;
    border-radius: 5px;
    margin-bottom: 10px;
`
export const HabitInput = styled.input`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background: ${ ({disabled}) => disabled ? "#F2F2F2;" : "#FFF" };

    height:45px;
    width:100%;
    padding:10px;
    margin-bottom:10px;

    font-size: 20px;
    color: #666;

    ::placeholder{
        color:#dbdbdb;
    }
`
export const HabitName = styled.h2`
    font-size: 20px;
    color: #666;
    font-weight:normal;
    word-break: break-word;

    margin-bottom: 10px;
`
export const Delete = styled.button`
    position:absolute;
    top:11px;
    right:11px;
`
export const HabitDays = styled.div`
    display:flex;
    gap:4px;

    
`
export const Day = styled.button`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    height:30px;
    width:30px;
    background: ${ ({selected}) => selected ? "#cfcfcf" : "#fff"};

    font-size: 19.976px;
    color: ${ ({selected}) => selected ? "#fff" : "#DBDBDB"};

`
export const Buttons = styled.div`
    display:flex;
    justify-content:flex-end;
    gap:20px;

    margin-top:30px;
`
export const Button = styled.button`
    background: ${ ({cancel}) => cancel ? "#fff" : "#52B6FF"};
    border-radius: 4.5px;

    display:flex;
    align-items:center;    
    justify-content:center;

    width:84px;
    height:35px;

    font-size: 16px;
    color: ${ ({cancel}) => cancel ? "#52B6FF" : "#fff"};
`
export const NoHabits = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-bottom:
`