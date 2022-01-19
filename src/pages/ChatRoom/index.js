import React from "react";
import styled from "styled-components";

function ChatRoom(props) {
    var userList = [
        {name : "test1", port : 8000, host : "localhost" },
        {name : "test2", port : 8000, host : "localhost" },
        {name : "test3", port : 8000, host : "localhost" },
        {name : "test4", port : 8000, host : "localhost" },
    ]
    
    return (
        <div>
            <SideBar>
            {userList.map((user) => 
                <li>
                    {user.name}
                </li>
            )}
            </SideBar>
        </div>
    );
}

const SideBar = styled.div`
    background: red;
    float: left;
`

export default ChatRoom;

