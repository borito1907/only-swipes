import './ChatItems.css';
import { 
    Heading,
    Box,
    Text
 } 
 from '@chakra-ui/react'

function ChatItem(props) {
    return (
        <ul className="ChatWith">
        <Box bg="#E6E6FA" mx="auto" maxW="unset" maxH="sm" p="2" borderWidth="1px" borderRadius="inherit">
        <li 
        onClick={() => props.selectChat(props.id)}>
        
            {/* Might have to clear floats for this to work*/}
            {/* visit https://css-tricks.com/left-align-and-right-align-text-on-the-same-line/ */}
            <div>
                <span> 
                <Text fontSize="md">Chat with {props.chatter1} and {props.chatter2}
                </Text></span>
                
                <span>
                    <Text fontSize="sm">Date Created: {props.date}
                    </Text></span>
            </div>
        </li></Box></ul>
    );

}

export default ChatItem;