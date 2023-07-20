import styled from "styled-components";
import { useEffect, useContext } from "react";
import { activecontext } from "../App.js";
import { useForm } from "react-hook-form";

const Maincontainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  height: 70rem;

  display: flex;
  justify-content: center;
  color: white;
  @media screen and (max-width: 700px) {
    height: 90rem;
  }
`;
const Floors = styled.div`
  width: 50%;
  height: 10%;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 1em;
  display: flex;
  justify-content: space-between;
`;

const Standartinput = styled.input`
  width: 200px;
  height: 30px;
`;
const Textinput = styled.input`
  width: 500px;
  height: 200px;
  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;
const Radioinput = styled.input`
  width: 20px;
  height: 20px;
`;
const Errorp = styled.p`
  font-size: 1em;
  color: red;
`;

const Submitbtn = styled.button`
  width: 100px;
  height: 50px;
`;

export default function Upload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => sendDataToServer(data);

  const sendDataToServer = async (info: any) => {
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const data = await response.json();
      console.log("Data sent successfully:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const setActivepage = useContext(activecontext);

  useEffect(() => {
    setActivepage("upload");
  }, []);

  return (
    <>
      <Maincontainer>
        <Container>
          <form
            style={{
              width: "100%",
              height: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Floors>ატვირთეთ თქვენი ქონების შესახებ ინფორმაცია </Floors>
            <Floors>
              <Label>სახელი</Label>
              <Standartinput
                placeholder="სახელი"
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 20,
                  minLength: 3,
                })}
              ></Standartinput>
              {errors.Name && <Errorp>შეცდომაა </Errorp>}{" "}
            </Floors>
            <Floors style={{ flexDirection: "column" }}>
              <Label>აღწერა</Label>
              <Textinput
                placeholder="აღწერა"
                {...register("Description", {
                  required: true,
                  maxLength: 150,
                  minLength: 5,
                })}
              ></Textinput>
              {errors.Description && <Errorp>შეცდომაა... </Errorp>}{" "}
            </Floors>
            <Floors>
              <Label>ფასი ამერიკულ დოლარში</Label>
              <Standartinput
                placeholder="ფასი დოლარებში"
                {...register("Price", {
                  required: true,
                  pattern: /^\d+$/,
                  maxLength: 20,
                  minLength: 3,
                })}
              ></Standartinput>
              {errors.Price && <Errorp>შეცდომაა... </Errorp>}{" "}
            </Floors>
            <Floors style={{ flexDirection: "row" }}>
              <Label>ბინა</Label>
              <Radioinput
                type="radio"
                value="Flat"
                {...register("TypeofProperty", { required: true })}
              ></Radioinput>
              <Label>მიწა</Label>
              <Radioinput
                type="radio"
                value="Land"
                {...register("TypeofProperty", { required: true })}
              ></Radioinput>
              {errors.TypeofProperty && <Errorp>შეცდომაა... </Errorp>}{" "}
            </Floors>
            <Floors>
              {" "}
              <Label>ზომა</Label>
              <Standartinput
                placeholder="ქონების ზომა"
                {...register("Facility", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                  maxLength: 15,
                  minLength: 6,
                })}
              ></Standartinput>
              {errors.Facility && <Errorp>შეცდომა... </Errorp>}{" "}
            </Floors>
            <Floors>
              {" "}
              <Label>ატვირთეთ ფოტო</Label>
              <Standartinput
                type="file"
                {...register("Picture", {
                  required: true,
                })}
              ></Standartinput>
              {errors.Facility && <Errorp>შეცდომა... </Errorp>}{" "}
            </Floors>
            <Floors style={{ flexDirection: "row" }}>
              <Label>გაქირავება</Label>
              <Radioinput
                type="radio"
                value="Rent"
                {...register("selltype", { required: true })}
              ></Radioinput>
              <Label>გაყიდვა</Label>
              <Radioinput
                type="radio"
                value="Sell"
                {...register("selltype", { required: true })}
              ></Radioinput>
              <Label>Both</Label>
              <Radioinput
                type="radio"
                value="Both"
                {...register("selltype", { required: true })}
              ></Radioinput>
              {errors.selltype && <Errorp>შეცდომაა... </Errorp>}{" "}
            </Floors>
            <Floors>
              <Label>ტელეფონის ნომერი</Label>
              <Standartinput
                placeholder="ტელეფონის ნომერი"
                {...register("PhoneNumber", {
                  required: true,
                  pattern: /^\d+$/,
                  maxLength: 15,
                  minLength: 6,
                })}
              ></Standartinput>
              {errors.PhoneNumber && <Errorp>შეცდომა...</Errorp>}{" "}
            </Floors>

            <Floors> </Floors>

            <Floors>
              <Submitbtn type="submit">გაგზავნა</Submitbtn>{" "}
            </Floors>
          </form>
        </Container>
      </Maincontainer>
    </>
  );
}
