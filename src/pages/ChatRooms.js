import './ChatRooms.css';

function ChatRoomsPage() {
    return (
        /* add class "splitScreen" to the parent div of the divs you want to be split */
        <div class="splitScreen">
            
            <div class="leftPane">

                <div>New Chats!</div>

                <ul>
                    <li>
                        New chat 1 from bob
                    </li>
                    <li>
                        New chat 2 from alice
                    </li>
                </ul>

                <div>Chat History</div>

                <ul>
                    <li>
                        Old chat with john
                    </li>
                    <li>
                        Old chat with emily
                    </li>
                </ul>

            </div>

            <div class="rightPane">
                DISPLAY ACTIVE CHAT
            </div>
            
        </div>

    );
}

export default ChatRoomsPage;