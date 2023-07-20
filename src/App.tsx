import { useState, createContext } from "react";
import {  Routes, Route, Link } from "react-router-dom";
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


const Header = styled.header`
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
const Headerbox = styled.nav`
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
const Hamburger = styled.img`
  width: 50px;
  height: 40px;
  display: none;
  cursor: pointer;
  margin-right: 10%;

  @media (max-width: 768px) {
    display: block;
  }
`;
const BurgerHeaderbox = styled.nav`
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
const Body = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
`;
const Footer = styled.footer`
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
const Foot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 700px) {
    font-size: 0.9em;
  }
`;

const Footdiv = styled.div`
  width: 50%;
  height: 100%;
  color: wheat;

  a {
    color: wheat;
  }
`;

const Footdiv2 = styled.div`
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
const Footdiv3 = styled.div`
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
const Span = styled.span`
  font-size: 1.1em;
  @media screen and (max-width: 700px) {
    font-size: 0.9em;
  }
`;
const Img1 = styled.img`
  width: 20px;
  height: 20px;
`;

export const activecontext = createContext<any>(" ");
function App() {
  const [activepage, setActivepage] = useState("");
  const [ham, setHam] = useState(false);

  // useEffect(() => {
  // setActivepage("homepage");
  // }, [])

  return (
    <>
      <activecontext.Provider value={setActivepage}>
        <GlobalStyle />
        <Header>
          <Hamburger onClick={() => setHam(!ham)} src={hamburger} />
          {ham ? (
            <BurgerHeaderbox>
              {" "}
              <Link
                onClick={() => {
                  setActivepage("homepage"), setHam(false);
                }}
                style={
                  activepage === "homepage"
                    ? { color: "blue", fontWeight: "bold" }
                    : { color: "black" }
                }
                to="/"
              >
                მთავარი{" "}
              </Link>
              <Link
                onClick={() => {
                  setActivepage("about"), setHam(false);
                }}
                style={
                  activepage === "about"
                    ? { color: "blue", fontWeight: "bold" }
                    : { color: "black" }
                }
                to="/about"
              >
                ჩვენს შესახებ{" "}
              </Link>
              <Link
                onClick={() => {
                  setActivepage("contact"), setHam(false);
                }}
                style={
                  activepage === "contact"
                    ? { color: "blue", fontWeight: "bold" }
                    : { color: "black" }
                }
                to="/contact"
              >
                საკონტაქტო
              </Link>
              <Link
                onClick={() => {
                  setActivepage("upload"), setHam(false);
                }}
                style={
                  activepage === "upload"
                    ? { color: "blue", fontWeight: "bold" }
                    : { color: "black" }
                }
                to="/upload"
              >
                ატვირთვა{" "}
              </Link>
            </BurgerHeaderbox>
          ) : null}
          <Headerbox>
            <Link
              onClick={() => setActivepage("homepage")}
              style={
                activepage === "homepage"
                  ? { color: "blue", fontWeight: "bold" }
                  : { color: "white" }
              }
              to="/"
            >
              მთავარი{" "}
            </Link>
            <Link
              onClick={() => setActivepage("about")}
              style={
                activepage === "about"
                  ? { color: "blue", fontWeight: "bold" }
                  : { color: "white" }
              }
              to="/about"
            >
              ჩვენს შესახებ{" "}
            </Link>
            <Link
              onClick={() => setActivepage("contact")}
              style={
                activepage === "contact"
                  ? { color: "blue", fontWeight: "bold" }
                  : { color: "white" }
              }
              to="/contact"
            >
              საკონტაქტო
            </Link>
            <Link
              onClick={() => setActivepage("upload")}
              style={
                activepage === "upload"
                  ? { color: "blue", fontWeight: "bold" }
                  : { color: "white" }
              }
              to="/upload"
            >
              ატვირთვა{" "}
            </Link>
          </Headerbox>
        </Header>
        <Body onClick={() => setHam(false)}>
          <Routes>
            <Route path="*" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/item" element={<Item />} />
          </Routes>
        </Body>
        <Footer>
          <Foot>
            <Footdiv>
              <Footdiv2 style={{ color: "white" }}>
                უძრავი ქონების პორტალი
              </Footdiv2>{" "}
              <Footdiv3>
                ზუგდიდი უძრავი ქონების-ყიდვა გაყიდვა - ჯგუფი სადაც იპოვი შენთვის
                სასურველ პროდუქტს.{" "}
                <Span>უფლებები 2023. ყველა უფლება დაცულია.</Span>{" "}
              </Footdiv3>{" "}
            </Footdiv>
            <Footdiv>
              <Footdiv2>
                {" "}
                <Link to="/">მთავარი</Link>
                <Link to="/aboutus">ჩვენს შესახებ</Link>
              </Footdiv2>
              <Footdiv2>
                {" "}
                <Img1
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/iviko.shengelia",
                      "_blank"
                    );
                  }}
                  src={fb}
                />
                <Img1
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/iko_shengelia/",
                      "_blank"
                    );
                  }}
                  src={insta}
                />
              </Footdiv2>
            </Footdiv>
          </Foot>
        </Footer>
      </activecontext.Provider>
    </>
  );
}

export default App;
