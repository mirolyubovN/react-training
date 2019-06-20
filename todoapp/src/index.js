import React from 'react'
import ReactDOM from'react-dom'

const el = (
	<div>
		<h1>My ToDo list</h1>
		<input placeholder = 'Search' />
		<ul>
			<li>Learn React</li>
			<li>Build todo app</li>
		</ul>
	</div>
);
ReactDOM.render(el, document.getElementById('root'));