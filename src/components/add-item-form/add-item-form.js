import React from 'react';
import './add-item-form.css'
export default class AddItemForm extends React.Component{

    state = {
        label : ''
    }
    
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };
    onSubmit =(event) => {
        event.preventDefault();
        this.props.onItemAdded (this.state.label)
        this.setState({
            label:''
        });
    }
    render () {
        return (
            <form className = 'add-item-form d-flex'
                    onSubmit={this.onSubmit}>
            <input type = 'text'
                    className = 'form-control'
                    onChange = {this.onLabelChange}
                    placeholder = 'to do item'
                    value = {this.state.label}
                    />
                <button
                    className = 'btn btn-outline-secondary'
                    >Add item</button>
            </form>
        )
    }
}