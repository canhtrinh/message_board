import React from 'react';
import { IChannelInfo } from '../../../model/dto/IChannelInfo';
import NavItem from "./NavItem";
import "./navigation.css";

interface INavigationProps {
    channels: IChannelInfo[];
    currentChannel: IChannelInfo;
    changeChannel: (channel: IChannelInfo) => void;
}

const Navigation = (props: INavigationProps) => (

    <div className="navigation sidebar">
        
        <header className="App-header">
            <p>Channel Selector</p>
        </header>
        
        <div className="nav-items-container">
            {props.channels
            .map((channelInfo: IChannelInfo) => (<NavItem 
                key={channelInfo.channel_id} 
                channel={channelInfo.channel}
                onClick={(e: any) => props.changeChannel(channelInfo)}
            />
            ))}
        </div>

        {props.currentChannel?.channel_id 
            ? <div className="current-channel-indicator">Current Channel: {props.currentChannel.channel}</div>
            : null
        }
    
    </div>

);

export default Navigation;