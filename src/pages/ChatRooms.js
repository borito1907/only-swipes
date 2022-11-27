import React from 'react';
import './ChatRooms.css';
import ChatHistory from '../components/ChatRooms/ChatHistory';

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


/*
const DUMMY_DATA = [
    {
        id: 'chat1',
        chatter1: 'dillon',
        chatter2: 'nitin',
        date: '11/16/22',
        isNewChat: 1
    },
    {
        id: 'chat2',
        chatter1: 'dillon',
        chatter2: 'sahiti',
        date: '11/10/22',
        isNewChat: 0
    },
];
*/

function ChatRoomsPage() {
    const [chats, setChats] = useState([]);
    const chatsRef = collection(db, "chats");

    useEffect(() => {

        const getChats = async () => {
            const data = await getDocs(chatsRef);
            setChats(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
        }

        getChats()

        console.log("hello")

    }, [])

    return (
        /* add class "splitScreen" to the parent div of the divs you want to be split */
        <div className="splitScreen">
            
            <div className="leftPane">
                <ChatHistory chats = {chats} />
            </div>

            <div className="rightPane">
                DISPLAY ACTIVE CHAT
            </div>
            
        </div>
    );
}

export default ChatRoomsPage;