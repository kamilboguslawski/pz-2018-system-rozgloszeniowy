import React, {Component} from 'react';
import './TextLogo.css';

class TextLogo extends Component {
    render() {
        return (
            <div className="text-logo" style={this.props.style}>
                <div className="text-logo--first-line">{this.props.firstLine}<span className="text-logo--first-line-small">{this.props.firstLineSmall}</span></div>
                <div className="text-logo--second-line">{this.props.secondLine}</div>
            </div>
        )
    }
}

export default TextLogo;