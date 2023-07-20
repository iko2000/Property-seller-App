import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from "../components/Box.js";
import styled from "styled-components";
import data from "../data.json";
const Main = styled.div `
  width: 100%;
  height: fit-content;

  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: center;

  @media screen and (max-width: 700px) {
    row-gap: 20px;
  }


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
export default function Flats(props) {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('http://localhost:3000/api');
    //       const responseData = await response.json();
    //       setData(responseData);
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };
    //   fetchData();
    // }, []);
    const filtereddata = data.filter((element) => { if (element.flat) {
        return element;
    } });
    return _jsxs(_Fragment, { children: [_jsx(Head, { children: _jsx(H2, { style: { color: "white" }, children: "\u10DB\u10EE\u10DD\u10DA\u10DD\u10D3 \u10D1\u10D8\u10DC\u10D4\u10D1\u10D8" }) }), _jsx(Main, { children: props.min || props.max ? filtereddata.map((element) => {
                    if (props.sell) {
                        if (element.price > props.min && element.price < props.max && element.sell) {
                            return _jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, id: element.id, land: element.land, data: data });
                        }
                    }
                    else {
                        if (element.price > props.min && element.price < props.max && element.loan) {
                            return _jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, id: element.id, land: element.land, data: data });
                        }
                    }
                })
                    : filtereddata.map((element) => {
                        if (props.sell) {
                            if (element.sell) {
                                return _jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, id: element.id, land: element.land, data: data });
                            }
                        }
                        else {
                            if (element.loan) {
                                return _jsx(Box, { name: element.name, price: element.price, facility: element.facility, pic: element.pic, id: element.id, land: element.land, data: data });
                            }
                        }
                    }) })] });
}
