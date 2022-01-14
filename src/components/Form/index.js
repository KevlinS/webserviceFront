import React from "react";
import { useState } from "react";
import styled from 'styled-components'

function FormComponent(props) {

    const [username, setUserame] = useState("");

    const handleChange = (event) => {
        setUserame(event.target.value);
    };

    const handleSubmit = (event) => {
        alert('Le nom a été soumis : ' + username);
        event.preventDefault();
    };



    return (
            <Wrapper onSubmit={handleSubmit}>
                <h1>USERNAME</h1>
                <label>
          <InputForm type="text" value={username} onChange={handleChange} />
                </label>
                <InputForm type="submit" value="SUBMIT" />
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

