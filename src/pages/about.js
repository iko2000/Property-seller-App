import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import Img1 from "../assets/pics/about/banner.jpg";
import Img2 from "../assets/pics/about/aboutpic.png";
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
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Articlecontainer = styled.div `
  width: 80%;
  height: 60vh;

  display: flex;
  color: white;
  @media screen and (max-width: 700px) {
    width: 95%;
    flex-direction: column;
    height: 120vh;
  }
`;
const Articlebox = styled.div `
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 5px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Articleh1 = styled.h1 `
  font-size: 2em;
`;
const Articletxt = styled.p `
  font-size: 0.8em;
`;
const Img = styled.img `
  width: 90%;
  height: 90%;
  border-radius: 25% 10%;
`;
const Qrbox = styled.div `
  width: 50%;
  height: 30%;
  display: grid;
  place-items: center;
`;
export default function About() {
    const setActivepage = useContext(activecontext);
    useEffect(() => {
        setActivepage("about");
    }, []);
    return (_jsx(_Fragment, { children: _jsxs(Maincontainer, { children: [_jsxs(Articlecontainer, { children: [_jsxs(Articlebox, { children: [_jsx(Articleh1, { children: "\u10D5\u10D8\u10DC \u10D5\u10D0\u10E0\u10D7 \u10E9\u10D5\u10D4\u10DC ? " }), _jsx(Articletxt, { children: "\u10D6\u10E3\u10D2\u10D3\u10D8\u10D3\u10D8 \u10E3\u10EB\u10E0\u10D0\u10D5\u10D8 \u10E5\u10DD\u10DC\u10D4\u10D1\u10D8\u10E1 \u10E7\u10D8\u10D3\u10D5\u10D0-\u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D0 \u10D2\u10D0\u10EE\u10DA\u10D0\u10D5\u10D7 \u10E4\u10D4\u10D8\u10E1\u10D1\u10E3\u10E5 \u10EF\u10D2\u10E3\u10E4\u10D6\u10D4 \u10D3\u10D0\u10E4\u10E3\u10EB\u10DC\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D4\u10D1\u10D8\u10E1 \u10DD\u10DC\u10DA\u10D0\u10D8\u10DC \u10D9\u10DD\u10DB\u10DE\u10D0\u10DC\u10D8\u10D0, \u10DD\u10DE\u10D4\u10E0\u10D8\u10E0\u10D4\u10D1\u10E1 \u10D6\u10E3\u10D2\u10D3\u10D8\u10D3\u10D8\u10E1 \u10DB\u10E3\u10DC\u10D8\u10EA\u10D8\u10DE\u10D0\u10DA\u10D8\u10E2\u10D4\u10E2\u10E8\u10D8 \u10D3\u10D0 \u10DB\u10DD\u10D8\u10EA\u10D0\u10D5\u10E1 \u10DB\u10D7\u10D4\u10DA\u10E1 \u10E1\u10D0\u10DB\u10D4\u10D2\u10E0\u10D4\u10DA\u10DD\u10E1, \u10EF\u10D2\u10E3\u10E4\u10E8\u10D8 \u10D7\u10D0\u10D5\u10E1\u10D3\u10D4\u10D1\u10D0 \u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D0\u10E1\u10D7\u10D0\u10DC \u10D3\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DE\u10DD\u10E1\u10E2\u10D4\u10D1\u10D8, \u10D2\u10D8\u10E0\u10D0\u10D5\u10DC\u10DD\u10D1\u10D0, \u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D0, \u10E5\u10D8\u10E0\u10D0\u10DD\u10D1\u10D0 \u10D3\u10D0 \u10E1\u10EE\u10D5\u10D0 \u10DB\u10E0\u10D0\u10D5\u10D0\u10DA\u10D8, \u10EF\u10D2\u10E3\u10E4\u10E8\u10D8 \u10D8\u10D3\u10D4\u10D1\u10D0 \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10D1\u10D8\u10DC\u10D4\u10D1\u10D8, \u10D0\u10E1\u10D4\u10D5\u10D4 \u10D2\u10D0\u10E1\u10D0\u10E7\u10D8\u10D3\u10D8 \u10DB\u10D8\u10EC\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10E1\u10EE\u10D5\u10D0\u10D3\u10D0\u10E1\u10EE\u10D5\u10D0 \u10E1\u10D0\u10EE\u10D8\u10E1 \u10DC\u10D0\u10D2\u10D4\u10D1\u10DD\u10D1\u10D4\u10D1\u10D8, \u10EF\u10D2\u10E3\u10E4\u10D8 \u10E4\u10E3\u10E5\u10DC\u10EA\u10D8\u10DD\u10DC\u10D8\u10E0\u10D4\u10D1\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8\u10D0\u10DC\u10D0\u10D3 \u10D3\u10D0 \u10D4\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D0 \u10D9\u10DA\u10D8\u10D4\u10DC\u10E2\u10D4\u10D1\u10E1 \u10E7\u10D8\u10D3\u10D5\u10D0-\u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D8\u10E1 \u10EC\u10D0\u10E0\u10DB\u10DD\u10D4\u10D1\u10D0\u10E8\u10D8. \u10DE\u10E0\u10DD\u10E4\u10D4\u10E1\u10D8\u10DD\u10DC\u10D0\u10DA\u10D8\u10D6\u10DB\u10D8\u10E1\u10D0 \u10D3\u10D0 \u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10DA\u10D8\u10E1 \u10D9\u10DB\u10D0\u10E7\u10DD\u10E4\u10D8\u10DA\u10D4\u10D1\u10D8\u10E1 \u10D4\u10E0\u10D7\u10D2\u10E3\u10DA\u10D4\u10D1\u10D0, \u10E9\u10D5\u10D4\u10DC\u10D8 \u10E1\u10D0\u10D0\u10D2\u10D4\u10DC\u10E2\u10DD \u10EA\u10D3\u10D8\u10DA\u10DD\u10D1\u10E1 \u10D3\u10D0\u10D0\u10D9\u10DB\u10D0\u10E7\u10DD\u10E4\u10D8\u10DA\u10DD\u10E1 \u10D9\u10DA\u10D8\u10D4\u10DC\u10E2\u10D4\u10D1\u10D8\u10E1 \u10DB\u10E0\u10D0\u10D5\u10D0\u10DA\u10E4\u10D4\u10E0\u10DD\u10D5\u10D0\u10DC\u10D8 \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D4\u10D1\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EB\u10D8\u10DC\u10D4\u10D7, \u10D2\u10D0\u10E7\u10D8\u10D3\u10D4\u10D7 \u10D0\u10DC \u10D8\u10E5\u10D8\u10E0\u10D0\u10D5\u10D4\u10D7 \u10E3\u10EB\u10E0\u10D0\u10D5\u10D8 \u10E5\u10DD\u10DC\u10D4\u10D1\u10D0 \u10E0\u10D4\u10D2\u10D8\u10DD\u10DC\u10E8\u10D8 - \u10E9\u10D5\u10D4\u10DC\u10D8 \u10D3\u10D0\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D8\u10D7." })] }), _jsxs(Articlebox, { children: [_jsx(Img, { src: Img1 }), " "] })] }), _jsxs(Qrbox, { children: [_jsx("h3", { style: { color: "white", fontSize: "1em" }, children: "\u10D3\u10D0\u10D0\u10E1\u10D9\u10D0\u10DC\u10D4\u10E0\u10D4 \u10D9\u10DD\u10D3\u10D8 \u10EF\u10D2\u10E3\u10E4\u10D8\u10E1 \u10E1\u10D0\u10DC\u10D0\u10EE\u10D0\u10D5\u10D0\u10D3" }), _jsx(Img, { src: Img2 })] })] }) }));
}
