import Box from "../components/Box.js";
import styled from "styled-components";
import data from "../data.json"

const Main = styled.div`
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

const Head = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const H2 = styled.h2`
  font-size: 2em;
`;
export default function Lands(props: any) {
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

  const filtereddata = data.filter((element: any) => {
    if (element.land) {
      return element;
    }
  });

  return (
    <>
      <Head>
        <H2 style={{ color: "white" }}>მხოლოდ მიწები</H2>
      </Head>
      <Main>
        {props.min || props.max
          ? filtereddata.map((element: any) => {
              if (props.sell) {
                if (
                  element.price > props.min &&
                  element.price < props.max &&
                  element.sell
                ) {
                  return (
                    <Box
                      name={element.name}
                      price={element.price}
                      facility={element.facility}
                      pic={element.pic}
                      id={element.id}
                      land={element.land}
                      data={data}
                    />
                  );
                }
              } else {
                if (
                  element.price > props.min &&
                  element.price < props.max &&
                  element.loan
                ) {
                  return (
                    <Box
                      name={element.name}
                      price={element.price}
                      facility={element.facility}
                      pic={element.pic}
                      land={element.land}
                      data={data}
                      id={element.id}
                    />
                  );
                }
              }
            })
          : filtereddata.map((element:any) => {
              if (props.sell) {
                if (element.sell) {
                  return (
                    <Box
                      name={element.name}
                      price={element.price}
                      facility={element.facility}
                      pic={element.pic}
                      id={element.id}
                      land={element.land}
                      data={data}
                    />
                  );
                }
              } else {
                if (element.loan) {
                  return (
                    <Box
                      name={element.name}
                      price={element.price}
                      facility={element.facility}
                      pic={element.pic}
                      id={element.id}
                      land={element.land}
                      data={data}
                    />
                  );
                }
              }
            })}
      </Main>
    </>
  );
}
