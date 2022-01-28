import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

function FormComponent(props) {

    const history = useHistory();
    const [username, setUserame] = useState("");
    const [data, setData] = useState({});
    const portClient = window.location.port;
    const hostname = window.location.hostname;
 


    let info = {
        port: portClient,
        name: username,
        host: hostname
    };


    const handleName= (event) => {
        setUserame(event.target.value);
        
    };


    const handleSubmit = (event) => {

        const url = `http://localhost:81/register`;
        fetch(url, {
            mode: 'no-cors',
            body: JSON.stringify(info),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            setData(res.data)
        });
        event.preventDefault();
        history.push("/chatroom")
    };

    return (
        <Wrapper onSubmit={handleSubmit}>
            <h1>Nom d'utilisateur : </h1>
            <label>
                <InputForm type="text" value={username} onChange={handleName} />
            </label>

            <InputForm type="submit" value="CONNEXION" />
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

