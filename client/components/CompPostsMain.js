import React, { Component } from 'react';

import CompPostsPost from './CompPostsPost';

export default class CompPostsMain extends Component {
	getPosts(){
		fetch("/api/getposts")
		.then((response) => response.json())
		.then((json) => {console.log(json)})
		.then(() => console.log("JSON fetch success"))
	}

	componentWillMount(){
		this.getPosts();
	}

	render(){
		return (	
			<div className="CompPostsMain container">				
				<CompPostsPost title="Test" body="Very hot." />
			</div>
		);
	}
}