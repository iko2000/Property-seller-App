import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import { useEffect, useContext } from "react";
import { activecontext } from "../App.js";
import { useForm } from "react-hook-form";
const Maincontainer = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div `
  width: 80%;
  height: 70rem;

  display: flex;
  justify-content: center;
  color: white;
  @media screen and (max-width: 700px) {
    height: 90rem;
  }
`;
const Floors = styled.div `
  width: 50%;
  height: 10%;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-direction: column;
`;
const Label = styled.label `
  font-size: 1em;
  display: flex;
  justify-content: space-between;
`;
const Standartinput = styled.input `
  width: 200px;
  height: 30px;
`;
const Textinput = styled.input `
  width: 500px;
  height: 200px;
  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;
const Radioinput = styled.input `
  width: 20px;
  height: 20px;
`;
const Errorp = styled.p `
  font-size: 1em;
  color: red;
`;
const Submitbtn = styled.button `
  width: 100px;
  height: 50px;
`;
export default function Upload() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => sendDataToServer(data);
    const sendDataToServer = async (info) => {
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
        }
        catch (error) {
            console.error("Error:", error);
        }
    };
    const setActivepage = useContext(activecontext);
    useEffect(() => {
        setActivepage("upload");
    }, []);
    return (_jsx(_Fragment, { children: _jsx(Maincontainer, { children: _jsx(Container, { children: _jsxs("form", { style: {
                        width: "100%",
                        height: "90%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "10px",
                    }, onSubmit: handleSubmit(onSubmit), children: [_jsx(Floors, { children: "\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D4\u10D7 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E5\u10DD\u10DC\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10E1\u10D0\u10EE\u10D4\u10D1 \u10D8\u10DC\u10E4\u10DD\u10E0\u10DB\u10D0\u10EA\u10D8\u10D0 " }), _jsxs(Floors, { children: [_jsx(Label, { children: "\u10E1\u10D0\u10EE\u10D4\u10DA\u10D8" }), _jsx(Standartinput, { placeholder: "\u10E1\u10D0\u10EE\u10D4\u10DA\u10D8", ...register("name", {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/i,
                                        maxLength: 20,
                                        minLength: 3,
                                    }) }), errors.Name && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0\u10D0 " }), " "] }), _jsxs(Floors, { style: { flexDirection: "column" }, children: [_jsx(Label, { children: "\u10D0\u10E6\u10EC\u10D4\u10E0\u10D0" }), _jsx(Textinput, { placeholder: "\u10D0\u10E6\u10EC\u10D4\u10E0\u10D0", ...register("Description", {
                                        required: true,
                                        maxLength: 150,
                                        minLength: 5,
                                    }) }), errors.Description && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0\u10D0... " }), " "] }), _jsxs(Floors, { children: [_jsx(Label, { children: "\u10E4\u10D0\u10E1\u10D8 \u10D0\u10DB\u10D4\u10E0\u10D8\u10D9\u10E3\u10DA \u10D3\u10DD\u10DA\u10D0\u10E0\u10E8\u10D8" }), _jsx(Standartinput, { placeholder: "\u10E4\u10D0\u10E1\u10D8 \u10D3\u10DD\u10DA\u10D0\u10E0\u10D4\u10D1\u10E8\u10D8", ...register("Price", {
                                        required: true,
                                        pattern: /^\d+$/,
                                        maxLength: 20,
                                        minLength: 3,
                                    }) }), errors.Price && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0\u10D0... " }), " "] }), _jsxs(Floors, { style: { flexDirection: "row" }, children: [_jsx(Label, { children: "\u10D1\u10D8\u10DC\u10D0" }), _jsx(Radioinput, { type: "radio", value: "Flat", ...register("TypeofProperty", { required: true }) }), _jsx(Label, { children: "\u10DB\u10D8\u10EC\u10D0" }), _jsx(Radioinput, { type: "radio", value: "Land", ...register("TypeofProperty", { required: true }) }), errors.TypeofProperty && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0\u10D0... " }), " "] }), _jsxs(Floors, { children: [" ", _jsx(Label, { children: "\u10D6\u10DD\u10DB\u10D0" }), _jsx(Standartinput, { placeholder: "\u10E5\u10DD\u10DC\u10D4\u10D1\u10D8\u10E1 \u10D6\u10DD\u10DB\u10D0", ...register("Facility", {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/i,
                                        maxLength: 15,
                                        minLength: 6,
                                    }) }), errors.Facility && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0... " }), " "] }), _jsxs(Floors, { children: [" ", _jsx(Label, { children: "\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D4\u10D7 \u10E4\u10DD\u10E2\u10DD" }), _jsx(Standartinput, { type: "file", ...register("Picture", {
                                        required: true,
                                    }) }), errors.Facility && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0... " }), " "] }), _jsxs(Floors, { style: { flexDirection: "row" }, children: [_jsx(Label, { children: "\u10D2\u10D0\u10E5\u10D8\u10E0\u10D0\u10D5\u10D4\u10D1\u10D0" }), _jsx(Radioinput, { type: "radio", value: "Rent", ...register("selltype", { required: true }) }), _jsx(Label, { children: "\u10D2\u10D0\u10E7\u10D8\u10D3\u10D5\u10D0" }), _jsx(Radioinput, { type: "radio", value: "Sell", ...register("selltype", { required: true }) }), _jsx(Label, { children: "Both" }), _jsx(Radioinput, { type: "radio", value: "Both", ...register("selltype", { required: true }) }), errors.selltype && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0\u10D0... " }), " "] }), _jsxs(Floors, { children: [_jsx(Label, { children: "\u10E2\u10D4\u10DA\u10D4\u10E4\u10DD\u10DC\u10D8\u10E1 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8" }), _jsx(Standartinput, { placeholder: "\u10E2\u10D4\u10DA\u10D4\u10E4\u10DD\u10DC\u10D8\u10E1 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8", ...register("PhoneNumber", {
                                        required: true,
                                        pattern: /^\d+$/,
                                        maxLength: 15,
                                        minLength: 6,
                                    }) }), errors.PhoneNumber && _jsx(Errorp, { children: "\u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0..." }), " "] }), _jsx(Floors, { children: " " }), _jsxs(Floors, { children: [_jsx(Submitbtn, { type: "submit", children: "\u10D2\u10D0\u10D2\u10D6\u10D0\u10D5\u10DC\u10D0" }), " "] })] }) }) }) }));
}
