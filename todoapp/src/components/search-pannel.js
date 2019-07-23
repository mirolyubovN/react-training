import React from "react"

const SearchPanel = () =>{
	const seatchText = 'Type here to search';
	const searchStyle = {
		fontSize: '20px'
	}
	return <input
	placeholder = {seatchText}
	style = {searchStyle}
	/>;
};

export default SearchPanel;