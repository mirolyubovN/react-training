import React from 'react'

import ToDoListItem from './todo-list-item'
const ToDoList = () =>{
	return (
		<ul>
			<li><ToDoListItem label = 'Drink vodka'/></li>
			<li><ToDoListItem label = 'Play dotka'
			important/></li>
		</ul>
	);
}
export default ToDoList;