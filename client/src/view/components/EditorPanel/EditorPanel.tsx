import React from 'react'
import { MDBInput } from 'mdbreact';
import "./editorpanel.css";

// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

const EditorPanel = () => {
    return (
        <div className="editor-panel not-sidebar">
            <MDBInput type="textarea" label="Material textarea" rows="50" />
        </div>
    )
}

export default EditorPanel;