import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.main`
    height: 100vh;
    width: 375px;
    margin:auto;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`
export const Input = styled.input`
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    outline: 0; 
    background: ${ ({disabled}) => disabled ? "#F2F2F2;" : "#FFF" };

    width: 303px;
    height: 45px;
    padding: 10px;

    ::placeholder{
        font-size: 20px;
        color: #DBDBDB;
    }
`
export const Button = styled.button`
    background: #52B6FF;
    opacity: ${ ({disabled}) => disabled ? "0.7" : "1" };
    border-radius: 4.5px;
    border:0;
    ${ ({disabled}) => !disabled && "cursor:pointer"};

    width: 303px;
    height: 45px;

    font-size: 21px;
    color: #FFFFFF;
`
export const StyledLink = styled(Link)`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;

    margin-top: 25px;
`