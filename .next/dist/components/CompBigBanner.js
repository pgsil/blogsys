'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactImages = require("react-images");

var _reactImages2 = _interopRequireDefault(_reactImages);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CompBigBanner = function (_Component) {
	_inherits(CompBigBanner, _Component);

	function CompBigBanner() {
		_classCallCheck(this, CompBigBanner);

		var _this = _possibleConstructorReturn(this, (CompBigBanner.__proto__ || Object.getPrototypeOf(CompBigBanner)).call(this));

		_this.state = { lightboxIsOpen: false };
		_this.openLightbox = _this.openLightbox.bind(_this);
		_this.closeLightbox = _this.closeLightbox.bind(_this);
		return _this;
	}

	/*if props.darken is true, it darkens the image*/
	/*useful for having text in front of the image*/

	_createClass(CompBigBanner, [{
		key: 'getDarken',
		value: function getDarken() {
			if (this.props.darken) {
				var urlstr = 'url(' + this.props.imgUrl + ')';
				return "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55) )," + urlstr;
			} else {
				return 'url(' + this.props.imgUrl + ')';
			}
		}
		/*checks if this.props.contents is valid*/

	}, {
		key: 'getContents',
		value: function getContents() {
			if (this.props.contents) {
				return this.props.contents;
			} else {
				return _react2.default.createElement('div', null, '\xA0');
			}
		}
	}, {
		key: 'openLightbox',
		value: function openLightbox(event) {
			event.stopPropagation();

			this.setState({
				currentImage: 0,
				lightboxIsOpen: true
			});
		}
	}, {
		key: 'closeLightbox',
		value: function closeLightbox() {
			this.setState({
				currentImage: 0,
				lightboxIsOpen: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'big-banner has-text-centered is-mobile post-banner-size', style: {
					background: this.getDarken(),
					backgroundSize: this.props.bgSizeOverride,
					backgroundColor: this.props.bgColor,
					backgroundPosition: this.props.bgPos,
					backgroundRepeat: "no-repeat",
					height: this.props.height,
					width: this.props.widthOverride }, onClick: this.openLightbox }, _react2.default.createElement('div', { className: 'zoom-wrapper level is-mobile' }, _react2.default.createElement('div', { className: 'level-left' }), _react2.default.createElement('div', { className: 'level-right' }, _react2.default.createElement('img', { src: '/static/images/zoom.png', alt: 'zoom in', className: 'level-item zoom-img' }))), this.getContents(), _react2.default.createElement(_reactImages2.default, {
				images: [{ src: this.props.imgUrl }],
				isOpen: this.state.lightboxIsOpen,
				onClickPrev: this.gotoPrevious,
				onClickNext: this.gotoNext,
				onClose: this.closeLightbox
			}));
		}
	}]);

	return CompBigBanner;
}(_react.Component);

exports.default = CompBigBanner;