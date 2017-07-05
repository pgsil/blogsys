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

				<div className="webedia-img has-text-centered">
					<img src="webedia.png" alt="Um Site do Webedia Group" />
				</div>

				<div className="header">				
					<div className="header-wrapper level">
					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Home</Link>
					  </p>
					 
					  <p className="level-item has-text-centered header-link-item">
					   <Link to="/newpost" className="link is-info">Admin</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Placeholder</Link>
					  </p>
					</div>
				</div>

			</div>);
	}
}