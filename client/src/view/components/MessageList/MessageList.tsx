import { IChannelInfo } from "../../../model/dto/IChannelInfo";
import { IMessageInfo } from "../../../model/dto/IMessageInfo";
import MessageItem from "./MessageItem";
import "./messagelist.css";


export interface IMessageListProps {
    messagesForChannel: IMessageInfo[];
    currentChannel: IChannelInfo;
}

const MessageList = (props: IMessageListProps) => {
    
    return (<div className="message-list not-sidebar">
        <header className="message-header">
            { props.currentChannel.channel_id 
                ? <p>Messages for {props.currentChannel.channel}</p>
                : <p>Please select a channel</p> 
            }
        </header>
        <div className="message-list-container">
            {props.messagesForChannel
            .map((messageInfo: IMessageInfo) => (<MessageItem 
                key={messageInfo.message_id + new Date().toDateString()} 
                message={messageInfo.message}
            />
            ))}
        </div>
    </div>);
};

export default MessageList;