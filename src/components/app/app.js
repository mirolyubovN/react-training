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
			this.createToDoItem('Drink coffee'), 
			this.createToDoItem('Do homework'),
			this.createToDoItem('Play tennis')
		], 
		term : '',
		filter : 'active'
	}

	createToDoItem (label) {
		return {
			label,
			important : false,
			done: false,
			id: this.maxId++
		}
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
		const newItem = this.createToDoItem(text);

		this.setState(({todoData}) => {
			const newArray = [...todoData, newItem];
			return{
				todoData:newArray
			}
		});
	}

	toggleProperty (arr, id, propName) {
			const index = arr.findIndex ((el) => el.id===id);
			const oldItem = arr[index];
			const newItem = {...oldItem, [propName]: !oldItem[propName]};

			const before = arr.slice(0, index);
			const after = arr.slice(index+1);
			return [...before, newItem, ...after];
			
	}
	onToggleDone = (id) =>{
		this.setState(({todoData})=>{
			return{
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	}
	onToggleImportant = (id) =>{
		this.setState(({todoData})=>{
			return{
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
}
search = (items, term) =>{
	if (term ===''){
		return items;
	}
	return items.filter((item)=>{
		return item.label.toLowerCase().indexOf(term.toLowerCase())>-1;
	});
};

filter (items, filter) {
	switch(filter){
		case'all':
			return items;
		case 'active':
			return items.filter((item)=> !item.done);
		case 'done':
			return items.filter((item)=>item.done);
	}
}

onSearchChange = (term) =>{
	this.setState({term})
}
onFilterChange = (filter) =>{
	this.setState({filter})
}
	render () {
		const {todoData, term, filter} =this.state;
		const visibleItems = this.filter(this.search(todoData, term), filter)
		const doneCount = this.state.todoData.filter((el) => el.done).length;
		const todoCount = this.state.todoData.length - doneCount;
		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel onSearchChange = {this.onSearchChange}/>
					<ItemStatusFilter filter = {filter} onFilterChange = {this.onFilterChange}/>
				</div>

				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem} 
					onToggleDone = {this.onToggleDone}
					onToggleImportant = {this.onToggleImportant}
					/>

					<AddItemForm onItemAdded = {this.addItem}/>
			</div>
		);
	}
}