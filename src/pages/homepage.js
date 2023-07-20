import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import All from "../category/all.js";
import Flats from "../category/flats.js";
import Lands from "../category/lands.js";
import { useState, useEffect, useContext } from "react";
import land from "../assets/pics/icons/land.png";
import flat from "../assets/pics/icons/home.png";
import all from "../assets/pics/icons/all.png";
import { activecontext } from "../App.js";
const Maincontainer = styled.div `
  width: 95%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: fit-content;

  flex-direction: column;
  margin-top: 10px;
  gap: 20px;
  min-height: 100vh;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Filterbox = styled.div `
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section `
  width: 95%;
  height: fit-content;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Filter = styled.div `
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Filtercontainer = styled.div `
  width: 20%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
const Filterlabel = styled.label `
  font-size: 1em;

  @media screen and (max-width: 700px) {
    font-size: 0.8em;
  }
`;
const Filterinput = styled.input `
  width: 100%;
  height: 80%;

  cursor: pointer;
  &:checked {
    scale: 1.2;
    border: none;
    background-color: green;
  }
`;
const Action = styled.div `
  width: 100%;
  height: fit-content;
  display: flex;

  gap: 2%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Categorybox = styled.div `
  width: 10%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  a {
    color: white;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: row;
  }
`;
const Contentbox = styled.div `
  width: 88%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Categoryicons = styled.img `
  width: 20px;
  height: 20px;
`;
const Categorydiv = styled.div `
  width: 60%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    justify-content: center;
    gap: 5px;
  }
`;
export default function Homepage() {
    const [maxprice, setMaxprice] = useState(0);
    const [minprice, setMinprice] = useState(0);
    const [issell, setIsSell] = useState(true);
    const [data, setData] = useState({});
    const setActivepage = useContext(activecontext);
    useEffect(() => {
        setActivepage("homepage");
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api");
                const responseData = await response.json();
                setData(responseData);
            }
            catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);
    return (_jsx(_Fragment, { children: _jsx(Maincontainer, { children: _jsxs(Section, { children: [_jsx(Filterbox, { children: _jsxs(Filter, { children: [_jsxs(Filtercontainer, { children: [" ", _jsx(Filterlabel, { children: "\u10DB\u10D0\u10E5\u10E1\u10D8\u10DB\u10D0\u10DA\u10E3\u10E0\u10D8 \u10E4\u10D0\u10E1\u10D8" }), " ", _jsx(Filterinput, { min: minprice, max: "100000", type: "range", value: maxprice, onChange: (e) => {
                                                setMaxprice(e.target.value);
                                            } }), _jsx(Filterlabel, { children: maxprice })] }), _jsxs(Filtercontainer, { children: [" ", _jsx(Filterlabel, { children: "\u10DB\u10D8\u10DC\u10D8\u10DB\u10D0\u10DA\u10E3\u10E0\u10D8 \u10E4\u10D0\u10E1\u10D8" }), _jsx(Filterinput, { min: "100", max: maxprice, value: minprice, type: "range", onChange: (e) => {
                                                setMinprice(e.target.value);
                                            } }), _jsx(Filterlabel, { children: minprice })] }), _jsxs(Filtercontainer, { children: [" ", _jsx(Filterlabel, { children: "\u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D0\u10D3\u10D8" }), " ", _jsx(Filterinput, { style: { width: "5rem" }, onChange: () => setIsSell(!issell), type: "radio", checked: issell })] }), _jsxs(Filtercontainer, { children: [" ", _jsx(Filterlabel, { children: "\u10D2\u10D0\u10E5\u10D8\u10E0\u10D0\u10D5\u10D4\u10D1\u10D0\u10D3\u10D8" }), " ", _jsx(Filterinput, { onChange: () => setIsSell(!issell), type: "radio", checked: !issell })] })] }) }), _jsxs(Action, { children: [_jsxs(Categorybox, { children: [_jsxs(Categorydiv, { children: [" ", _jsx(Link, { to: "/", children: "\u10E7\u10D5\u10D4\u10DA\u10D0 " }), " ", _jsx(Categoryicons, { src: all }), " "] }), _jsxs(Categorydiv, { children: [" ", _jsx(Link, { to: "/lands", children: "\u10DB\u10D8\u10EC\u10D4\u10D1\u10D8" }), " ", _jsx(Categoryicons, { src: land }), " "] }), _jsxs(Categorydiv, { children: [" ", _jsx(Link, { to: "/flats", children: "\u10D1\u10D8\u10DC\u10D4\u10D1\u10D8" }), " ", _jsx(Categoryicons, { src: flat }), " "] })] }), _jsx(Contentbox, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(All, { min: minprice, max: maxprice, sell: issell, data: data }) }), _jsx(Route, { path: "/lands", element: _jsx(Lands, { min: minprice, max: maxprice, sell: issell, data: data }) }), _jsx(Route, { path: "/flats", element: _jsx(Flats, { min: minprice, max: maxprice, sell: issell, data: data }) })] }) })] })] }) }) }));
}
