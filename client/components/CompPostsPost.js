import React, { Component } from 'react';

import CompBigBanner from './CompBigBanner';

export default class CompPostsMain extends Component {		

	postElementType(){
		if(this.props.type !== 0){
			/*Normal posts*/
			return (	
				<div className="CompPost">
					<div className="CompPost-title">{this.props.title}</div>
					<div className="CompPost-subtitle">{this.props.subtitle}</div>

					<CompBigBanner imgUrl={this.props.imgurl} 
						bgColor="#ffffff" 
						bgPos="center center" 
						height="250px"
						bgSizeOverride="cover" />

					<div className="CompPost-body">{this.props.body}</div>
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
									height="500px" />

					<div className="CompPostFeatured-spacer">&nbsp;</div>

					<div className="CompPostFeatured-subtitle2">{this.props.subtitle2}</div>

					<div className="CompPostFeatured-body">{this.props.body}</div>
				</div>
			);
		}
	}

	render(){
		return <div>{this.postElementType()}</div>
	}
}