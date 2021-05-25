import { IChannelInfo } from "../dto/IChannelInfo"
import { FETCH_POSTS_SUCCESS } from "./action"

interface IChannelActions {
    type: string;
    payload: {
        channels: IChannelInfo[];
    }
}

const channels = (state: IChannelInfo[] = [], action: IChannelActions) => {

    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
            return action.payload.channels;
        default:
            return state;
    }

}

export default channels;