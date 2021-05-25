
export interface IMessageItemProps {
    message: string;
}

const MessageItem = (props: IMessageItemProps) => (
    <div className="message-item">
        <p>{props.message}</p>
    </div>
);

export default MessageItem;