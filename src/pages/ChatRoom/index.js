import React from "react";
import styled from "styled-components";
import { useState } from "react";


const ChatRoom = () => {
    var userList = [
        { name: "USER1", port: 8000, host: "localhost" },
        { name: "USER2", port: 8000, host: "localhost" },
        { name: "USER3", port: 8000, host: "localhost" },
        { name: "USER4", port: 8000, host: "localhost" },
    ]

    const Logout = () => {

        window.location.href = '/'
    }


    const [message, setMessage] = useState("");
    const [chatBox, setChatBox] = useState("");
    
    const handleMessage = (event) => {
        setMessage(event.target.value)
    
    }

    const handleChatBox = (event) => {
        setChatBox("username : " + message)
        setMessage("")
        event.preventDefault();
    }
  
    return (
        <Wrapper>
            <SideBar>
                {userList.map((user) =>
                    <li>
                        {user.name}
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
                    {chatBox}
                </ChatBox>

                <FormChat onSubmit={handleChatBox}>
                    <UserMsg id="inputmessage" type="text" value={message} onChange={handleMessage} size="63" />
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
margin-right: 50%;
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

