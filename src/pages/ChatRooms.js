import React from 'react';
import './ChatRooms.css';
import ChatHistory from '../components/ChatRooms/ChatHistory';

import { useState, useEffect } from "react";
import { db } from '../lib/firebase';
import { collection, getDocs, updateDoc, doc} from "firebase/firestore";
import { passwordValidate } from '../utils/form-validate';

function ChatRoomsPage() {
    const [chats, setChats] = useState([]);
    const [chatID, setChatID] = useState(Number(0));
    const [messages, setMessages] = useState([]);
    const chatsRef = collection(db, "chats");

    useEffect(() => {

        const getChats = async () => {
            const data = await getDocs(chatsRef);
            setChats(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
        }

        getChats()
        setChatID(Number(0))

    }, [])

    const selectChat = async (id) => {
        setChatID(id);
        
        const userDoc = doc(db, "chats", id)
        const newFields = {isNewChat: false}
        await updateDoc(userDoc, newFields)

        const messagesRef = collection(db, "/chats/" + id + "/messages")

        const getMessages = async () => {
            const data = await getDocs(messagesRef);
            setMessages(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
        }
        
        getMessages()
    }


    return (
        /* add class "splitScreen" to the parent div of the divs you want to be split */
        <div className="splitScreen">
            
            <div className="leftPane">
                <ChatHistory 
                    chats = {chats} 
                    selectChat = {selectChat}
                />
            </div>

            <div className="rightPane">

                {/* if chatID is zero (default), then we tell the user to select a chat
                    otherwise, display the associated messages with the current chat's id */}
                {chatID == Number(0) ? (

                    <p>Select a chat!</p>

                ) : (

                    messages.map(message => 
                        <p>{message.sender}: {message.text}</p>
                    )

                )}

            </div>
            
        </div>
    );
}

export default ChatRoomsPage;