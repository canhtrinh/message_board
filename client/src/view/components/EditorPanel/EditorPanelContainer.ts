import * as Redux from "react-redux";
import { IReduxState } from "../../../model/typings/IReduxState";
import { postMessage } from "../../../model/redux/action";
import EditorPanel from "./EditorPanel";
import { IMessageInfo } from "../../../model/dto/IMessageInfo";


const mapStateToProps = (state: IReduxState, ownProps: any) => {
    return {
        currentChannel: state.currentChannel
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        postMessage: (messageInfo: IMessageInfo) => dispatch(postMessage(messageInfo))
    }
};

const EditorPanelContainer = Redux.connect(mapStateToProps, mapDispatchToProps)(EditorPanel);

export default EditorPanelContainer;