import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about.js";
import Homepage from "./pages/homepage.js";
import Upload from "./pages/upload.js";
import Contact from "./pages/contact.js";
import Item from "./pages/Item.js";
import GlobalStyle from "./styled/globalStyles.js";
import styled from "styled-components";
import fb from "./assets/pics/icons/icon-facebook.svg";
import insta from "./assets/pics/icons/icon-instagram.svg";
import hamburger from "./assets/pics/icons/icon-hamburger.svg";
const Header = styled.header `
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  filter: blur(0.5px);
  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-end;
  }
`;
const Headerbox = styled.nav `
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;

  a {
    font-size: 1.5em;
    color: white;
  }

  @media screen and (max-width: 700px) {
    display: none;
    width: 100%;
    a {
      font-size: 1.2em;
    }
  }
`;
const Hamburger = styled.img `
  width: 50px;
  height: 40px;
  display: none;
  cursor: pointer;
  margin-right: 10%;

  @media (max-width: 768px) {
    display: block;
  }
`;
const BurgerHeaderbox = styled.nav `
  width: 30%;
  top: 82%;
  height: 220px;
  display: flex;
  right: 3%;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  flex-direction: column;
  position: absolute;
  background-color: white;
`;
const Body = styled.main `
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
`;
const Footer = styled.footer `
  margin-top: auto;

  width: 100%;
  height: 15rem;
  display: flex;

  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 15rem;
  }
`;
const Foot = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 700px) {
    font-size: 0.9em;
  }
`;
const Footdiv = styled.div `
  width: 50%;
  height: 100%;
  color: wheat;

  a {
    color: wheat;
  }
`;
const Footdiv2 = styled.div `
  width: 100%;
  height: 50%;
  color: wheat;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 700px) {
    font-size: 0.9em;
  }
`;
const Footdiv3 = styled.div `
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  @media (max-width: 776px) {
    padding: 18px;
  }
`;
const Span = styled.span `
  font-size: 1.1em;
  @media screen and (max-width: 700px) {
    font-size: 0.9em;
  }
`;
const Img1 = styled.img `
  width: 20px;
  height: 20px;
`;
export const activecontext = createContext(" ");
function App() {
    const [activepage, setActivepage] = useState("");
    const [ham, setHam] = useState(false);
    // useEffect(() => {
    // setActivepage("homepage");
    // }, [])
    return (_jsx(_Fragment, { children: _jsxs(activecontext.Provider, { value: setActivepage, children: [_jsx(GlobalStyle, {}), _jsxs(Header, { children: [_jsx(Hamburger, { onClick: () => setHam(!ham), src: hamburger }), ham ? (_jsxs(BurgerHeaderbox, { children: [" ", _jsxs(Link, { onClick: () => {
                                        setActivepage("homepage"), setHam(false);
                                    }, style: activepage === "homepage"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "black" }, to: "/", children: ["\u10DB\u10D7\u10D0\u10D5\u10D0\u10E0\u10D8", " "] }), _jsxs(Link, { onClick: () => {
                                        setActivepage("about"), setHam(false);
                                    }, style: activepage === "about"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "black" }, to: "/about", children: ["\u10E9\u10D5\u10D4\u10DC\u10E1 \u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1", " "] }), _jsx(Link, { onClick: () => {
                                        setActivepage("contact"), setHam(false);
                                    }, style: activepage === "contact"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "black" }, to: "/contact", children: "\u10E1\u10D0\u10D9\u10DD\u10DC\u10E2\u10D0\u10E5\u10E2\u10DD" }), _jsxs(Link, { onClick: () => {
                                        setActivepage("upload"), setHam(false);
                                    }, style: activepage === "upload"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "black" }, to: "/upload", children: ["\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0", " "] })] })) : null, _jsxs(Headerbox, { children: [_jsxs(Link, { onClick: () => setActivepage("homepage"), style: activepage === "homepage"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "white" }, to: "/", children: ["\u10DB\u10D7\u10D0\u10D5\u10D0\u10E0\u10D8", " "] }), _jsxs(Link, { onClick: () => setActivepage("about"), style: activepage === "about"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "white" }, to: "/about", children: ["\u10E9\u10D5\u10D4\u10DC\u10E1 \u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1", " "] }), _jsx(Link, { onClick: () => setActivepage("contact"), style: activepage === "contact"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "white" }, to: "/contact", children: "\u10E1\u10D0\u10D9\u10DD\u10DC\u10E2\u10D0\u10E5\u10E2\u10DD" }), _jsxs(Link, { onClick: () => setActivepage("upload"), style: activepage === "upload"
                                        ? { color: "blue", fontWeight: "bold" }
                                        : { color: "white" }, to: "/upload", children: ["\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0", " "] })] })] }), _jsx(Body, { onClick: () => setHam(false), children: _jsxs(Routes, { children: [_jsx(Route, { path: "*", element: _jsx(Homepage, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/upload", element: _jsx(Upload, {}) }), _jsx(Route, { path: "/item", element: _jsx(Item, {}) })] }) }), _jsx(Footer, { children: _jsxs(Foot, { children: [_jsxs(Footdiv, { children: [_jsx(Footdiv2, { style: { color: "white" }, children: "\u10E3\u10EB\u10E0\u10D0\u10D5\u10D8 \u10E5\u10DD\u10DC\u10D4\u10D1\u10D8\u10E1 \u10DE\u10DD\u10E0\u10E2\u10D0\u10DA\u10D8" }), " ", _jsxs(Footdiv3, { children: ["\u10D6\u10E3\u10D2\u10D3\u10D8\u10D3\u10D8 \u10E3\u10EB\u10E0\u10D0\u10D5\u10D8 \u10E5\u10DD\u10DC\u10D4\u10D1\u10D8\u10E1-\u10E7\u10D8\u10D3\u10D5\u10D0 \u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D0 - \u10EF\u10D2\u10E3\u10E4\u10D8 \u10E1\u10D0\u10D3\u10D0\u10EA \u10D8\u10DE\u10DD\u10D5\u10D8 \u10E8\u10D4\u10DC\u10D7\u10D5\u10D8\u10E1 \u10E1\u10D0\u10E1\u10E3\u10E0\u10D5\u10D4\u10DA \u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10E1.", " ", _jsx(Span, { children: "\u10E3\u10E4\u10DA\u10D4\u10D1\u10D4\u10D1\u10D8 2023. \u10E7\u10D5\u10D4\u10DA\u10D0 \u10E3\u10E4\u10DA\u10D4\u10D1\u10D0 \u10D3\u10D0\u10EA\u10E3\u10DA\u10D8\u10D0." }), " "] }), " "] }), _jsxs(Footdiv, { children: [_jsxs(Footdiv2, { children: [" ", _jsx(Link, { to: "/", children: "\u10DB\u10D7\u10D0\u10D5\u10D0\u10E0\u10D8" }), _jsx(Link, { to: "/aboutus", children: "\u10E9\u10D5\u10D4\u10DC\u10E1 \u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1" })] }), _jsxs(Footdiv2, { children: [" ", _jsx(Img1, { onClick: () => {
                                                    window.open("https://www.facebook.com/iviko.shengelia", "_blank");
                                                }, src: fb }), _jsx(Img1, { onClick: () => {
                                                    window.open("https://www.instagram.com/iko_shengelia/", "_blank");
                                                }, src: insta })] })] })] }) })] }) }));
}
export default App;
