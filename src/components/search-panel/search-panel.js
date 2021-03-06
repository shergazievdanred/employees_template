import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component{
    state = {
        term: ''
    }

    onUpdateSearche = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearche(term)

    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdateSearche}/>
        )
    }
}

export default SearchPanel;