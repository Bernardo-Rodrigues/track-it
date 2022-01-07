import styled from "styled-components";

export const TodayHabit = styled.div`
    position:relative;
    width:340px;
    background:#fff;
    margin-bottom:10px;
    padding:15px 110px 17px 13px;
    word-break: break-word;

    h3{
        font-size: 20px;
        color: #666666;
        margin-bottom:7px;
    }
    p{
        font-size: 13px;
        color: #666666;
        line-height: 16px;
    }
`
export const Check = styled.div`
    position:absolute;
    width:69px;
    height:69px;
    top:13px;
    right:13px;

    background: ${ ({done}) => done ? "#8FC549" : "#EBEBEB" };
    border: 1px solid #E7E7E7;
    border-radius: 5px;

    display:flex;
    justify-content:center;
    align-items:center;
`
export const DayDetails = styled.div`
    display:flex;
    flex-direction: column;
    align-items:flex-start;

    width:100%;
    margin-bottom:28px;

    h2{
        font-size: 23px;
        color: #126BA5;
    }
`
export const Progress = styled.p`
    font-size: 18px;
    color: ${ ({haveProgress}) => haveProgress ? "#8FC549" : "#BABABA"};
`
export const Sequence = styled.span`
    margin-left: 3px;
    color: ${ ({green}) => green ? "#8FC549" : "#666666"};
`