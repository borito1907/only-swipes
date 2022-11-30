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
        <div><Heading paddingLeft="2" mb="4" size="lg" color="purple" textAling="center">New Chats</Heading></div>
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

        <div className="ChatHistory"><Heading paddingLeft="4" mb="4" size="sm" color="purple" textAling="center">Chat History</Heading></div>
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