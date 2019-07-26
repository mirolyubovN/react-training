import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';

import './app.css';

export default class App extends React.Component {
  maxId = 100;
  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData})=>{
      const index = todoData.findIndex ((el) => el.id===id);
      const before = todoData.slice(0, index);
      const after = todoData.slice(index+1);
      const newState = [...before, ...after];

      return{
        todoData: newState
      }
    })
  }

  addItem = (text) =>{
    const newItem = {
      label : text,
      important : false,
      id: this.maxId++
    };
    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem];
      return{
        todoData:newArray
      }
    });
  }
  render () {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem} />

          <AddItemForm onItemAdded = {this.addItem}/>
      </div>
    );
  }
}