import { IChannelInfo } from "../dto/IChannelInfo"
import { 
    CHANGE_CHANNEL,
    FETCH_POSTS_SUCCESS 
} from "./action"

interface IChannelActions {
    type: string;
    payload: {
        channels: IChannelInfo[];
    }
}

export const channels = (state: IChannelInfo[] = [], action: IChannelActions) => {

    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
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