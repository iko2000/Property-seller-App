import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 200px;
  height: 330px;
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 50%;
  filter: grayscale(10%);
  transition: 1s ease;
  border-radius: 10px;

  &:hover {
   transform: scale(1.2);
  filter: grayscale(0%);

  }
`;
const Name = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: white;
`;

const Price = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const Facilities = styled.div`
  width: 100%;
  height: 10%;
  display: flex;

  justify-content: center;
  align-items: center;
  
  transition: 2s ease-in-out;
  color: red;
`;
const Btn = styled.button`
  width: 70%;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  transition: 1s;
  font-size: 1em;
  &:hover {
    scale: 1.1;
    border: 3px dashed green;
    color: green;
    
  }
  &:active {
    color: green;
   
  }
`;
const Paragraph = styled.p`
  font-size: 1em;
`;

const Par2 = styled.p`
  font-size: 1em;
  
`

const Facilitip = styled.p`
  font-size: 1em;
`;

export default function Box(props: any) {
  const data = props.data;
  const [exchange, setExchange] = useState(0);
  const [gel, setGel] = useState(0);

  useEffect(() => {
    setExchange(2.8);
  }, []);
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://economia.awesomeapi.com.br/json/last/USD-GEL"
  //     );
  //     const data = response.data;
  //     setExchange(data.USDGEL.low);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    setGel(parseFloat((props.price * Number(exchange)).toFixed(2)));
  }, [exchange]);
  const [price, setPrice] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Image src={props.pic} />
        <Name>
          <Paragraph style={{color: "white" ,fontSize: "1.3em"}}>{props.name}</Paragraph>
        </Name>
        <Price>
          {price ?  ( <Par2 style={{color: "blue" ,fontSize: "0.8em"}}>{gel} GEL</Par2>) :
           (<Paragraph style={{color: "green" ,fontSize: "0.8em"}}>{props.price} $</Paragraph> )
           }
          <Paragraph style={{color: "black" ,fontSize: "0.9em", cursor: "pointer"}} onClick={() => setPrice(!price)}>კონვერტაცია</Paragraph>
        </Price>
       
        <Facilities>
          <Facilitip style={{color: "purple" , fontSize: "1.2em"}}>
            {props.facility} {props.land ? "კვ/მეტრი" : "ოთახი"}
          </Facilitip>
        </Facilities>
        <Btn
          onClick={() => {
            navigate(`/item`, {
              state: data[props.id - 1],
            });
          }}
        >
          გაიგე მეტი
        </Btn>
      </Container>
    </>
  );
}
