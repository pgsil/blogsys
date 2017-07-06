import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CompHeader extends Component {	
	constructor(props){
		super();

		this.pushy = this.pushy.bind(this);
		this.pushyRemove = this.pushyRemove.bind(this);
	}

	/*Toggle push-right menu visibility by adding/removing css class*/
	pushy(){
		document.body.classList.add("pushy-open-left");
	}
	pushyRemove(){
		document.body.classList.remove("pushy-open-left");
	}	

	render(){
		return (
			<div className="header-master">
				<div id="pushy-container">
				    <div className="pushy-menu-btn" onClick={this.pushy}>
				    	<i className="fa fa-bars fa-2x" aria-hidden="true"></i>
				    </div>
				</div>

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

				<nav className="pushy pushy-left">
				    <div className="pushy-content">
				        <ul>				            
				            <Link to="/"><li className="pushy-link">Home</li></Link>
				            <Link to="/newpost"><li className="pushy-link">Admin</li></Link>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				            <li className="pushy-link"><a href="#">Placeholder</a></li>
				        </ul>
				    </div>
				</nav>

				<div className="site-overlay" onClick={this.pushyRemove}></div>
			</div>);
	}
}