import React, {Component} from 'react';
import './SuggestionInput.css';
import {Input} from "reactstrap";

class SuggestionInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            showSuggestions: false
        }
    }


    render() {
        return (
            <div className="suggestion">
                <Input type="text" name="groupSearch" id="groupSearch"
                       className="suggestion--input"
                       value={this.state.query}
                       onChange={(e) => this.setState({query: e.target.value})}
                       onFocus={() => this.setState({showSuggestions: true})}
                />

                <ul className="suggestion--items-list">
                    {
                        this.state.showSuggestions ?
                            this.props.items.filter(item => {
                                if (this.state.query.length > 0) {
                                    return this.props.suggestionsLabel(item).toLowerCase().includes(this.state.query.toLowerCase());
                                }
                            }).slice(0, this.props.maxOnList).map(item =>
                                <li
                                    key={this.props.suggestionsValue(item)}
                                    onClick={() => this.props.onSelect(item)}
                                >
                                    {this.props.suggestionsLabel(item)}
                                </li>
                            )
                            :
                            null
                    }
                </ul>
            </div>
        )
    }
}

export default SuggestionInput;