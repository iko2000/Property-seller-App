import styled from "styled-components";
import fb from "../assets/pics/icons/icon-facebook.svg";
import insta from "../assets/pics/icons/icon-instagram.svg";
import { activecontext } from "../App.js";
import { useContext, useEffect } from "react";


const Maincontainer = styled.div`
  width: 80%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: fit-content;
  
  flex-direction: column;
  margin-top: 10px;
  gap: 20px;
`;
const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
`;
const H1 = styled.h1`
  font-size: 2em;
  color: white;

  @media screen and (max-width: 700px) {
    font-size: 1em;
  }
`;

const Body = styled.section`
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

const Arictle = styled.div`
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
const Bigp = styled.h4`
  font-size: 1em;
  @media screen and (max-width: 700px) {
    font-size: 0.8em;
  }
`;
const P = styled.p`
  font-size: 1em;
  @media screen and (max-width: 700px) {
    font-size: 0.9em;
  }
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const Side = styled.div`
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

  return (
    <>
      <Maincontainer>
        <Header>
          <H1>დაგვიკავშირდი </H1>
        </Header>
        <Body>
          <Arictle>
            <P>
              ჩვენი ჯგუფი მუდმივად მზად არის უპასუხოს თქვენს შეკითხვებს, ზარებს
              და წერილებს. ამიტომაც, ნუ იყოყმანებთ ჩვენთან დასაკავშირებლად,
              მსოფლიოს ნებისმიერი წერტილიდან ჩვენთან ხმის მოწვდენა შესაძლებელია
              მეილის - მეშვეობით, ქვემოთ მოცემულია თითეული მისამართი. ასევე,
              ჩვენთან მოქმედებს ცხელი ხაზის სერვისი, ყოველივე ზემოთ ჩამოთვლილს
              ემატება ფეისბუქ და ინსტაგრამ პლატფორმები.
            </P>
          </Arictle>
          <Arictle>
            <Bigp>მეილი</Bigp>
            <P>shengelia1800@gmail.com</P>
            <Bigp>ტელეფონი</Bigp>
            <P>+995 599-28-26-70</P>
            <Side>
              {" "}
              <Bigp>დააჭირე ლოგოს და დაგვიკავშირდი Facebook-ზე</Bigp>
              <Icon
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/iviko.shengelia",
                    "_blank"
                  );
                }}
                src={fb}
              />{" "}
            </Side>
            <Side>
              {" "}
              <Bigp>დააჭირე ლოგოს და დაგვიკავშირდი Instagram-ზე</Bigp>{" "}
              <Icon
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/iko_shengelia/",
                    "_blank"
                  );
                }}
                src={insta}
              />{" "}
            </Side>
          </Arictle>
        </Body>
      </Maincontainer>
    </>
  );
}
