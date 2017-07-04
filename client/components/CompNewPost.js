import React, { Component } from 'react';

export default class CompNewPost extends Component {	
	constructor(props){
		super();

		this.state = {title: "", subtitle: "", body: "", imgurl: ""};

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
		    subtitle: this.state.subtitle,
		    body: this.state.body,
		    imgurl: this.state.imgurl
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
						<input type="text"
							value={this.state.title}
							name="title"
							onChange={this.handleInput} />
					</label>

					<br/>

					<label>
						Subtitle:
						<input type="text"
							value={this.state.subtitle}
							name="subtitle"
							onChange={this.handleInput} />
					</label>

					<br/>

					<label>
						Body:
						<input type="text"
							value={this.state.body}
							name="body"
							onChange={this.handleInput} />
					</label>

					<br/>
					
					<label>
						Image URL:
						<input type="text"
							value={this.state.imgurl}
							name="imgurl"
							onChange={this.handleInput} />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}