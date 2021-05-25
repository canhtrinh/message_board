import React, { PureComponent } from 'react';
import "./editorpanel.css";
import'mdbreact/dist/css/mdb.css';
import { Button, Form } from 'react-bootstrap';
import { IChannelInfo } from '../../../model/dto/IChannelInfo';
import { IMessageInfo } from '../../../model/dto/IMessageInfo';

interface IEditorPanelProps {
    currentChannel: IChannelInfo;
    postMessage: (messageInfo: IMessageInfo) => void;
}

interface IEditorPanelState {
    inputValue: string;
}

class EditorPanel extends PureComponent<IEditorPanelProps, IEditorPanelState> {

    constructor(props: any, state: any) {

        super(props.state);
        
        this.state = {
            inputValue: ""
        }
        
        this.changeStateInputValue = this.changeStateInputValue.bind(this);

        this.onBtnClick = this.onBtnClick.bind(this);
    
    }

    private changeStateInputValue(e: any) {
        
        this.setState({ inputValue: e.target.value });
    
    };

    private generateTextArea() {

        return <div className="form-group">
            <Form >
                <Form.Group controlId="form-group-control">
                    <Form.Control 
                        onChange={this.changeStateInputValue}
                        as="textarea" 
                        placeholder="Comment here!" 
                        rows={50} 
                        value={this.state.inputValue}
                    />
                </Form.Group>
            </Form>
        </div>
    
    }

    private onBtnClick() {

        const { currentChannel, postMessage } = this.props;

        const { inputValue } = this.state;

        const payload: IMessageInfo = {
            message_id: null,
            message: inputValue,
            channel_id: currentChannel.channel_id
        }
        postMessage(payload);

        this.setState({ inputValue: "" });

    }

    private generateSubmitBtn() {

        const { inputValue } = this.state;
        
        return inputValue?.length > 0
            ? <div className="submit-btn">
                <Button onClick={this.onBtnClick} variant="primary">Post!</Button>
            </div>
            : null;
    
    }

    render() {
        
        const { currentChannel } = this.props;

        if (!currentChannel.channel_id)
            return <div className="editor-panel not-sidebar"></div>;
            
        return (<div className="editor-panel not-sidebar">
            {this.generateTextArea()}
            {this.generateSubmitBtn()}
        </div>);
    
    }

}

export default EditorPanel;