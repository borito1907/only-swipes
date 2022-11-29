import React from 'react';
import './ChatRooms.css';
import ChatHistory from '../components/ChatRooms/ChatHistory';

import { useState, useEffect } from "react";
import { auth, db } from '../lib/firebase';
import { collection, getDocs, updateDoc, doc, addDoc} from "firebase/firestore";

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
        console.log(messageText);

        const messagesRef = collection(db, "/chats/" + chatID + "/messages")
        await addDoc(messagesRef, {sender: auth.user.username, text: messageText});
    };

    const selectChat = async (id) => {
        setChatID(id);
        
        const chatDoc = doc(db, "chats", id)
        const newFields = {isNewChat: false}
        await updateDoc(chatDoc, newFields)

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
                    <input type="text" placeholder="Message"
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