import React, { Component } from 'react';

export default class CompHeader extends Component {	
	constructor(props){
		super();

		this.state = {menuvisible: false}
	}
	returnMenuActive(){
		return this.state.menuvisible ? "is-active" : ""
	}

	handleMenuClick(){
		this.setState({menuvisible: !this.state.menuvisible});
	}

	render(){
		return (	
			<div>				
				<p><a href="/">Link One</a></p>

				<p><a href="/">Link Two</a></p>

				<p><a href="/">Link Three</a></p>
			</div>
		);
	}
}