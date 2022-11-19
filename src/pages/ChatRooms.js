import './ChatRooms.css';
import ChatHistory from '../components/ChatRooms/ChatHistory';

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

function ChatRoomsPage() {
    return (
        /* add class "splitScreen" to the parent div of the divs you want to be split */
        <div class="splitScreen">
            
            <div class="leftPane">
                <ChatHistory chats = {DUMMY_DATA} />
            </div>

            <div class="rightPane">
                DISPLAY ACTIVE CHAT
            </div>
            
        </div>

    );
}

export default ChatRoomsPage;