import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Container = styled.div `
  width: 200px;
  height: 330px;
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
  overflow: hidden;
`;
const Image = styled.img `
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
const Name = styled.div `
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: white;
`;
const Price = styled.div `
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const Facilities = styled.div `
  width: 100%;
  height: 10%;
  display: flex;

  justify-content: center;
  align-items: center;
  
  transition: 2s ease-in-out;
  color: red;
`;
const Btn = styled.button `
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
const Paragraph = styled.p `
  font-size: 1em;
`;
const Par2 = styled.p `
  font-size: 1em;
  
`;
const Facilitip = styled.p `
  font-size: 1em;
`;
export default function Box(props) {
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
    return (_jsx(_Fragment, { children: _jsxs(Container, { children: [_jsx(Image, { src: props.pic }), _jsx(Name, { children: _jsx(Paragraph, { style: { color: "white", fontSize: "1.3em" }, children: props.name }) }), _jsxs(Price, { children: [price ? (_jsxs(Par2, { style: { color: "blue", fontSize: "0.8em" }, children: [gel, " GEL"] })) :
                            (_jsxs(Paragraph, { style: { color: "green", fontSize: "0.8em" }, children: [props.price, " $"] })), _jsx(Paragraph, { style: { color: "black", fontSize: "0.9em", cursor: "pointer" }, onClick: () => setPrice(!price), children: "\u10D9\u10DD\u10DC\u10D5\u10D4\u10E0\u10E2\u10D0\u10EA\u10D8\u10D0" })] }), _jsx(Facilities, { children: _jsxs(Facilitip, { style: { color: "purple", fontSize: "1.2em" }, children: [props.facility, " ", props.land ? "კვ/მეტრი" : "ოთახი"] }) }), _jsx(Btn, { onClick: () => {
                        navigate(`/item`, {
                            state: data[props.id - 1],
                        });
                    }, children: "\u10D2\u10D0\u10D8\u10D2\u10D4 \u10DB\u10D4\u10E2\u10D8" })] }) }));
}
