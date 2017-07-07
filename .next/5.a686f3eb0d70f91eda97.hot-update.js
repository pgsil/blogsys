webpackHotUpdate(5,{

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(556);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

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

var CompPostsPost = function (_Component) {
	_inherits(CompPostsPost, _Component);

	function CompPostsPost(props) {
		_classCallCheck(this, CompPostsPost);

		var _this = _possibleConstructorReturn(this, (CompPostsPost.__proto__ || Object.getPrototypeOf(CompPostsPost)).call(this));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	/*Render component based on its type. Featured are the first posts of each page*/
	/*props are mandatory for correct functioning of the component*/

	_createClass(CompPostsPost, [{
		key: 'postElementType',
		value: function postElementType() {
			if (this.props.type == false) {
				/*Normal posts*/
				return _react2.default.createElement('div', { className: 'CompPost' }, _react2.default.createElement(_link2.default, { as: '/p/' + this.props.jsonid, href: '/post?id=' + this.props.jsonid }, _react2.default.createElement('div', { className: 'CompPost-title' }, _react2.default.createElement('a', { href: '' }, this.props.title))), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, this.props.subtitle), _react2.default.createElement('img', { src: this.props.imgurl, alt: 'ayy' }), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, this.props.body));
			} else {
				/*First post is bigger*/
				return _react2.default.createElement('div', { className: 'CompPostFeatured' }, _react2.default.createElement('div', { className: 'CompPostFeatured-title' }, this.props.title), _react2.default.createElement('div', { className: 'CompPostFeatured-subtitle' }, this.props.subtitle), _react2.default.createElement(CompBigBanner, { imgUrl: this.props.imgurl,
					bgColor: '#ffffff',
					bgPos: 'center center',
					height: '500px',
					bgSizeOverride: 'cover' }), _react2.default.createElement('div', { className: 'CompPostFeatured-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPostFeatured-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPostFeatured-body' }, this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body));
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

	return CompPostsPost;
}(_react.Component);

exports.default = CompPostsPost;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\CompPostsPost.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\CompPostsPost.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNjg2ZjNlYjBkNzBmOTFlZGE5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzPzM2MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcFBvc3RzUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XHRcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKlJlbmRlciBjb21wb25lbnQgYmFzZWQgb24gaXRzIHR5cGUuIEZlYXR1cmVkIGFyZSB0aGUgZmlyc3QgcG9zdHMgb2YgZWFjaCBwYWdlKi9cclxuXHQvKnByb3BzIGFyZSBtYW5kYXRvcnkgZm9yIGNvcnJlY3QgZnVuY3Rpb25pbmcgb2YgdGhlIGNvbXBvbmVudCovXHRcclxuXHRwb3N0RWxlbWVudFR5cGUoKXtcclxuXHRcdGlmKHRoaXMucHJvcHMudHlwZSA9PSBmYWxzZSl7XHJcblx0XHRcdC8qTm9ybWFsIHBvc3RzKi9cdFx0XHRcclxuXHRcdFx0cmV0dXJuIChcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RcIj5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PExpbmsgYXM9e2AvcC8ke3RoaXMucHJvcHMuanNvbmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3RoaXMucHJvcHMuanNvbmlkfWB9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXRpdGxlXCI+PGEgaHJlZj1cIlwiPnt0aGlzLnByb3BzLnRpdGxlfTwvYT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGVcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWd1cmx9IGFsdD1cImF5eVwiIC8+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zcGFjZXJcIj4mbmJzcDs8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlMlwiPnt0aGlzLnByb3BzLnN1YnRpdGxlMn08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LWJvZHlcIj57dGhpcy5wcm9wcy5ib2R5fTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0LypGaXJzdCBwb3N0IGlzIGJpZ2dlciovXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdEZlYXR1cmVkXCI+XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RGZWF0dXJlZC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdEZlYXR1cmVkLXN1YnRpdGxlXCI+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PENvbXBCaWdCYW5uZXIgaW1nVXJsPXt0aGlzLnByb3BzLmltZ3VybH0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJnQ29sb3I9XCIjZmZmZmZmXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJnUG9zPVwiY2VudGVyIGNlbnRlclwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCI1MDBweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJnU2l6ZU92ZXJyaWRlPVwiY292ZXJcIiAvPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RGZWF0dXJlZC1zcGFjZXJcIj4mbmJzcDs8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0RmVhdHVyZWQtc3VidGl0bGUyXCI+e3RoaXMucHJvcHMuc3VidGl0bGUyfTwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RGZWF0dXJlZC1ib2R5XCI+e3RoaXMucHJvcHMuYm9keS5sZW5ndGggPiAxNDAgPyB0aGlzLnByb3BzLmJvZHkuc3Vic3RyKDAsIDE0MCkgKyBcIi4uLlwiIDogdGhpcy5wcm9wcy5ib2R5fTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypPbiBjbGljazogY2hlY2sgZm9yIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLFxyXG5cdGlmIGl0IGRvZXNuJ3QgZXhpc3Q6IHJlcXVlc3QgaXQsXHJcblx0aWYgcGVybWlzc2lvbiBhdmFpbGFibGUsIHNob3cgYSBub3RpZmljYXRpb24qL1x0XHJcblx0aGFuZGxlQ2xpY2soZSl7XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdENsaWNrSGFuZGxlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+e3RoaXMucG9zdEVsZW1lbnRUeXBlKCl9PC9kaXY+XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBcUJBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBRUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7Ozs7QUE3REE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==