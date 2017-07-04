import React, { Component } from 'react';

import CompPostsPost from './CompPostsPost';

export default class CompPostsMain extends Component {
	constructor(props){
		super();

		this.state = {json: {}}
	}

	componentDidMount(){
		this.getPosts();	
	}

	getPosts(){
		fetch("/api/getposts")
		.then((response) => response.json())
		.then((json) => {this.setState({json: json})})
	}

	mapPostComponents(){
		if(this.state.json.posts){
			let posts = this.state.json.posts;

			return Object.keys(posts).map(function(key, index) {
				return (<div className="blogpost">
						<p><b>{posts[key].title}</b></p>
						<p>{posts[key].body}</p>
					</div>);
			});
		}
		else{
			return <p>loading</p>
		}
	}

	render(){
		return (	
			<div className="CompPostsMain container">				
				{this.mapPostComponents()}
			</div>
		);
	}
}