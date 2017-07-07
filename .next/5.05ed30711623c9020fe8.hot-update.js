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

var _link = __webpack_require__(544);

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
				return _react2.default.createElement('div', { className: 'CompPost' }, _react2.default.createElement(_link2.default, { as: '/p/' + this.props.jsonid, href: '/post?id=' + this.props.jsonid }, _react2.default.createElement('div', { className: 'CompPost-title' }, _react2.default.createElement('a', { href: '' }, this.props.title))), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, this.props.subtitle), _react2.default.createElement('img', { src: "/static" + this.props.imgurl, alt: 'ImageMissing' }), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, this.props.body));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNWVkMzA3MTE2MjNjOTAyMGZlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzPzM2MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcFBvc3RzUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XHRcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKlJlbmRlciBjb21wb25lbnQgYmFzZWQgb24gaXRzIHR5cGUuIEZlYXR1cmVkIGFyZSB0aGUgZmlyc3QgcG9zdHMgb2YgZWFjaCBwYWdlKi9cclxuXHQvKnByb3BzIGFyZSBtYW5kYXRvcnkgZm9yIGNvcnJlY3QgZnVuY3Rpb25pbmcgb2YgdGhlIGNvbXBvbmVudCovXHRcclxuXHRwb3N0RWxlbWVudFR5cGUoKXtcclxuXHRcdGlmKHRoaXMucHJvcHMudHlwZSA9PSBmYWxzZSl7XHJcblx0XHRcdC8qTm9ybWFsIHBvc3RzKi9cdFx0XHRcclxuXHRcdFx0cmV0dXJuIChcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RcIj5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PExpbmsgYXM9e2AvcC8ke3RoaXMucHJvcHMuanNvbmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3RoaXMucHJvcHMuanNvbmlkfWB9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXRpdGxlXCI+PGEgaHJlZj1cIlwiPnt0aGlzLnByb3BzLnRpdGxlfTwvYT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGVcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17XCIvc3RhdGljXCIgKyB0aGlzLnByb3BzLmltZ3VybH0gYWx0PVwiSW1hZ2VNaXNzaW5nXCIgLz5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXNwYWNlclwiPiZuYnNwOzwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGUyXCI+e3RoaXMucHJvcHMuc3VidGl0bGUyfTwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3QtYm9keVwiPnt0aGlzLnByb3BzLmJvZHl9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKk9uIGNsaWNrOiBjaGVjayBmb3Igbm90aWZpY2F0aW9uIHBlcm1pc3Npb24sXHJcblx0aWYgaXQgZG9lc24ndCBleGlzdDogcmVxdWVzdCBpdCxcclxuXHRpZiBwZXJtaXNzaW9uIGF2YWlsYWJsZSwgc2hvdyBhIG5vdGlmaWNhdGlvbiovXHRcclxuXHRoYW5kbGVDbGljayhlKXtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0Q2xpY2tIYW5kbGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT57dGhpcy5wb3N0RWxlbWVudFR5cGUoKX08L2Rpdj5cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7OztBQUVBO0FBQUE7QUFFQTtBQUNBO0FBZ0JBO0FBRUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7Ozs7QUF4Q0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==