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

const Maincontainer = styled.div`
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
const Filterbox = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  width: 95%;
  height: fit-content;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Filter = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Filtercontainer = styled.div`
  width: 20%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
const Filterlabel = styled.label`
  font-size: 1em;

  @media screen and (max-width: 700px) {
    font-size: 0.8em;
  }
`;
const Filterinput = styled.input`
  width: 100%;
  height: 80%;

  cursor: pointer;
  &:checked {
    scale: 1.2;
    border: none;
    background-color: green;
  }
`;
const Action = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;

  gap: 2%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Categorybox = styled.div`
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
const Contentbox = styled.div`
  width: 88%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Categoryicons = styled.img`
  width: 20px;
  height: 20px;
`;
const Categorydiv = styled.div`
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
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Maincontainer>
        <Section>
          <Filterbox>
            <Filter>
              <Filtercontainer>
                {" "}
                <Filterlabel>მაქსიმალური ფასი</Filterlabel>{" "}
                <Filterinput
                  min={minprice}
                  max="100000"
                  type="range"
                  value={maxprice}
                  onChange={(e:any) => {
                    setMaxprice(e.target.value);
                  }}
                ></Filterinput>
                <Filterlabel>{maxprice}</Filterlabel>
              </Filtercontainer>
              <Filtercontainer>
                {" "}
                <Filterlabel>მინიმალური ფასი</Filterlabel>
                <Filterinput
                  min="100"
                  max={maxprice}
                  value={minprice}
                  type="range"
                  onChange={(e:any) => {
                    setMinprice(e.target.value);
                  }}
                ></Filterinput>
                <Filterlabel>{minprice}</Filterlabel>
              </Filtercontainer>
              <Filtercontainer>
                {" "}
                <Filterlabel>გაყიდვადი</Filterlabel>{" "}
                <Filterinput
                  style={{ width: "5rem" }}
                  onChange={() => setIsSell(!issell)}
                  type="radio"
                  checked={issell}
                ></Filterinput>
              </Filtercontainer>
              <Filtercontainer>
                {" "}
                <Filterlabel>გაქირავებადი</Filterlabel>{" "}
                <Filterinput
                  onChange={() => setIsSell(!issell)}
                  type="radio"
                  checked={!issell}
                ></Filterinput>
              </Filtercontainer>
            </Filter>
          </Filterbox>
          <Action>
            <Categorybox>
              <Categorydiv>
                {" "}
                <Link to="/">ყველა </Link> <Categoryicons src={all} />{" "}
              </Categorydiv>
              <Categorydiv>
                {" "}
                <Link to="/lands">მიწები</Link> <Categoryicons src={land} />{" "}
              </Categorydiv>
              <Categorydiv>
                {" "}
                <Link to="/flats">ბინები</Link> <Categoryicons src={flat} />{" "}
              </Categorydiv>
            </Categorybox>
            <Contentbox>
              <Routes>
                <Route
                  path="/"
                  element={
                    <All
                      min={minprice}
                      max={maxprice}
                      sell={issell}
                      data={data}
                    />
                  }
                />
                <Route
                  path="/lands"
                  element={
                    <Lands
                      min={minprice}
                      max={maxprice}
                      sell={issell}
                      data={data}
                    />
                  }
                />
                <Route
                  path="/flats"
                  element={
                    <Flats
                      min={minprice}
                      max={maxprice}
                      sell={issell}
                      data={data}
                    />
                  }
                />
              </Routes>
            </Contentbox>
          </Action>
        </Section>
      </Maincontainer>
    </>
  );
}
