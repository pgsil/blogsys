import React, { Component } from 'react';

import CompBigBanner from './CompBigBanner';

export default class CompPostDetail extends Component {	
	constructor(props){
		super();

		this.state = {json: {}};
	}

	componentDidMount(){
		this.fetchPosts();
	}

	/*Fetches posts from the backend*/
	fetchPosts(){
		let jsonid = this.props.match.params.index;

		fetch("/api/getposts")
		.then((response) => response.json())
		.then((json) => {(this.setState({json: json.posts[jsonid]}) )} );	
	}

	conditionalRender(){
		if(this.state.json){
			return (
				<div className="container push">
					<div className="CompPostFeatured">	

						<div className="CompPostFeatured-title">
							{this.state.json.title}
						</div>
						<div className="CompPostFeatured-subtitle">
							{this.state.json.subtitle}
						</div>

						<img src={this.state.json.imgurl} alt="image" />

						<div className="CompPostFeatured-spacer">
							&nbsp;
						</div>

						<div className="CompPostFeatured-subtitle2">
							{this.state.json.subtitle2}
						</div>

						<div className="CompPostFeatured-body">
							{this.state.json.body}
						</div>
					</div>
				</div>
			)
		}
		else{
			return <p>loading</p>
		}
	}	

	render(){
		return (<div>{this.conditionalRender()}</div>)
	}
}