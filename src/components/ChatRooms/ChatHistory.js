import ChatItem from './ChatItem';
import { useAuth } from '../../hooks/auth'

function ChatHistory(props) {
    const auth = useAuth();

    return (
        <div>
        <div>New Chats!</div>
            <ul>
                {props.chats.filter(chat => ((chat.chatter1 === auth.user.id ||
                                             chat.chatter2 === auth.user.id) &&
                                             chat.isNewChat)).map(filteredChat => (
                    <ChatItem
                        id={filteredChat.id}
                        chatter1={filteredChat.chatter1}
                        chatter2={filteredChat.chatter2}
                        date={filteredChat.date} 
                        selectChat={props.selectChat}
                    />
                ))}
            </ul>

        <div>Chat History</div>
            <ul>
                {props.chats.filter(chat => ((chat.chatter1 === auth.user.id ||
                                             chat.chatter2 === auth.user.id) &&
                                             !chat.isNewChat)).map(filteredChat => (
                    <ChatItem
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