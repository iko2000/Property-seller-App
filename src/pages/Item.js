import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Box from "../components/Box.js";
import { activecontext } from "../App.js";
import data from "../data.json";
const MainContainer = styled.div `
  width: 100%;
  height: 140vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: 450vh;
  }
`;
const Container = styled.div `
  width: 90%;
  height: 100%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Firstfloor = styled.div `
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  gap: 5%;
  border: 1px solid black;
  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column;
    height: 30%;
    gap: 20px;
    align-items: center;
  }
`;
const Secondfloor = styled.div `
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: 70%;
    gap: 1%;
  }
`;
const Content = styled.div `
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  @media screen and (max-width: 700px) {
    width: 90%;
    align-items: center;
  }
`;
const Mainbox = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3%;
`;
const Mainimg = styled.img `
  width: 80%;
  height: 80%;
`;
const H2 = styled.h2 `
  font-size: 2.2em;
`;
const P = styled.p `
  font-size: 0.8em;
`;
const Bigp = styled.p `
  font-size: 1.2em;
`;
const Division = styled.div `
  width: 300px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Gallery = styled.div `
  width: 80%;
  height: 14%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;
const Gallerypic = styled.img `
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
export default function Item() {
    const location = useLocation();
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const [Specdata, setSpecdata] = useState([]);
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       // const response = await fetch("http://localhost:3000/api");
    //       // const responseData = await response.json() as YourDataType[];
    //     } catch (error) {
    //       console.error("Error:", error);
    //     }
    //   };
    //   fetchData();
    // }, [location.state.name]);
    const setActivepage = useContext(activecontext);
    useEffect(() => {
        setActivepage("");
        const responseData = data;
        const Random = getRandomNumber(3, 10);
        setSpecdata([
            responseData[Random],
            responseData[Random + 1],
            responseData[Random + 2],
            responseData[Random - 1],
        ]);
    }, []);
    const [galleryimg, setGalleryimg] = useState(location.state.pic);
    return (_jsx(_Fragment, { children: _jsx(MainContainer, { children: _jsxs(Container, { children: [_jsxs(Firstfloor, { children: [_jsx(Content, { children: _jsxs(Mainbox, { children: [_jsx(Mainimg, { onMouseEnter: () => setGalleryimg(location.state.pic), src: galleryimg }), _jsx(Gallery, { children: location.state.additional.map((element) => {
                                                return (_jsx(Gallerypic, { onMouseEnter: () => setGalleryimg(element), onClick: () => setGalleryimg(element), src: element }));
                                            }) })] }) }), _jsxs(Content, { children: [_jsx(H2, { style: { color: "wheat" }, children: location.state.name }), _jsx(P, { style: { color: "white" }, children: location.state.text }), _jsxs(Division, { children: [_jsx(Bigp, { style: { color: "grey" }, children: "\u10E4\u10D0\u10E1\u10D8: " }), _jsxs(P, { style: { color: "white" }, children: [" ", location.state.price, " $"] })] }), _jsxs(Division, { children: [_jsx(Bigp, { style: { color: "grey" }, children: "\u10E1\u10D0\u10D9\u10DD\u10DC\u10E2\u10D0\u10E5\u10E2\u10DD: " }), _jsxs(P, { style: { color: "white" }, children: [" ", location.state.number, " "] })] }), location.state.sell ? (_jsx(Bigp, { style: { color: "white" }, children: "\u10D8\u10E7\u10D8\u10D3\u10D4\u10D1\u10D0" })) : null, location.state.loan ? (_jsx(Bigp, { style: { color: "white" }, children: "\u10E5\u10D8\u10E0\u10D0\u10D5\u10D3\u10D4\u10D1\u10D0" })) : null] })] }), _jsx(Secondfloor, { children: Specdata.map((element) => {
                            return (_jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, land: element.land, id: element.id, data: data }));
                        }) })] }) }) }));
}
