import React from "react";
import { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

function FormComponent(props) {

    const history = useHistory();
    const [username, setUserame] = useState("");
    const [portServer, setPortServer] = useState("");
    const [data, setData] = useState({});
    const portClient = window.location.port;
 

   
    let info = {
        port: portClient,
        name: username,
        host: "localhost"
    };


    const handleName= (event) => {
        setUserame(event.target.value);
        
    };

    const handlePort = (event) => {
        setPortServer(event.target.value);
        
    };


    const handleSubmit = (event) => {

        const url = `http://localhost:${portServer}/register`;
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
        console.log(data)
        event.preventDefault();
        sessionStorage.setItem("portServer", portServer);
        history.push("/chatroom")
    };

    return (
        <Wrapper onSubmit={handleSubmit}>
            <h1>Nom d'utilisateur : </h1>
            <label>
                <InputForm type="text" value={username} onChange={handleName} />
            </label>
            <h1>se connecter sur le port :</h1>
            <label>
                <InputForm type="text" value={portServer} onChange={handlePort} />
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

