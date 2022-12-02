import React from 'react';
import './ChatRooms.css';
import ChatHistory from '../components/ChatRooms/ChatHistory';

import { useState, useEffect } from "react";
import { auth, db } from '../lib/firebase';
import { collection, getDocs, updateDoc, doc, addDoc, query, orderBy } from "firebase/firestore";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useAuth } from '../hooks/auth'

import { 
    Box,
    Input,
    Button,
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

            <div className="rightPane">

                {/* if chatID is zero (default), then we tell the user to select a chat
                    otherwise, display the associated messages with the current chat's id */}
                {
                    
                    chatID == Number(0) ? (
                    <Box mt="24" ml="-8" mr="8" maxW="auto" p="8" borderWidth="1px" borderRadius="2xl" borderColor="purple">
                        <p>Select a chat to get started!</p>
                    </Box>

                ) : (
                    <Box overflowY='scroll' mt="24" ml="-8" mr="8" height="55vh" maxW="auto" p="4" borderWidth="1px" borderRadius="sm">
                   
                    {
                        messages?.map(message => 
                            <Box mt="2" ml="1" mr="4" maxW="md" p="2" borderWidth="1px" borderRadius="md" borderColor="purple">
                            <p>{message.sender}: {message.text}</p></Box>
                        )}
                    </Box> 
                 

                )
                }
                <Input mr="8" mt="12" ml="-8" size='md' width="sm" p="5" colorScheme="purple" borderWidth="1px" borderRadius="md" borderColor="gray" disabled={chatID == 0} id="message-buffer" type="text" placeholder="Message"
        _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: "purple",
        }}
        _focus={{
            borderColor: "purple",

        }}
        onChange={(event) => {
            setMessageText(event.target.value);
        }}
    />

    <Button mr="8" mt="4" type="submit" size="md" colorScheme="purple" loadingText="Send" disabled={chatID == 0 || document.getElementById("message-buffer").value == ""} onClick={() => {sendMessage(messageText)}}>
        <Text color="white">Send</Text>
    </Button>


        
            </div>
            
        </div>
    );
}


export default ChatRoomsPage;