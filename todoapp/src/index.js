import React from 'react'
import ReactDOM from'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-pannel'
import ToDoList from './components/todo-list'

const App = () =>{
	return (
		<div>
			<span>{(new Date()).toString()}</span>
			<AppHeader/>
			<SearchPanel/>
			<ToDoList/>
		</div>
	);
}

ReactDOM.render(<App />,
	document.getElementById('root'));