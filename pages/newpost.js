import React, { Component } from 'react';
import Router from 'next/router';

import Layout from '../components/MyLayout.js';


export default class CompNewPost extends Component {	
	constructor(props){
		super();

		this.state = {title: "", subtitle: "", subtitle2: "", body: "", imgurl: "", redirect: false};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	
	handleSubmit(e){
		e.preventDefault();

		let lenChk = (i, len) => {return (i.length > len)};

		/*Simple check to see if imgurl starts with /images/*/
		let imgurlChk = this.state.imgurl.substring(0, 15) === "/static/images/",
			titleChk = lenChk(this.state.title, 3),
			subtitleChk = lenChk(this.state.subtitle, 3),
			bodyChk = lenChk(this.state.body, 3);

		/*If all fields pass validation, do the POST*/
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
			    subtitle2: this.state.subtitle2,
			    body: this.state.body,
			    imgurl: this.state.imgurl
			  })
			})
			.then(this.setState({title: "", subtitle: "", subtitle2: "", body: "", imgurl: ""}))
			.then(alert("Posted!"))
			.then(console.log("routing"))
			.then(Router.push({pathname: "/page", query: {page: 0}}, as: "/"))
		}
		else{
			alert("Make sure you have a title, subtitle, valid image and body.");
		}
	}

	/*Uploads an image to the backend*/
	/*Backend sends back a string for the image path
	OR an error
	Client later validates this image path and
	won't submit a new post unless its valid*/
	uploadImage(e){
		e.preventDefault();

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
		const 	target = event.target,
				value = target.value,
				name = target.name;

		this.setState({
			[name]: value
		});
	}

	render(){
		return (	
			<Layout>
			<div className="container push margin1em">				
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

					<label className="label">
						Subtitle 2:
						<input type="text"
							className="input"
							value={this.state.subtitle2}
							name="subtitle2"
							onChange={this.handleInput} />
					</label>

					<br/>

					<label className="label">
						Body:
						<textarea type="textarea"
							className="textarea"
							value={this.state.body}
							name="body"
							onChange={this.handleInput} />
					</label>

					<br/>
					
					<label className="label">
						Image URL:
						<input 							
							type="text"
							className="input input-imgurl"
							value={this.state.imgurl}
							name="imgurl" />						
					</label>

					<br/>

					<input className="button is-primary" type="submit" value="Submit" />
				</form>

				<form onSubmit={this.uploadImage}>

					<input type="file" name="sampleFile" className="upload-button" accept="image/*" />

					<br/>

					<input className="button is-danger" type="submit" value="Upload Image" />
			   </form>
			</div>
			</Layout>
		);
	}
}