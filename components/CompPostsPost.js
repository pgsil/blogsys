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
				<div className="CompPost">				
					<Link as={`/p/${this.props.jsonid}`} href={`/post?id=${this.props.jsonid}`}>
						<div className="CompPost-title"><a href="">{this.props.title}</a></div>
					</Link>
					<div className="CompPost-subtitle">{this.props.subtitle}</div>

					<img src={this.props.imgurl} alt="ayy" />

					<div className="CompPost-spacer">&nbsp;</div>

					<div className="CompPost-subtitle2">{this.props.subtitle2}</div>

					<div className="CompPost-body">{this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body}</div>
				</div>
			);
		}
		else{
			/*First post is bigger*/
			return (
				<div className="CompPostFeatured">				
					<div className="CompPostFeatured-title">{this.props.title}</div>
					<div className="CompPostFeatured-subtitle">{this.props.subtitle}</div>

					<CompBigBanner imgUrl={this.props.imgurl} 
									bgColor="#ffffff" 
									bgPos="center center" 
									height="500px"
									bgSizeOverride="cover" />

					<div className="CompPostFeatured-spacer">&nbsp;</div>

					<div className="CompPostFeatured-subtitle2">{this.props.subtitle2}</div>

					<div className="CompPostFeatured-body">{this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body}</div>
				</div>
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