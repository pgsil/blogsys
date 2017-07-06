import React, { Component } from 'react';

import CompBigBanner from './CompBigBanner';

export default class CompPostsMain extends Component {		

	postElementType(){
		if(this.props.type == "false"){
			/*Normal posts*/
			console.log(this.props.subtitle2);
			return (	
				<div className="CompPost">
					<div className="CompPost-title">{this.props.title}</div>
					<div className="CompPost-subtitle">{this.props.subtitle}</div>

					<CompBigBanner imgUrl={this.props.imgurl} 
						bgColor="#ffffff" 
						bgPos="center center" 
						bgSizeOverride="cover" />

					<div className="CompPost-spacer">&nbsp;</div>

					<div className="CompPost-subtitle2">{this.props.subtitle2}</div>

					<div className="CompPost-body">{this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body}</div>
				</div>
			);
		}
		else{
			/*First post is bigger*/
			return (
				<div className="CompPostFeatured">				
					<div className="CompPostFeatured-title">{this.props.title}</div>
					<div className="CompPostFeatured-subtitle">{this.props.subtitle}</div>

					<CompBigBanner imgUrl={this.props.imgurl} 
									bgColor="#ffffff" 
									bgPos="center center" 
									height="500px"
									bgSizeOverride="cover" />

					<div className="CompPostFeatured-spacer">&nbsp;</div>

					<div className="CompPostFeatured-subtitle2">{this.props.subtitle2}</div>

					<div className="CompPostFeatured-body">{this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body}</div>
				</div>
			);
		}
	}

	handleClick(){
	  if (!Notification) {
	    return;
	  }

	  if (Notification.permission !== "granted")
	    Notification.requestPermission();
	  else {
	    let notification = new Notification('Whoops!', {
	      icon: "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/103/disappointed-but-relieved-face_1f625.png",
	      body: "Feature not implemented for this test!",
	    });
	    setTimeout(function(){notification.close()}, 4000);  
	  }
	}

	render(){
		return <div className="CompPostClickHandle" onClick={this.handleClick}>{this.postElementType()}</div>
	}
}