import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Box from "../components/Box.js";
import { activecontext } from "../App.js";
import data from "../data.json"

const MainContainer = styled.div`
  width: 100%;
  height: 140vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: 450vh;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
const Firstfloor = styled.div`
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
const Secondfloor = styled.div`
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
const Content = styled.div`
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
const Mainbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3%;
`;

const Mainimg = styled.img`
  width: 80%;
  height: 80%;
`;
const H2 = styled.h2`
  font-size: 2.2em;
`;
const P = styled.p`
  font-size: 0.8em;
`;

const Bigp = styled.p`
  font-size: 1.2em;
`;

const Division = styled.div`
  width: 300px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Gallery = styled.div`
  width: 80%;
  height: 14%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
`;

const Gallerypic = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default function Item() {
  const location = useLocation();
  function getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [Specdata, setSpecdata] = useState<YourDataType[]>([]);
// const [generaldata, setGeneraldata] = useState<YourDataType[]>([]);
  interface YourDataType {
    id: number;
    name: string;
    price: number;
    facility: string;
    number: string;
    sell: boolean;
    loan: boolean;
    land: boolean;
    flat: boolean;
    pic: string;
    text: string;
    additional: string[];
  }
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
        const Random: number = getRandomNumber(3, 10);
        setSpecdata([
          responseData[Random],
          responseData[Random + 1],
          responseData[Random + 2],
          responseData[Random - 1],
        ]);
  }, []);

  const [galleryimg, setGalleryimg] = useState(location.state.pic);

  return (
    <>
      <MainContainer>
        <Container>
          <Firstfloor>
            <Content>
              <Mainbox>
                <Mainimg
                  onMouseEnter={() => setGalleryimg(location.state.pic)}
                  src={galleryimg}
                />
                <Gallery>
                  {/* <Gallerypic  onMouseEnter={() => setGalleryimg(img3)} src={location.state.additonal} />
                  <Gallerypic  onMouseEnter={() => setGalleryimg(img4)} src={img4} />
                  <Gallerypic  onMouseEnter={() => setGalleryimg(img5)} src={img5} />
                  <Gallerypic onMouseEnter={() => setGalleryimg(img6)} src={img6}  /> */}
                  {location.state.additional.map((element: any) => {
                    return (
                      <Gallerypic
                        onMouseEnter={() => setGalleryimg(element)}
                        onClick={() => setGalleryimg(element)}
                        src={element}
                      />
                    );
                  })}
                </Gallery>
              </Mainbox>
            </Content>
            <Content>
              <H2 style={{color: "wheat"}}>{location.state.name}</H2>
              <P  style={{color: "white"}}>{location.state.text}</P>

              <Division>
                <Bigp style={{ color: "grey" }}>ფასი: </Bigp>
                <P style={{ color: "white" }}> {location.state.price} $</P>
              </Division>
              <Division>
                <Bigp style={{ color: "grey" }}>საკონტაქტო: </Bigp>
                <P style={{ color: "white" }}> {location.state.number} </P>
              </Division>

              {location.state.sell ? (
                <Bigp style={{ color: "white" }}>იყიდება</Bigp>
              ) : null}
              {location.state.loan ? (
                <Bigp style={{ color: "white" }}>ქირავდება</Bigp>
              ) : null}
            </Content>
          </Firstfloor>
          <Secondfloor>
            {Specdata.map((element:any) => {
              return (
                <Box
                  name={element.name}
                  price={element.price}
                  facility={element.facility}
                  pic={element.pic}
                  land={element.land}
                  id={element.id}
                  data={data}
                />
              );
            })}
          </Secondfloor>
        </Container>
      </MainContainer>
    </>
  );
}
