import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
	constructor(props){
		super(props);
		this.addTask = this.addTask.bind(this);

	}

	addTask(item){
		return <li onClick={() => this.delete(item.key)}
				key={item.key}>{item.text}</li>
	}

	delete(key) {
		this.props.delete(key);
	}

	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.addTask); //iterate through entries array and turns it into list with key and item

		return (

			<ul className="theList">
				<FlipMove duration={250} easing="ease-out">
				{listItems}
				</FlipMove>
			</ul>

		);
	}
}

export default TodoItems;