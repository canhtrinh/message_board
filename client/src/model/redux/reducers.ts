import { IChannelInfo } from "../dto/IChannelInfo"
import { IMessageInfo } from "../dto/IMessageInfo";
import { 
    CHANGE_CHANNEL,
    FETCH_CHANNELS_SUCCESS, 
    FETCH_MESSAGES_SUCCESS
} from "./action"

interface IChannelActions {
    type: string;
    payload: {
        channels: IChannelInfo[];
    }
}
export const channels = (state: IChannelInfo[] = [], action: IChannelActions) => {

    switch(action.type) {
        case FETCH_CHANNELS_SUCCESS:
            return action.payload.channels;
        default:
            return state;
    }

};

interface IChangeChannelActions {
    type: string;
    payload: {
        currentChannel: IChannelInfo;
    }
}
export const currentChannel = (state: IChannelInfo = {} as IChannelInfo, action: IChangeChannelActions) => {

    switch(action.type) {
        case CHANGE_CHANNEL:
            return action.payload.currentChannel;
        default:
            return state;
    }

};

interface IMessagesActions {
    type: string;
    payload: {
        messagesForChannel: IMessageInfo[];
    }
}
export const messages = (state: IMessageInfo[] = [], action: IMessagesActions) => {

    switch(action.type) {
        case FETCH_MESSAGES_SUCCESS:
            return action.payload.messagesForChannel;
        default:
            return state;
    }

};