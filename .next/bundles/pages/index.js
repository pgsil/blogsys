
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(552);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _MyLayout = __webpack_require__(553);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _CompPostsPost = __webpack_require__(555);

var _CompPostsPost2 = _interopRequireDefault(_CompPostsPost);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function mapPosts(props) {
	var posts = props.json.posts;

	var type = false;

	var postarray = [];

	for (var i = posts.length - 1; i >= 0; i--) {

		var component = _react2.default.createElement(_CompPostsPost2.default, {
			key: "post-" + i,
			type: type,
			title: posts[i].title,
			imgurl: posts[i].imgurl,
			subtitle: posts[i].subtitle,
			subtitle2: posts[i].subtitle2,
			body: posts[i].body,
			jsonid: i });

		postarray.push(component);
	}

	return postarray;
}

var Index = function Index(props) {
	return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { href: '/statics/styles.css', rel: 'stylesheet' })), _react2.default.createElement('h1', null, 'posts'), _react2.default.createElement('ul', null, mapPosts(props)));
};

Index.getInitialProps = async function () {
	var res = await (0, _isomorphicUnfetch2.default)("http://localhost:3000/api/getposts");
	var data = await res.json();

	console.log('Data fetched.');

	return {
		json: data
	};
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(554);

var _Header2 = _interopRequireDefault(_Header);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle }, _react2.default.createElement(_Header2.default, null), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\MyLayout.js"); } } })();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', { style: linkStyle }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', { style: linkStyle }, 'About')));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\Header.js"); } } })();

/***/ }),

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
				return _react2.default.createElement('div', { className: 'CompPost' }, _react2.default.createElement(_link2.default, { as: '/p/' + this.props.jsonid, href: '/post?id=' + this.props.jsonid }, _react2.default.createElement('div', { className: 'CompPost-title' }, _react2.default.createElement('a', { href: '' }, this.props.title))), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, this.props.subtitle), _react2.default.createElement('img', { src: this.props.imgurl, alt: 'ayy' }), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, this.props.body.length > 140 ? this.props.body.substr(0, 140) + "..." : this.props.body));
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

},[548]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDg5MmMwZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzQ4OTJjMGUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NDg5MmMwZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3QuanM/NDg5MmMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBDb21wUG9zdHNQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcFBvc3RzUG9zdC5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYXBQb3N0cyhwcm9wcyl7XHJcblx0bGV0IHBvc3RzID0gcHJvcHMuanNvbi5wb3N0cztcclxuXHJcblx0bGV0IHR5cGUgPSBmYWxzZTtcclxuXHJcblx0bGV0IHBvc3RhcnJheSA9IFtdO1xyXG5cclxuXHRmb3IgKHZhciBpID0gcG9zdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gPENvbXBQb3N0c1Bvc3QgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJwb3N0LVwiICsgaX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3RzW2ldLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWd1cmw9e3Bvc3RzW2ldLmltZ3VybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VidGl0bGU9e3Bvc3RzW2ldLnN1YnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTI9e3Bvc3RzW2ldLnN1YnRpdGxlMn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9keT17cG9zdHNbaV0uYm9keX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0anNvbmlkPXtpfSAvPlxyXG5cclxuXHRcdHBvc3RhcnJheS5wdXNoKGNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm5cdHBvc3RhcnJheTtcclxuXHRcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuXHQ8TGF5b3V0PlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDxsaW5rIGhyZWY9XCIvc3RhdGljcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0PGgxPnBvc3RzPC9oMT5cclxuXHRcdDx1bD5cclxuXHRcdHttYXBQb3N0cyhwcm9wcyl9XHJcblx0XHQ8L3VsPlxyXG5cdDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldHBvc3RzXCIpO1xyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhgRGF0YSBmZXRjaGVkLmApO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0anNvbjogZGF0YVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiAyMCxcclxuICBwYWRkaW5nOiAyMCxcclxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9Plx0IFxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcFBvc3RzUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XHRcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKlJlbmRlciBjb21wb25lbnQgYmFzZWQgb24gaXRzIHR5cGUuIEZlYXR1cmVkIGFyZSB0aGUgZmlyc3QgcG9zdHMgb2YgZWFjaCBwYWdlKi9cclxuXHQvKnByb3BzIGFyZSBtYW5kYXRvcnkgZm9yIGNvcnJlY3QgZnVuY3Rpb25pbmcgb2YgdGhlIGNvbXBvbmVudCovXHRcclxuXHRwb3N0RWxlbWVudFR5cGUoKXtcclxuXHRcdGlmKHRoaXMucHJvcHMudHlwZSA9PSBmYWxzZSl7XHJcblx0XHRcdC8qTm9ybWFsIHBvc3RzKi9cdFx0XHRcclxuXHRcdFx0cmV0dXJuIChcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RcIj5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PExpbmsgYXM9e2AvcC8ke3RoaXMucHJvcHMuanNvbmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3RoaXMucHJvcHMuanNvbmlkfWB9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXRpdGxlXCI+PGEgaHJlZj1cIlwiPnt0aGlzLnByb3BzLnRpdGxlfTwvYT48L2Rpdj5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGVcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWd1cmx9IGFsdD1cImF5eVwiIC8+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zcGFjZXJcIj4mbmJzcDs8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlMlwiPnt0aGlzLnByb3BzLnN1YnRpdGxlMn08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LWJvZHlcIj57dGhpcy5wcm9wcy5ib2R5Lmxlbmd0aCA+IDE0MCA/IHRoaXMucHJvcHMuYm9keS5zdWJzdHIoMCwgMTQwKSArIFwiLi4uXCIgOiB0aGlzLnByb3BzLmJvZHl9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHQvKkZpcnN0IHBvc3QgaXMgYmlnZ2VyKi9cclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0RmVhdHVyZWRcIj5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdEZlYXR1cmVkLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0RmVhdHVyZWQtc3VidGl0bGVcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8Q29tcEJpZ0Jhbm5lciBpbWdVcmw9e3RoaXMucHJvcHMuaW1ndXJsfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmdDb2xvcj1cIiNmZmZmZmZcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmdQb3M9XCJjZW50ZXIgY2VudGVyXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjUwMHB4XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YmdTaXplT3ZlcnJpZGU9XCJjb3ZlclwiIC8+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdEZlYXR1cmVkLXNwYWNlclwiPiZuYnNwOzwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RGZWF0dXJlZC1zdWJ0aXRsZTJcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZTJ9PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdEZlYXR1cmVkLWJvZHlcIj57dGhpcy5wcm9wcy5ib2R5Lmxlbmd0aCA+IDE0MCA/IHRoaXMucHJvcHMuYm9keS5zdWJzdHIoMCwgMTQwKSArIFwiLi4uXCIgOiB0aGlzLnByb3BzLmJvZHl9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKk9uIGNsaWNrOiBjaGVjayBmb3Igbm90aWZpY2F0aW9uIHBlcm1pc3Npb24sXHJcblx0aWYgaXQgZG9lc24ndCBleGlzdDogcmVxdWVzdCBpdCxcclxuXHRpZiBwZXJtaXNzaW9uIGF2YWlsYWJsZSwgc2hvdyBhIG5vdGlmaWNhdGlvbiovXHRcclxuXHRoYW5kbGVDbGljayhlKXtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0Q2xpY2tIYW5kbGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT57dGhpcy5wb3N0RWxlbWVudFR5cGUoKX08L2Rpdj5cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3QuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFGQTtBQVBBO0FBQ0E7QUFVQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7OztBQUVBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFxQkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFFQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTs7Ozs7OztBQTdEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        