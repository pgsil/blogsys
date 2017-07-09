import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Link from 'next/link';

import CompBigBanner from './CompBigBanner';

export default class CompPostsPostFeatured extends Component {	
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
				<Link prefetch as={`/viewpost/${this.props.jsonid}`} href={`/post?id=${this.props.jsonid}`}>
				<div className="CompPostFeatured">				
					
						<div className=""><a href="" className="CompPostFeatured-title">{this.props.title}</a></div>
					
					<div className="CompPostFeatured-subtitle">{this.props.subtitle}</div>

					<div className="has-text-centered">
						<CompBigBanner imgUrl={this.props.imgurl} 
												bgColor="#ffffff" 
												bgPos="center center" 
												bgSizeOverride="cover"
												height="500px" />
					</div>

					<div className="CompPostFeatured-spacer">&nbsp;</div>

					<div className="CompPostFeatured-subtitle2">{this.props.subtitle2}</div>

					<div className="CompPostFeatured-body">{this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body}</div>
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