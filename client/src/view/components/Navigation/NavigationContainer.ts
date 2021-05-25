import * as Redux from "react-redux";
import { IChannelInfo } from "../../../model/dto/IChannelInfo";
import { changeChannel, fetchMessages } from "../../../model/redux/action";
import { IReduxState } from "../../../model/typings/IReduxState";
import Navigation from "./Navigation";


const mapStateToProps = (state: IReduxState, ownProps: any) => {
    return {
        channels: state.channels,
        currentChannel: state.currentChannel
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeChannel: (channel: IChannelInfo) => {
            dispatch(changeChannel(channel));
            dispatch(fetchMessages(channel.channel_id));
        }
    }
};

const MappedNavigationContainer = Redux.connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default MappedNavigationContainer;