import React, { Component } from 'react';

export default class CompNewPost extends Component {	
	constructor(props){
		super();

		this.state = {title: "", body: ""};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	
	handleSubmit(e){
		e.preventDefault();

		fetch('/api/makepost', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    title: this.state.title,
		    body: this.state.body
		  })
		});
	}

	handleInput(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render(){
		return (	
			<div>				
				<form onSubmit={this.handleSubmit}>
					<label>
						Title:
						<input type="text" value={this.state.title} name="title" onChange={this.handleInput} />
					</label>

					<label>
						Body:
						<input type="text" value={this.state.body} name="body" onChange={this.handleInput} />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}