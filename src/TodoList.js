import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addTask = this.addTask.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addTask(e) {

		if (this._inputElement.value !== ""){
			var newTask = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newTask)
					};
			});

		}

		this._inputElement.value = "";
		console.log(this.state.items);
		e.preventDefault(); //stops page from refreshing everytime we submit form

	}

	deleteItem(key){
		var filterItems = this.state.items.filter(function (item) {
			return (item.key !== key)
		});

		this.setState({
			items: filterItems
		});
	} 

	render(){
		return(

			<div className="Outer">
				<div className="tdlMain">
					<div className="header">
						<form onSubmit={this.addTask}>
							<input ref={(a) => this._inputElement = a}	placeholder="Enter Task">
							</input>
							<button type="submit">ADD</button>
						</form>
						</div>
						<TodoItems entries={this.state.items}
									delete={this.deleteItem}/>
					</div>
				</div>
			);
	}
}

export default TodoList;