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

var _reactRouter = require("react-router");

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _CompBigBanner = require("./CompBigBanner");

var _CompBigBanner2 = _interopRequireDefault(_CompBigBanner);

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

var CompPostsPostFeatured = function (_Component) {
	_inherits(CompPostsPostFeatured, _Component);

	function CompPostsPostFeatured(props) {
		_classCallCheck(this, CompPostsPostFeatured);

		var _this = _possibleConstructorReturn(this, (CompPostsPostFeatured.__proto__ || Object.getPrototypeOf(CompPostsPostFeatured)).call(this));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	/*Render component based on its type. Featured are the first posts of each page*/
	/*props are mandatory for correct functioning of the component*/

	_createClass(CompPostsPostFeatured, [{
		key: 'postElementType',
		value: function postElementType() {
			if (this.props.type == false) {
				/*Normal posts*/
				return _react2.default.createElement(_link2.default, { prefetch: true, as: '/viewpost/' + this.props.jsonid, href: '/post?id=' + this.props.jsonid }, _react2.default.createElement('div', { className: 'CompPostFeatured' }, _react2.default.createElement('div', { className: '' }, _react2.default.createElement('a', { href: '', className: 'CompPostFeatured-title' }, this.props.title)), _react2.default.createElement('div', { className: 'CompPostFeatured-subtitle' }, this.props.subtitle), _react2.default.createElement('div', { className: 'has-text-centered' }, _react2.default.createElement(_CompBigBanner2.default, { imgUrl: this.props.imgurl,
					bgColor: '#ffffff',
					bgPos: 'center center',
					bgSizeOverride: 'cover',
					height: '500px' })), _react2.default.createElement('div', { className: 'CompPostFeatured-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPostFeatured-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPostFeatured-body' }, this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body)));
			}
		}

		/*On click: check for notification permission,
  if it doesn't exist: request it,
  if permission available, show a notification*/

	}, {
		key: 'handleClick',
		value: function handleClick(e) {

			e.preventDefault();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'CompPostClickHandle', onClick: this.handleClick }, this.postElementType());
		}
	}]);

	return CompPostsPostFeatured;
}(_react.Component);

exports.default = CompPostsPostFeatured;