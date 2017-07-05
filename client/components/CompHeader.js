import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CompHeader extends Component {	
	constructor(props){
		super();

		this.state = {menuvisible: false};

		this.pushy = this.pushy.bind(this);
		this.pushyRemove = this.pushyRemove.bind(this);
	}
	pushy(){
		document.body.classList.add("pushy-open-left");
	}
	pushyRemove(){
		document.body.classList.remove("pushy-open-left");
	}

	returnMenuActive(){
		return this.state.menuvisible ? "is-active" : ""
	}

	handleMenuClick(){
		this.setState({menuvisible: !this.state.menuvisible});
	}

	render(){
		return (
			<div className="">
				<div className="webedia-img has-text-centered push">
					<img src="webedia.png" alt="Um Site do Webedia Group" />
				</div>

				<div className="header desktopheader push">
					<div className="header-wrapper level">
					  <p className="level-item has-text-centered header-link-item">
					    <Link to="/" className="link is-info">Home</Link>
					  </p>
					 
					  <p className="level-item has-text-centered header-link-item">
					   <Link to="/newpost" className="link is-info">Admin</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item" onClick={this.pushy}>
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

				<nav className="pushy pushy-left">
				    <div className="pushy-content">
				        <ul>
				            <li className="pushy-submenu">
				                <button>Submenu</button>
				                <ul>
				                    <li className="pushy-link"><a href="#">Item 1</a></li>
				                    <li className="pushy-link"><a href="#">Item 2</a></li>
				                    <li className="pushy-link"><a href="#">Item 3</a></li>
				                </ul>
				            </li>
				            <li className="pushy-link"><a href="#">Item 1</a></li>
				            <li className="pushy-link"><a href="#">Item 2</a></li>
				        </ul>
				    </div>
				</nav>

				<div className="site-overlay" onClick={this.pushyRemove}></div>

				<div id="container">
				    <button className="menu-btn">&#9776; Menu</button>
				</div>

			</div>);
	}
}