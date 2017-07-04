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

	mapPostComponents(cond){
		if(this.state.json.posts){
			let posts = this.state.json.posts;

			return Object.keys(posts).map(function(key, index) {
				if(index %  2 > 0 === cond && index !== 0){
					return (<CompPostsPost 
								key={"post-" + index}
								type={index}
								title={posts[key].title}
								imgurl={posts[key].imgurl}
								subtitle={posts[key].subtitle}
								body={posts[key].body} />
							);
				}
			});
		}
		else{
			return <p>loading</p>
		}
	}

	mapFeaturedPostComponent(){
		if(this.state.json.posts){
			let posts = this.state.json.posts;

			return Object.keys(posts).map(function(key, index) {
				if(index === 0){
					return (<CompPostsPost 
								key={"post-" + index}
								type={index}
								title={posts[key].title}
								imgurl={posts[key].imgurl}
								subtitle={posts[key].subtitle}
								subtitle2={posts[key].subtitle2}
								body={posts[key].body} />
							);
				}
				
			});
		}
		else{
			return <p>loading</p>
		}
	}

	render(){
		return (	
			<div className="CompPostsMain container">

				<div className="has-text-centered">{this.mapFeaturedPostComponent()}</div>

				<div className="columns">
					<div className="column">
						{this.mapPostComponents(false)}
					</div>

					<div className="column">
						{this.mapPostComponents(true)}
					</div>
				</div>

			</div>
		);
	}
}