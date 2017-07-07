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
				return _react2.default.createElement(_link2.default, { as: '/p/' + this.props.jsonid, href: '/post?id=' + this.props.jsonid }, _react2.default.createElement('div', { className: 'CompPost' }, _react2.default.createElement('div', { className: 'CompPost-title' }, _react2.default.createElement('a', { href: '' }, this.props.title)), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, this.props.subtitle), _react2.default.createElement('div', { className: 'has-text-centered' }, _react2.default.createElement('img', { src: "/static" + this.props.imgurl, alt: 'ImageMissing', className: 'CompPost-image post-banner-size' })), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, this.props.body)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kY2ZlMDVkNmE4OGUyMzU2OGVlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzP2UxYjgwNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcFBvc3RzUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XHRcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKlJlbmRlciBjb21wb25lbnQgYmFzZWQgb24gaXRzIHR5cGUuIEZlYXR1cmVkIGFyZSB0aGUgZmlyc3QgcG9zdHMgb2YgZWFjaCBwYWdlKi9cclxuXHQvKnByb3BzIGFyZSBtYW5kYXRvcnkgZm9yIGNvcnJlY3QgZnVuY3Rpb25pbmcgb2YgdGhlIGNvbXBvbmVudCovXHRcclxuXHRwb3N0RWxlbWVudFR5cGUoKXtcclxuXHRcdGlmKHRoaXMucHJvcHMudHlwZSA9PSBmYWxzZSl7XHJcblx0XHRcdC8qTm9ybWFsIHBvc3RzKi9cdFx0XHRcclxuXHRcdFx0cmV0dXJuIChcdFxyXG5cdFx0XHRcdDxMaW5rIGFzPXtgL3AvJHt0aGlzLnByb3BzLmpzb25pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHt0aGlzLnByb3BzLmpzb25pZH1gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0XCI+XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXRpdGxlXCI+PGEgaHJlZj1cIlwiPnt0aGlzLnByb3BzLnRpdGxlfTwvYT48L2Rpdj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zdWJ0aXRsZVwiPnt0aGlzLnByb3BzLnN1YnRpdGxlfTwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e1wiL3N0YXRpY1wiICsgdGhpcy5wcm9wcy5pbWd1cmx9IGFsdD1cIkltYWdlTWlzc2luZ1wiIGNsYXNzTmFtZT1cIkNvbXBQb3N0LWltYWdlIHBvc3QtYmFubmVyLXNpemVcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zcGFjZXJcIj4mbmJzcDs8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlMlwiPnt0aGlzLnByb3BzLnN1YnRpdGxlMn08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LWJvZHlcIj57dGhpcy5wcm9wcy5ib2R5fTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PjwvTGluaz5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qT24gY2xpY2s6IGNoZWNrIGZvciBub3RpZmljYXRpb24gcGVybWlzc2lvbixcclxuXHRpZiBpdCBkb2Vzbid0IGV4aXN0OiByZXF1ZXN0IGl0LFxyXG5cdGlmIHBlcm1pc3Npb24gYXZhaWxhYmxlLCBzaG93IGEgbm90aWZpY2F0aW9uKi9cdFxyXG5cdGhhbmRsZUNsaWNrKGUpe1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RDbGlja0hhbmRsZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Pnt0aGlzLnBvc3RFbGVtZW50VHlwZSgpfTwvZGl2PlxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29tcFBvc3RzUG9zdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7O0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFtQkE7QUFFQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTs7Ozs7OztBQTNDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9