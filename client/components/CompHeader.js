import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
				<Link to="/">Home</Link>

				<Link to="/newpost">New post</Link>
			</div>
		);
	}
}