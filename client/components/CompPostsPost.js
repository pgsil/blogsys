import React, { Component } from 'react';

export default class CompPostsMain extends Component {		

	render(){
		return (	
			<div className="CompPost">				
				<h2>{this.props.title}</h2>
				<p>{this.props.body}</p>
			</div>
		);
	}
}