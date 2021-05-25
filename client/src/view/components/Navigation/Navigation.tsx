import React from 'react';
import { IChannelInfo } from '../../../model/dto/IChannelInfo';
import NavItem from "./NavItem";
import "./navigation.css";

interface INavigationProps {
    channels: IChannelInfo[];
}

const Navigation = (props: INavigationProps) => (

    <div className="App">
        
        <header className="App-header">
            <p>Navigation Panel</p>
        </header>
        
        <div className="nav-items-container">
            {props.channels
            .map((channelInfo: IChannelInfo) => {
                return <NavItem key={channelInfo.channel_id} channel={channelInfo.channel}/>;
            })}
        </div>
    
    </div>

);

export default Navigation;