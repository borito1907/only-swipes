import ChatItem from './ChatItem';

function ChatHistory(props) {
    return (
        <div>
        <div>New Chats!</div>
            <ul>
                {props.chats.filter(chat => chat.isNewChat).map(filteredChat => (
                    <ChatItem
                        id={filteredChat.id}
                        chatter1={filteredChat.chatter1}
                        chatter2={filteredChat.chatter2}
                        date={filteredChat.date} />
                ))}
            </ul>

        <div>Chat History</div>
            <ul>
                {props.chats.filter(chat => !chat.isNewChat).map(filteredChat => (
                    <ChatItem
                        id={filteredChat.id}
                        chatter1={filteredChat.chatter1}
                        chatter2={filteredChat.chatter2}
                        date={filteredChat.date} />
                ))}
            </ul>
        </div>

    );
}

export default ChatHistory;