
import axios from 'axios'
import Rest from '../../controller/Rest'
import { IChannelInfo } from '../dto/IChannelInfo';

export const FETCH_POSTS_SUCCESS: string = "FETCH_POSTS_SUCCESS";
const fetchChannelsCallback = (channels: IChannelInfo[]) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: { channels: channels as IChannelInfo[] }
})

export const fetchChannels = () => {
    return async (dispatch: any) => {
        try {
            let channels: IChannelInfo[] = await Rest.getAllChannels() as IChannelInfo[];
            dispatch(fetchChannelsCallback(channels));
        }
        catch (e) {
            console.log(e);
        }
    }
}


export const CHANGE_CHANNEL: string = "CHANGE_CHANNEL";
export const changeChannel = (currentChannel: IChannelInfo) => ({
    type: CHANGE_CHANNEL,
    payload: { currentChannel }
})