import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Link from 'next/link';

export default class CompPostsPost extends Component {	
	constructor(props){
		super();

		this.handleClick = this.handleClick.bind(this);
	}

	/*Render component based on its type. Featured are the first posts of each page*/
	/*props are mandatory for correct functioning of the component*/	
	postElementType(){
		if(this.props.type == false){
			/*Normal posts*/			
			return (	
				<Link as={`/p/${this.props.jsonid}`} href={`/post?id=${this.props.jsonid}`}>
				<div className="CompPost">				
					
						<div className=""><a href="" className="CompPost-title">{this.props.title}</a></div>
					
					<div className="CompPost-subtitle">{this.props.subtitle}</div>

					<div className="has-text-centered">
						<img src={this.props.imgurl} alt="ImageMissing" className="CompPost-image post-banner-size" />
					</div>

					<div className="CompPost-spacer">&nbsp;</div>

					<div className="CompPost-subtitle2">{this.props.subtitle2}</div>

					<div className="CompPost-body">{this.props.body}</div>
				</div></Link>
			);
		}
	}

	/*On click: check for notification permission,
	if it doesn't exist: request it,
	if permission available, show a notification*/	
	handleClick(e){

		e.preventDefault();
	}

	render(){
		return <div className="CompPostClickHandle" onClick={this.handleClick}>{this.postElementType()}</div>
	}
}