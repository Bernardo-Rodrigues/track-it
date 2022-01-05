import { createGlobalStyle } from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
`