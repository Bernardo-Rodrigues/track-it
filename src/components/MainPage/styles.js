import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    min-height: 100vh;
    max-height: 100%;
    width: 375px;
    margin: auto;
    padding: 100px 18px 100px;
    background: #F2F2F2;

    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-bottom:
    }
`
export const HeaderElement = styled.header`
    position: fixed;
    top: 0;
    z-index:1;

    width: 375px;
    height:70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;

    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const Title = styled.div`
    width:100%;
    margin-bottom:29px;

    display:flex;
    align-items:center;
    justify-content:space-between;

    h2{
        font-size: 23px;
        font-weight:normal;
        color: #126BA5;
    }

    button{
        height:35px;
        width:40px;
        background: #52B6FF;
        border-radius: 4.5px;

        color:#fff;
        font-size: 27px;
    }
`
export const FooterElement = styled.footer`
    position: fixed;
    bottom: 0;
    z-index:1;

    width: 375px;
    height:70px;
    background:#fff;

    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
export const Button = styled(Link)`
    font-size: 18px;
    color: #52B6FF;
`
export const TodayButton = styled(Link)`
    height:91px;
    width:91px;
    margin-bottom:40px;

    font-size: 18px;
    color: #FFF;

    background: #52B6FF;
    border-radius:50%;
`