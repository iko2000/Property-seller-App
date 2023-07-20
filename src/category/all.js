import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Box from "../components/Box.js";
import data from "../data.json";
const Main = styled.div `
  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  row-gap: 20px;
  justify-content: center;
`;
const Head = styled.div `
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H2 = styled.h2 `
  font-size: 2em;
`;
export default function All(props) {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("http://localhost:3000/api");
    //       const responseData = await response.json();
    //       setData(responseData);
    //     } catch (error) {
    //       console.error("Error:", error);
    //     }
    //   };
    //   fetchData();
    // }, []);
    // console.log("SECONDARY DATA", data);
    return (_jsxs(_Fragment, { children: [_jsx(Head, { children: _jsx(H2, { style: { color: "white" }, children: "\u10E7\u10D5\u10D4\u10DA\u10D0" }) }), _jsx(Main, { children: props.min || props.max
                    ? data.map((element) => {
                        if (props.sell) {
                            if (element.price > props.min &&
                                element.price < props.max &&
                                element.sell) {
                                return (_jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, land: element.land, id: element.id, data: data }));
                            }
                        }
                        else {
                            if (element.price > props.min &&
                                element.price < props.max &&
                                element.loan) {
                                return (_jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, id: element.id, land: element.land, data: data }));
                            }
                        }
                    })
                    : data.map((element) => {
                        if (props.sell) {
                            if (element.sell) {
                                return (_jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, id: element.id, land: element.land, data: data }));
                            }
                        }
                        else {
                            if (element.loan) {
                                return (_jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, id: element.id, land: element.land, data: data }));
                            }
                        }
                    }) })] }));
}
