import React, { Component } from 'react';

export default class CompNewPost extends Component {	
	constructor(props){
		super();

		this.state = {title: "", subtitle: "", body: "", imgurl: ""};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
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

	uploadImage(e){
		e.preventDefault();

		console.log();

		let data = new FormData();

		data.append('file', e.target.sampleFile.files[0]);

		fetch('/api/uploadimage', {
		  method: 'POST',
		  body: data
		});

		/*fetch('/api/uploadimage', {
		  method: 'POST',
		  headers: {
		    'Accept': 'multipart/form-data',
		    'Content-Type': 'multipart/form-data',
		  },
		  body: e.value
		  })
		});*/
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
			<div className="container">				
				<form onSubmit={this.handleSubmit}>
					<label className="label">
						Title:
						<input type="text"
							className="input"
							value={this.state.title}
							name="title"
							onChange={this.handleInput} />
					</label>

					<br/>

					<label className="label">
						Subtitle:
						<input type="text"
							className="input"
							value={this.state.subtitle}
							name="subtitle"
							onChange={this.handleInput} />
					</label>

					<br/>

					<label>
						Body:
						<input type="textarea"
							className="textarea"
							value={this.state.body}
							name="body"
							onChange={this.handleInput} />
					</label>

					<br/>
					
					<label>
						Image URL:
						<input type="text"
							className="input"
							value={this.state.imgurl}
							name="imgurl"
							onChange={this.handleInput} />						
					</label>

					<br/>

					<input className="button is-primary" type="submit" value="Submit" />
				</form>

				<form onSubmit={this.uploadImage}>

					<input type="file" name="sampleFile" />

					<input className="button is-primary" type="submit" value="Submit" />

			   </form>
			</div>
		);
	}
}