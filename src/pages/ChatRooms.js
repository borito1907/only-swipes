import React from 'react';
import './ChatRooms.css';
import ChatHistory from '../components/ChatRooms/ChatHistory';

import { useState, useEffect } from "react";
import { auth, db } from '../lib/firebase';
import { collection, getDocs, updateDoc, doc, addDoc, query, orderBy} from "firebase/firestore";

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
    const [messages, setMessages] = useState([]);
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
        const messagesRef = collection(db, "/chats/" + chatID + "/messages")
        await addDoc(messagesRef, {sender: auth.user.username, text: messageText, date: Number(Date.now())});

        const getMessages = async () => {
            const q = query(messagesRef, orderBy("date", "asc"))
            const data = await getDocs(q)
            setMessages(data.docs.map((doc) => ({...doc.data(), id: doc.id})).sort((m1, m2) => m1.date < m2.date));
        } 
        getMessages()

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

        const messagesRef = collection(db, "/chats/" + id + "/messages")
        const getMessages = async () => {
            const q = query(messagesRef, orderBy("date", "asc"))
            const data = await getDocs(q)
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

            <div className="rightPane"><Box mt="12" ml="1" mr="4" maxW="md" p="2" borderWidth="1px" borderRadius="lg" borderColor="purple">

                {/* if chatID is zero (default), then we tell the user to select a chat
                    otherwise, display the associated messages with the current chat's id */}
                {chatID == Number(0) ? (

                    <p>Select a chat!</p>

                ) : (

                    messages.map(message => 
                        <p>{message.sender}: {message.text}</p>
                    )

                )}
            </Box>
                    <input id="message-buffer" type="text" placeholder="Message"
                        onChange={(event) => {
                            setMessageText(event.target.value);
                        }}
                    />

                    <button onClick={() => {sendMessage(messageText)}}>
                        Send
                    </button>
            </div>

            <button onClick={() => {handleCreate()}}>hi</button>
            
        </div>
    );
}

export default ChatRoomsPage;