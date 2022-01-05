import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    height: 100vh;
    width: 375px;
    margin: 28px auto 0;
    padding: 70px 18px;
    background: #F2F2F2;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Header = styled.header`
    position: fixed;
    top: 0;

    width: 375px;
    height:70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px;

    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const Footer = styled.footer`
    position: fixed;
    bottom: 0;

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