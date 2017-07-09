import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from '../components/MyLayout.js';
import CompPostsPost from '../components/CompPostsPost.js';
import CompPostsPostFeatured from '../components/CompPostsPostFeatured.js';

function mapPosts(props){
	let posts = props.json.posts;
	let tgtPage = props.page;
	let type = false;
	let postsOdd = [], postsEven = [], postFeatured, postarray = [];

	tgtPage = tgtPage*5;	
	
	let startInd = ((posts.length - 1) - tgtPage);
	let endInd = (posts.length - (tgtPage + 5));

	let paginationDone = false;


	for (var i = startInd; i >= endInd; i--) {

		if(posts[i]){
			let component = <CompPostsPost 
				key={"post-" + i}
				type={type}
				title={posts[i].title}
				imgurl={posts[i].imgurl}
				subtitle={posts[i].subtitle}
				subtitle2={posts[i].subtitle2}
				body={posts[i].body}
				jsonid={i} />
			
			/*is it the first post of the page?*/
			if(i === startInd){
				let featured = <CompPostsPostFeatured 
					key={"post-" + i}
					type={type}
					title={posts[i].title}
					imgurl={posts[i].imgurl}
					subtitle={posts[i].subtitle}
					subtitle2={posts[i].subtitle2}
					body={posts[i].body}
					jsonid={i} />

				postFeatured = featured;
			}
			/*if it's not the first post of the page, separate into columns*/
			else{
				if(i%2 === 0){
					postsEven.push(component);
				}
				else{
					postsOdd.push(component);
				}
			}
		}
		else{
			paginationDone = true;
		}
	}
	return	(
		<div className="CompPostsMain container">
			<div className="has-text-centered push">{postFeatured}</div>

			<div className="columns is-desktop push">
				<div className="column">
					{postsEven}
				</div>

				<div className="column">
					{postsOdd}
				</div>
			</div>

			<div>
				{props.page == 0 ? null : <Link prefetch as={"/page/" + (parseInt(props.page) - 1).toString()} href={"/page?page=" + (parseInt(props.page) - 1)} className="link is-info"><button className="button is-success">Previous Page</button></Link>}
				{paginationDone ? null : <Link prefetch as={"/page/" + (parseInt(props.page) + 1).toString()} href={"/page?page=" + (parseInt(props.page) + 1)} className="link is-info"><button className="button is-success">Next Page</button></Link>}
			</div>
			<br/>
		</div>);	
};


const PostsPage = (props) => (
	<Layout>	
		{mapPosts(props)}
	</Layout>
);

PostsPage.getInitialProps = async function(context) {
	const res = await fetch("http://localhost:3000/api/getposts");
	const data = await res.json();

	return {
		json: data,
		page: context.query.page
	}
};

export default PostsPage
