import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
  state = {
    term : ''
  }

  onSearchChange = (event) =>{
    const term = event.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  };
  render(){
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                onChange = {this.onSearchChange}
                value = {this.state.term} 
                />
    );
  };
}

