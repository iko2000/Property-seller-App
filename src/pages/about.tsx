import styled from "styled-components";
import Img1 from "../assets/pics/about/banner.jpg";
import Img2 from "../assets/pics/about/aboutpic.png";

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
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Articlecontainer = styled.div`
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

const Articlebox = styled.div`
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
const Articleh1 = styled.h1`
  font-size: 2em;
`;
const Articletxt = styled.p`
  font-size: 0.8em;
`;

const Img = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 25% 10%;
`;

const Qrbox = styled.div`
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

  return (
    <>
      <Maincontainer>
        <Articlecontainer>
          <Articlebox>
            <Articleh1>ვინ ვართ ჩვენ ? </Articleh1>
            <Articletxt>
              ზუგდიდი უძრავი ქონების ყიდვა-გაყიდვა გახლავთ ფეისბუქ ჯგუფზე
              დაფუძნებული გაყიდვების ონლაინ კომპანია, ოპერირებს ზუგდიდის
              მუნიციპალიტეტში და მოიცავს მთელს სამეგრელოს, ჯგუფში თავსდება
              გაყიდვასთან დაკავშირებული პოსტები, გირავნობა, გაყიდვა, ქირაობა და
              სხვა მრავალი, ჯგუფში იდება როგორც ბინები, ასევე გასაყიდი მიწები და
              სხვადასხვა სახის ნაგებობები, ჯგუფი ფუქნციონირებს ეფექტიანად და
              ეხმარება კლიენტებს ყიდვა-გაყიდვის წარმოებაში. პროფესიონალიზმისა და
              მომხმარებლის კმაყოფილების ერთგულება, ჩვენი სააგენტო ცდილობს
              დააკმაყოფილოს კლიენტების მრავალფეროვანი საჭიროებები შეიძინეთ,
              გაყიდეთ ან იქირავეთ უძრავი ქონება რეგიონში - ჩვენი დახმარებით.
            </Articletxt>
          </Articlebox>
          <Articlebox>
            <Img src={Img1} />{" "}
          </Articlebox>
        </Articlecontainer>
        <Qrbox>
          <h3 style={{ color: "white", fontSize: "1em" }}>
            დაასკანერე კოდი ჯგუფის სანახავად
          </h3>
          <Img src={Img2} />
        </Qrbox>
      </Maincontainer>
    </>
  );
}
