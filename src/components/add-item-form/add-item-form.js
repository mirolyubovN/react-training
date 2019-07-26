import React from 'react';
import './add-item-form.css'
export default class AddItemForm extends React.Component{

    render () {
        return (
            <div className = 'add-item-form'>
                <button
                    className = 'btn btn-outline-secondary'
                    onClick = {() => this.props.onItemAdded('Hello world')}
                    >Add item</button>
            </div>
        )
    }
}