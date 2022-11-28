
function ChatItem(props) {
    return (
        <li 
        onClick={() => props.selectChat(props.id)}>
            {/* Might have to clear floats for this to work*/}
            {/* visit https://css-tricks.com/left-align-and-right-align-text-on-the-same-line/ */}
            <div>
                <span> 
                    Chat with {props.chatter1} and {props.chatter2}||
                </span>
                
                <span>
                    Date Created: {props.date}
                </span>
            </div>
        </li>
    );

}

export default ChatItem;