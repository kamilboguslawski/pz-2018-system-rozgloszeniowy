import React, {Component} from 'react';
import './FileTransfer.css';

class FileTransfer extends Component {
    render() {
        return (
            <form method="POST" encType="multipart/form-data" action="uploadFile">
                <label>
                    Choose file
                    <input type="file"/>
                </label>
                <input type="submit" value="Upload"/>
            </form>
        )
    }
}

export default FileTransfer;