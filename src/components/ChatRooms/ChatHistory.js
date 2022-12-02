import ChatItem from './ChatItem';

import { 
    Heading,
 } 
 from '@chakra-ui/react'
 import './ChatItems.css';
 
import { useAuth } from '../../hooks/auth'

function ChatHistory(props) {
    const auth = useAuth();

    return (
        <div>
        <div><Heading mt="8" paddingLeft="4" mb="8" size="md" color="#CF9FFF" textAling="center">New Chats</Heading></div>
            <ul>
                {props.chats.filter(chat => ((chat.chatter1 === auth.user.username ||
                                             chat.chatter2 === auth.user.username) &&
                                             chat.isNewChat)).map(filteredChat => (
                    <ChatItem
                        key={filteredChat.id}
                        id={filteredChat.id}
                        chatter1={filteredChat.chatter1}
                        chatter2={filteredChat.chatter2}
                        date={filteredChat.date} 
                        selectChat={props.selectChat}
                    />
                ))}
            </ul>

        <div className="ChatHistory"><Heading mt="2" paddingLeft="4" mb="8" size="md" color="#CF9FFF" textAling="center">Chat History</Heading></div>
            <ul>
                {props.chats.filter(chat => ((chat.chatter1 === auth.user.username ||
                                             chat.chatter2 === auth.user.username) &&
                                             !chat.isNewChat)).map(filteredChat => (
                    <ChatItem
                        key={filteredChat.id}
                        id={filteredChat.id}
                        chatter1={filteredChat.chatter1}
                        chatter2={filteredChat.chatter2}
                        date={filteredChat.date}
                        selectChat={props.selectChat}
                    />
                ))}
            </ul>
        </div>

    );
}

export default ChatHistory;