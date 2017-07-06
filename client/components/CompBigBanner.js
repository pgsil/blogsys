import React, { Component } from 'react';
import Lightbox from 'react-images';

export default class CompBigBanner extends Component {	
	constructor() {
	     super();

	     this.state ={lightboxIsOpen: false};
	     this.openLightbox = this.openLightbox.bind(this);
	     this.closeLightbox = this.closeLightbox.bind(this);
	}

	getDarken(){
		if(this.props.darken){
			let urlstr = 'url('+ this.props.imgUrl + ')';
			return "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) )," + urlstr;
		}
		else{
			return 'url('+ this.props.imgUrl + ')';
		}
	}
	getContents(){
		if(this.props.contents){
			return this.props.contents;
		}
		else{
			return <div>&nbsp;</div>
		}
	}
	
	openLightbox (index, event) {
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});

		console.log("lightbox popen")
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

	render(){		
		
		return (			

			<div className="big-banner level has-text-centered is-mobile post-banner-size" style={{ 	
				background: this.getDarken(),
				backgroundSize: this.props.bgSizeOverride,
				backgroundColor: this.props.bgColor,
				backgroundPosition: this.props.bgPos,
				backgroundRepeat: "no-repeat",
				height: this.props.height,
				width: this.props.widthOverride}} onClick={this.openLightbox}>

				{this.getContents()}
				<Lightbox
			        images={[{ src: this.props.imgUrl }]}
			        isOpen={this.state.lightboxIsOpen}
			        onClickPrev={this.gotoPrevious}
			        onClickNext={this.gotoNext}
			        onClose={this.closeLightbox}
				/>

			</div>
		);
	}
}