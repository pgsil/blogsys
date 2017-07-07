import React, { Component } from 'react';
import Link from 'next/link';


export default class CompHeader extends Component {	
	constructor(props){
		super();

		this.pushy = this.pushy.bind(this);
		this.pushyRemove = this.pushyRemove.bind(this);
	}

	/*Toggle push-right menu visibility by adding/removing css class*/
	pushy(){
		document.body.classList.add("pushy-open-left");
		document.getElementsByClassName("pushy-menu-btn")[0].innerHTML = "<i class='fa fa-arrow-left fa-2x' aria-hidden='true'></i>";

	}
	pushyRemove(){
		document.body.classList.remove("pushy-open-left");
		document.getElementsByClassName("pushy-menu-btn")[0].innerHTML = "<i class='fa fa-bars fa-2x' aria-hidden='true'></i>";
	}	

	render(){
		return (
			<div className="header-master">
				<div id="pushy-container">
				    
				</div>

				<div className="webedia-img has-text-centered push">
					<div className="level">
						<div className="level-left">
							<div className="pushy-menu-btn" onClick={this.pushy}>
								<i className="fa fa-bars fa-2x" aria-hidden="true"></i>
							</div>
						</div>

						<div className="level-item">
							<img src="/images/webedia.png" alt="Um Site do Webedia Group" />
						</div>
					</div>
				</div>

				<div className="header desktopheader push">
					<div className="header-wrapper level">
					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>
					 
					  <p className="level-item has-text-centered header-link-item">
					   <Link href="/newpost" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Lorem Ipsum</Link>
					  </p>

					  <p className="level-item has-text-centered header-link-item">
					    <Link href="/" className="link is-info">Loremsit Do</Link>
					  </p>
					</div>
				</div>

				<nav className="pushy pushy-left">
				    <div className="pushy-content">
				        <ul>				            
				            <Link href="/"><li className="pushy-link">Home</li></Link>
				            <Link href="/newpost"><li className="pushy-link">Admin</li></Link>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				            <li className="pushy-link"><a href="#">Lorem Ipsum</a></li>
				        </ul>
				    </div>
				</nav>

				<div className="site-overlay" onClick={this.pushyRemove}></div>
			</div>);
	}
}