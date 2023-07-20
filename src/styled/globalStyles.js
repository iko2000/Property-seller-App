import { createGlobalStyle } from 'styled-components';
import img from "../assets/pics/background1.jpg";
const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    /* background-color: rgb(41, 51, 92); */
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    /* background-repeat: no-repeat; */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
`;
export default GlobalStyle;
