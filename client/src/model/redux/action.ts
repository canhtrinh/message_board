
import axios from 'axios'
import Rest from '../../controller/Rest'
import { IChannelInfo } from '../dto/IChannelInfo';
import { IMessageInfo } from '../dto/IMessageInfo';

/*********/
export const FETCH_CHANNELS_SUCCESS: string = "FETCH_CHANNELS_SUCCESS";
const fetchChannelsCallback = (channels: IChannelInfo[]) => ({
    type: FETCH_CHANNELS_SUCCESS,
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

/*********/
export const CHANGE_CHANNEL: string = "CHANGE_CHANNEL";
export const changeChannel = (currentChannel: IChannelInfo) => {
    // fetchMessages(currentChannel.channel_id);
    return {
        type: CHANGE_CHANNEL,
        payload: { currentChannel }
    }
};

/*********/
export const FETCH_MESSAGES_SUCCESS: string = "FETCH_MESSAGES_SUCCESS";
const fetchMessagesCallback = (messagesForChannel: any[]) => ({
    type: FETCH_MESSAGES_SUCCESS,
    payload: { messagesForChannel: messagesForChannel as any[] }
})

export const fetchMessages = (channel: number) => {
    console.log("calling fetch messges")
    return async (dispatch: any) => {
        try {
            let messagesForChannel: any[] = await Rest.getAllMessagesForChannel(channel) as IMessageInfo[];
            dispatch(fetchMessagesCallback(messagesForChannel));
        }
        catch (e) {
            console.log(e);
        }
    }
}