import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import axios from "axios";

const ChatRoom = () => {

    const [messages, setMessages] = useState([]);
    const [data, setData] = useState([]);

    const Logout = () => {

        window.location.href = '/'
    }

    const setNewMessage = (msg) => {
        setMessages([
          ...messages,
          msg
        ]);
      }

    const sendMessage = (event) => {
        event.preventDefault();
        const msg = {
            text: event.target.text.value
          };
          setNewMessage(msg);
          event.target.text.value = '';
    }

    const handleSort = value => event => {
        console.log(value)
    }

    
    const ListUsers = async () => {

        const url = 'http://localhost:8000/users';
        await fetch(url).then(res => {
           res.json().then((user) => {
              setData(user.data);
            });
            
        });

    }
    
  useEffect( () => {
    setInterval(ListUsers,5000);
  }, []);


    return (
        <Wrapper>
            <SideBar>
                {data.map((user) =>
                    <li key={uniqid()}>
                        <a href="#" onClick={handleSort(user.name)}>{user.name}</a>
                    </li>
                )}

            </SideBar>

            <WrapperChat>
                <Menu>
                    <p >Welcome, <b></b></p>
                    <p ><a href="#" onClick={Logout}>Exit Chat</a></p>
                    <Both ></Both>
                </Menu>
                <ChatBox>
                {messages.map(msg => {
                    return (
                        <div key={uniqid()}>{"user"}: {msg.text}</div>
                    )
                  })}
                </ChatBox>

                <FormChat onSubmit={sendMessage}>
                    <UserMsg id="text" type="text"  size="63" />
                    <Submit type="submit" value="Send" />
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

export default ChatRoom;

