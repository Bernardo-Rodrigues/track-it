import styled, { createGlobalStyle } from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-circular-progressbar/dist/styles.css';

export const GlobalStyle = createGlobalStyle`
	*{
        margin:0;
        padding:0;
		box-sizing:border-box;

		font-family: 'Lexend Deca', sans-serif;
	}
    a{
		text-decoration: none;
	}
    button{
        background:0;
        border:0;
        cursor: pointer;
    }
`