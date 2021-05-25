import { IChannelInfo } from "../dto/IChannelInfo";
import { IMessageInfo } from "../dto/IMessageInfo";

export interface IReduxState {
    channels: IChannelInfo[];
    currentChannel: IChannelInfo;
    messages: IMessageInfo[];
}