import React from 'react';
import './ChatRooms.css';
import ChatHistory from '../components/ChatRooms/ChatHistory';

import { useState, useEffect } from "react";
import { auth, db } from '../lib/firebase';
import { collection, getDocs, updateDoc, doc, addDoc, query, orderBy } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useAuth } from '../hooks/auth'

import { 
    Center,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    Link,
    Text
 } from '@chakra-ui/react'

import { passwordValidate } from '../utils/form-validate';

function ChatRoomsPage() {
    const [chats, setChats] = useState([]);
    const [chatID, setChatID] = useState(Number(0));

    var messagesRef = collection(db, "/chats/" + chatID + "/messages")
    const q = query(messagesRef, orderBy("date", "asc"))
    const [messages] = useCollectionData(q, {id: 'id'})

    const [messageText, setMessageText] = useState("");
    const chatsRef = collection(db, "chats");

    const auth = useAuth();

    useEffect(() => {

        const getChats = async () => {
            const data = await getDocs(chatsRef);
            setChats(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
        }

        getChats()
        setChatID(Number(0))

    }, [])

    const sendMessage = async () => {
        messagesRef = collection(db, "/chats/" + chatID + "/messages")
        await addDoc(messagesRef, {sender: auth.user.username, text: messageText, date: Number(Date.now())});

        document.getElementById("message-buffer").value = ""
    };

    const selectChat = async (id) => {
        setChatID(id);
        
        const chatDoc = doc(db, "chats", id)
        const newFields = {isNewChat: false}
        await updateDoc(chatDoc, newFields)

        const getChats = async () => {
            const data = await getDocs(chatsRef);
            setChats(data.docs.map((doc) =>({...doc.data(), id: doc.id})));
        }
        getChats()

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

            <div className="rightPane"><Box mt="12" ml="1" mr="4" maxW="md" p="2" borderWidth="1px" borderRadius="lg" borderColor="purple">

                {/* if chatID is zero (default), then we tell the user to select a chat
                    otherwise, display the associated messages with the current chat's id */}
                {chatID == Number(0) ? (

                    <p>Select a chat!</p>

                ) : (
                    
                    messages?.map(message => 
                        <p>{message.sender}: {message.text}</p>
                    )

                )}
            </Box>
                    <input className="borderInput" id="message-buffer" type="text" placeholder="Message"
                        onChange={(event) => {
                            setMessageText(event.target.value);
                        }}
                    />

                    <button onClick={() => {sendMessage(messageText)}}>
                        Send
                    </button>
            </div>
            
        </div>
    );
}

export default ChatRoomsPage;