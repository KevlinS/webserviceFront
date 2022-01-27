import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import { useHistory } from "react-router-dom";

const ChatRoom = () => {

    const [messages, setMessages] = useState([]);
    const [data, setData] = useState([]);
    const [ownerName, setOwnerName] = useState('');
    const [withWho, setWithWho] = useState('');
    const history = useHistory();
    const portClient = window.location.port;
    const portServer = sessionStorage.getItem('portServer');

    const Logout = (event) => {
        event.preventDefault();
        for (var i = 0; i < data.length; i++) {
            if (data[i].port == portClient) {
                console.log(data[i].name)
                const url = `http://localhost:${portServer}/logout`;
                const info = {
                    port: portClient,
                    name: data[i].name,
                    host: "localhost"
                }
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
                history.push('/');
                alert("vous êtes déconnecté")
            }
        }
    }


    const setNewMessage = (msg) => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].port == portClient) {
                setOwnerName(data[i].name)
            }
        }
        setMessages([
            ...messages,
            msg
        ]);
    }

    const sendMessage = (event) => {
        event.preventDefault();
        const msg = {
            text: event.target.text.value,
            from: ownerName,
            to: withWho
        };
        setNewMessage(msg);
        event.target.text.value = '';
    }

    const handleSort = (event, value) => {
        if (value) {
            setWithWho(value.name)
            console.log(value.name)
        }
    }


    const ListUsers = async () => {

        const url = `http://localhost:${portServer}/users`;
        await fetch(url).then(res => {
            res.json().then((user) => {
                setData(user.data);

            });
        });
    }

    useEffect(() => {
        setInterval(ListUsers, 5000)
    }, []);


    return (
        <Wrapper>
            <SideBar>
                {data.map((user) =>
                    <li key={uniqid()}>
                        <a href="#" onClick={e => handleSort(e, user)}>{user.name}</a>
                    </li>
                )}

            </SideBar>

            <WrapperChat>
                <Menu>
                    <p >Bienvenue,<b></b></p>
                    <p ><Exit href="#" onClick={Logout}>Déconnexion</Exit></p>
                    <Both ></Both>
                </Menu>
                <ChatBox>
                    {messages.map(msg => {
                        return (
                            <div key={uniqid()}>{ownerName}: {msg.text} </div>
                        )
                    })}
                </ChatBox>

                <FormChat onSubmit={sendMessage}>
                    <UserMsg id="text" type="text" size="63" />
                    <Submit type="submit" value="Envoyer" />
                </FormChat>
            </WrapperChat>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    
`

const SideBar = styled.div`
    background:#8ab4f8;
    float: left;
    width: 15%;
    height: 500px;
    padding: 1%;

`

const Both = styled.div`
clear: both;
`

const Menu = styled.div`
padding:12.5px 25px 12.5px 25px;
`

const WrapperChat = styled.div`
margin-right: 40%;
padding-bottom:25px;
background:#EBF4FB;
width:504px;
border:1px solid #ACD8F0;
float: right;
`

const FormChat = styled.form`
margin:0;
padding:0;
`

const ChatBox = styled.div`
text-align:left;
margin:0 auto;
margin-bottom:25px;
padding:10px;
background:#fff;
height:270px;
width:430px;
border:1px solid #ACD8F0;
overflow:auto;
`

const UserMsg = styled.input`
    width:395px;
	border:1px solid #ACD8F0;
    margin-left: 25px;
`

const Submit = styled.input`
width: 60px;

`
const Exit = styled.a`
    color: red;

`
export default ChatRoom;

