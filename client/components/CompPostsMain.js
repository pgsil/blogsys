import React, { Component } from 'react';

import CompPostsPost from './CompPostsPost';

export default class CompPostsMain extends Component {
	constructor(props){
		super();

		this.state = {pagination: 0, json: {}, paginationDone: false};

		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentDidMount(){
		this.fetchPosts();
	}

	/*Fetches posts from the backend*/
	fetchPosts(){
		fetch("/api/getposts")
		.then((response) => response.json())
		.then((json) => {this.setState({json: json})})
		.then(()=>this.mapPostComponents())
	}

	/*Helper method to force a rerender for page changes*/
	getPosts(statename){
		return statename
	}

	/*Makes this.state.json.posts into components*/
	mapPostComponents(){
		let columnOdd = [], columnEven = [], featuredPost;
		let paginationDone = false;

		if(this.state.json.posts){
			let posts = this.state.json.posts;

			for (let i = (posts.length - 1) - this.state.pagination; i >= posts.length - (this.state.pagination + 5) - this.state.pagination; i--) {
				
				/*Does this post even exist?*/
				if(posts[i]){

					let type = false;

					type = ((posts.length - 1) - this.state.pagination);

					let component = <CompPostsPost 
										key={"post-" + i}
										type={type}
										title={posts[i].title}
										imgurl={posts[i].imgurl}
										subtitle={posts[i].subtitle}
										subtitle2={posts[i].subtitle2}
										body={posts[i].body} />

					/*If this is the first element in this pagination bunch, it's featured.*/
					if(i === (posts.length - 1) - this.state.pagination){
						featuredPost = component;
					}
					else{
						/*Pushes to the odd or even column based on i*/
						i % 2 ? columnEven.push(component) : columnOdd.push(component);
					}	
				}
				else{
					/*There's no more posts. Set the paginationDone state*/		
					paginationDone = true;			
				}
			}

			this.setState({featuredPost: featuredPost, columnOdd: columnOdd, columnEven: columnEven, paginationDone: paginationDone});
		}

		else{
			return <p>loading</p>
		}
	}

	/*Changes pagination, which is where the component mapping starts reading the json*/
	handlePageChange(int){
		let pageChange = int * 5;

		this.setState({pagination: (this.state.pagination + pageChange)}, () => this.mapPostComponents() );
	}

	render(){
		return (	
			<div className="CompPostsMain container push">				
				<div className="has-text-centered">{this.state.featuredPost ? this.getPosts(this.state.featuredPost) : <p>Loading</p>}</div>

				<div className="columns is-desktop">
						<div className="column">
							{this.state.columnOdd ? this.getPosts(this.state.columnOdd) : <p>Loading</p>}
						</div>

						<div className="column">
							{this.state.columnEven ? this.getPosts(this.state.columnEven) : <p>Loading</p>}
						</div>
				</div>
				
				<div className="page-changer">
					{this.state.pagination === 0 ? null : <button className="button is-success" onClick={() => this.handlePageChange(-1)} >Previous Page</button>}
					{this.state.paginationDone ? null : <button className="button is-success" onClick={() => this.handlePageChange(1)} >Next Page</button>}
				</div>
			</div>
		);
	}
}