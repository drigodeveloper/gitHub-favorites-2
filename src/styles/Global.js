import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 }

 html, body, #root {
   min-height: 100%;
 }

 body {
   background: #0D2636;
   font-size: 14px;
   -webkit-font-smoothing: antialiased !important;
 }

 body, input, button, textarea {
   font-size: 14px;
    font-family: 'Roboto', serif;
 }

 a {
    text-decoration: none;
 }

 button, a {
    cursor: pointer;
    transition: filter 0.2;
 }

 button:hover, a:hover {
    filter: brightness(0.9);
 }
`;