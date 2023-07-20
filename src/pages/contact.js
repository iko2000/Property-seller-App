import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import fb from "../assets/pics/icons/icon-facebook.svg";
import insta from "../assets/pics/icons/icon-instagram.svg";
import { activecontext } from "../App.js";
import { useContext, useEffect } from "react";
const Maincontainer = styled.div `
  width: 80%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: fit-content;
  
  flex-direction: column;
  margin-top: 10px;
  gap: 20px;
`;
const Header = styled.div `
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
`;
const H1 = styled.h1 `
  font-size: 2em;
  color: white;

  @media screen and (max-width: 700px) {
    font-size: 1em;
  }
`;
const Body = styled.section `
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  

  @media screen and (max-width: 700px) {
    height: 100vh;
    flex-direction: column;
  }
`;
const Arictle = styled.div `
  width: 50%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;

  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Bigp = styled.h4 `
  font-size: 1em;
  @media screen and (max-width: 700px) {
    font-size: 0.8em;
  }
`;
const P = styled.p `
  font-size: 1em;
  @media screen and (max-width: 700px) {
    font-size: 0.9em;
  }
`;
const Icon = styled.img `
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const Side = styled.div `
  width: 400px;
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
`;
export default function Contact() {
    const setActivepage = useContext(activecontext);
    useEffect(() => {
        setActivepage("contact");
    }, []);
    return (_jsx(_Fragment, { children: _jsxs(Maincontainer, { children: [_jsx(Header, { children: _jsx(H1, { children: "\u10D3\u10D0\u10D2\u10D5\u10D8\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D8 " }) }), _jsxs(Body, { children: [_jsx(Arictle, { children: _jsx(P, { children: "\u10E9\u10D5\u10D4\u10DC\u10D8 \u10EF\u10D2\u10E3\u10E4\u10D8 \u10DB\u10E3\u10D3\u10DB\u10D8\u10D5\u10D0\u10D3 \u10DB\u10D6\u10D0\u10D3 \u10D0\u10E0\u10D8\u10E1 \u10E3\u10DE\u10D0\u10E1\u10E3\u10EE\u10DD\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC\u10E1 \u10E8\u10D4\u10D9\u10D8\u10D7\u10EE\u10D5\u10D4\u10D1\u10E1, \u10D6\u10D0\u10E0\u10D4\u10D1\u10E1 \u10D3\u10D0 \u10EC\u10D4\u10E0\u10D8\u10DA\u10D4\u10D1\u10E1. \u10D0\u10DB\u10D8\u10E2\u10DD\u10DB\u10D0\u10EA, \u10DC\u10E3 \u10D8\u10E7\u10DD\u10E7\u10DB\u10D0\u10DC\u10D4\u10D1\u10D7 \u10E9\u10D5\u10D4\u10DC\u10D7\u10D0\u10DC \u10D3\u10D0\u10E1\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D4\u10D1\u10DA\u10D0\u10D3, \u10DB\u10E1\u10DD\u10E4\u10DA\u10D8\u10DD\u10E1 \u10DC\u10D4\u10D1\u10D8\u10E1\u10DB\u10D8\u10D4\u10E0\u10D8 \u10EC\u10D4\u10E0\u10E2\u10D8\u10DA\u10D8\u10D3\u10D0\u10DC \u10E9\u10D5\u10D4\u10DC\u10D7\u10D0\u10DC \u10EE\u10DB\u10D8\u10E1 \u10DB\u10DD\u10EC\u10D5\u10D3\u10D4\u10DC\u10D0 \u10E8\u10D4\u10E1\u10D0\u10EB\u10DA\u10D4\u10D1\u10D4\u10DA\u10D8\u10D0 \u10DB\u10D4\u10D8\u10DA\u10D8\u10E1 - \u10DB\u10D4\u10E8\u10D5\u10D4\u10DD\u10D1\u10D8\u10D7, \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7 \u10DB\u10DD\u10EA\u10D4\u10DB\u10E3\u10DA\u10D8\u10D0 \u10D7\u10D8\u10D7\u10D4\u10E3\u10DA\u10D8 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8. \u10D0\u10E1\u10D4\u10D5\u10D4, \u10E9\u10D5\u10D4\u10DC\u10D7\u10D0\u10DC \u10DB\u10DD\u10E5\u10DB\u10D4\u10D3\u10D4\u10D1\u10E1 \u10EA\u10EE\u10D4\u10DA\u10D8 \u10EE\u10D0\u10D6\u10D8\u10E1 \u10E1\u10D4\u10E0\u10D5\u10D8\u10E1\u10D8, \u10E7\u10DD\u10D5\u10D4\u10DA\u10D8\u10D5\u10D4 \u10D6\u10D4\u10DB\u10DD\u10D7 \u10E9\u10D0\u10DB\u10DD\u10D7\u10D5\u10DA\u10D8\u10DA\u10E1 \u10D4\u10DB\u10D0\u10E2\u10D4\u10D1\u10D0 \u10E4\u10D4\u10D8\u10E1\u10D1\u10E3\u10E5 \u10D3\u10D0 \u10D8\u10DC\u10E1\u10E2\u10D0\u10D2\u10E0\u10D0\u10DB \u10DE\u10DA\u10D0\u10E2\u10E4\u10DD\u10E0\u10DB\u10D4\u10D1\u10D8." }) }), _jsxs(Arictle, { children: [_jsx(Bigp, { children: "\u10DB\u10D4\u10D8\u10DA\u10D8" }), _jsx(P, { children: "shengelia1800@gmail.com" }), _jsx(Bigp, { children: "\u10E2\u10D4\u10DA\u10D4\u10E4\u10DD\u10DC\u10D8" }), _jsx(P, { children: "+995 599-28-26-70" }), _jsxs(Side, { children: [" ", _jsx(Bigp, { children: "\u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4 \u10DA\u10DD\u10D2\u10DD\u10E1 \u10D3\u10D0 \u10D3\u10D0\u10D2\u10D5\u10D8\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D8 Facebook-\u10D6\u10D4" }), _jsx(Icon, { onClick: () => {
                                                window.open("https://www.facebook.com/iviko.shengelia", "_blank");
                                            }, src: fb }), " "] }), _jsxs(Side, { children: [" ", _jsx(Bigp, { children: "\u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4 \u10DA\u10DD\u10D2\u10DD\u10E1 \u10D3\u10D0 \u10D3\u10D0\u10D2\u10D5\u10D8\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D8 Instagram-\u10D6\u10D4" }), " ", _jsx(Icon, { onClick: () => {
                                                window.open("https://www.instagram.com/iko_shengelia/", "_blank");
                                            }, src: insta }), " "] })] })] })] }) }));
}
