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

		let lenChk = (i, len) => {return (i.length > len)};
		
		let imgurlChk = this.state.imgurl.substring(0, 8) === "/images/",
			titleChk = lenChk(this.state.title, 3),
			subtitleChk = lenChk(this.state.subtitle, 3),
			bodyChk = lenChk(this.state.body, 3);

			console.log("Values in order: " + imgurlChk + titleChk + subtitleChk + bodyChk);

		if(imgurlChk && titleChk && subtitleChk && bodyChk){
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
		else{
			console.log("Make sure you have a title, subtitle, valid image and body.");
		}
	}

	uploadImage(e){
		e.preventDefault();

		console.log();

		let data = new FormData();

		data.append('file', e.target.sampleFile.files[0]);

		fetch('/api/uploadimage', {
		  method: 'POST',
		  body: data
		})
		.then(res => res.text())
		.then((uploadedImageUrl) => this.setState({imgurl: uploadedImageUrl}));
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
						<input 							
							type="text"
							className="input"
							value={this.state.imgurl}
							name="imgurl" />						
					</label>

					<br/>

					<input className="button is-primary" type="submit" value="Submit" />
				</form>

				<form onSubmit={this.uploadImage}>

					<input type="file" name="sampleFile" accept="image/*" />

					<input className="button is-primary" type="submit" value="Submit" />

			   </form>
			</div>
		);
	}
}