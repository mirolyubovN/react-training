import React from 'react';

const ToDoListItem = ({ label, important = false }) => {
	const spanStyle = {
		color: important ? 'tomato' : 'black'
	};
	return <span style = {spanStyle}>{label}</span>;
};

export default ToDoListItem;