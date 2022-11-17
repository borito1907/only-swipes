import './ChatItem.css'

function ChatItem(props) {
    return (
        <li>
            {/* Might have to clear floats for this to work*/}
            {/* visit https://css-tricks.com/left-align-and-right-align-text-on-the-same-line/ */}
            <div>
                <p class="alignLeft"> 
                    Chat with {props.chatter1} and {props.chatter2}
                </p>
                
                <p class="alignRight">
                    Date Created: {props.date}
                </p>
            </div>
        </li>
    );
}

export default ChatItem;