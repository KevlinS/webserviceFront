import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

function FormComponent(props) {

    const history = useHistory();
    const [username, setUserame] = useState("");
    const [data, setData] = useState({})
    let info = {
        port: 3000,
        name: username,
        host: "localhost"
    };


    const handleChange = (event) => {
        setUserame(event.target.value);
    };

    const handleSubmit = (event) => {
       
        const url = 'http://localhost:8000/register';
      fetch(url, {
         mode: 'no-cors',
         body:JSON.stringify(info),
         method: 'POST',
         headers: {
             'Content-Type': 'application/json;charset=utf-8'
         }
      }).then(res => {
         setData(res.data)
      });
      console.log(data)
        event.preventDefault();
        history.push("/chatroom")
    };

    return (
            <Wrapper onSubmit={handleSubmit}>
                <h1>USERNAME</h1>
                <label>
          <InputForm type="text" value={username} onChange={handleChange} />
                </label>
                <InputForm type="submit" value="CONNECT" />
            </Wrapper>

    );
}

const InputForm = styled.input`
    padding: 12px 20px;
    font-size: 1rem;
    border-style: solid;
    text-align: center;
    margin-bottom: 10px;
    border-color: black;
`

const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default FormComponent;

