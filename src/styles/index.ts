import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        background: #353535;
        color: white;
        font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        min-height: 100vh;
    }

    .App{
        display: flex;
        justify-content: center;
        min-height: 100vh;
        width: 100vw;
    }

    .content {
        display: flex;
        max-width: 1264px;
        /* margin: 0 auto; */
        padding: 0 32px;
        justify-content: center;
    }

    input,button{
    outline: 0;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
    }
`;
