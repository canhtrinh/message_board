import * as Redux from "react-redux";
import { IReduxState } from "../../../model/typings/IReduxState";
import MessageList from "./MessageList";


const mapStateToProps = (state: IReduxState, ownProps: any) => {
    return {
        messagesForChannel: state.messages,
        currentChannel: state.currentChannel
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
};

const MessageListContainer = Redux.connect(mapStateToProps, mapDispatchToProps)(MessageList);

export default MessageListContainer;