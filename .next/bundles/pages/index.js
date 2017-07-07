
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

var _link = __webpack_require__(544);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(552);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

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
	return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', null, 'posts'), _react2.default.createElement('div', { className: 'container' }, mapPosts(props)));
};

Index.getInitialProps = async function () {
	var res = await (0, _isomorphicUnfetch2.default)("http://localhost:3000/api/getposts");
	var data = await res.json();

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
	return _react2.default.createElement('div', { style: layoutStyle }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Blogsys'), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/bulma.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/pushy.css' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/font-awesome.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/styles.css' })), _react2.default.createElement(_Header2.default, null), props.children);
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

var _link = __webpack_require__(544);

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

},[548]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NGUyOTgzYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzRlMjk4M2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGUyOTgzYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3QuanM/NGUyOTgzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBDb21wUG9zdHNQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcFBvc3RzUG9zdC5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYXBQb3N0cyhwcm9wcyl7XHJcblx0bGV0IHBvc3RzID0gcHJvcHMuanNvbi5wb3N0cztcclxuXHJcblx0bGV0IHR5cGUgPSBmYWxzZTtcclxuXHJcblx0bGV0IHBvc3RhcnJheSA9IFtdO1xyXG5cclxuXHRmb3IgKHZhciBpID0gcG9zdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gPENvbXBQb3N0c1Bvc3QgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJwb3N0LVwiICsgaX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3RzW2ldLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWd1cmw9e3Bvc3RzW2ldLmltZ3VybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VidGl0bGU9e3Bvc3RzW2ldLnN1YnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTI9e3Bvc3RzW2ldLnN1YnRpdGxlMn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9keT17cG9zdHNbaV0uYm9keX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0anNvbmlkPXtpfSAvPlxyXG5cclxuXHRcdHBvc3RhcnJheS5wdXNoKGNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm5cdHBvc3RhcnJheTtcclxuXHRcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuXHQ8TGF5b3V0Plx0XHJcblx0XHQ8aDE+cG9zdHM8L2gxPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0e21hcFBvc3RzKHByb3BzKX1cclxuXHRcdDwvZGl2PlxyXG5cdDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldHBvc3RzXCIpO1xyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0anNvbjogZGF0YVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiAyMCxcclxuICBwYWRkaW5nOiAyMCxcclxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG5cdCAgPEhlYWQ+XHJcblxyXG5cdCAgPHRpdGxlPkJsb2dzeXM8L3RpdGxlPlxyXG5cdCAgXHJcblx0ICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL2J1bG1hLm1pbi5jc3NcIi8+XHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvcHVzaHkuY3NzXCIvPlxyXG5cclxuXHQgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDMwMCw0MDAsNTAwLDcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcblxyXG5cdCAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIi8+XHJcblx0ICA8L0hlYWQ+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015TGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTVcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wUG9zdHNQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qUmVuZGVyIGNvbXBvbmVudCBiYXNlZCBvbiBpdHMgdHlwZS4gRmVhdHVyZWQgYXJlIHRoZSBmaXJzdCBwb3N0cyBvZiBlYWNoIHBhZ2UqL1xyXG5cdC8qcHJvcHMgYXJlIG1hbmRhdG9yeSBmb3IgY29ycmVjdCBmdW5jdGlvbmluZyBvZiB0aGUgY29tcG9uZW50Ki9cdFxyXG5cdHBvc3RFbGVtZW50VHlwZSgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy50eXBlID09IGZhbHNlKXtcclxuXHRcdFx0LypOb3JtYWwgcG9zdHMqL1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gKFx0XHJcblx0XHRcdFx0PExpbmsgYXM9e2AvcC8ke3RoaXMucHJvcHMuanNvbmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3RoaXMucHJvcHMuanNvbmlkfWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RcIj5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3QtdGl0bGVcIj48YSBocmVmPVwiXCI+e3RoaXMucHJvcHMudGl0bGV9PC9hPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlXCI+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17XCIvc3RhdGljXCIgKyB0aGlzLnByb3BzLmltZ3VybH0gYWx0PVwiSW1hZ2VNaXNzaW5nXCIgY2xhc3NOYW1lPVwiQ29tcFBvc3QtaW1hZ2UgcG9zdC1iYW5uZXItc2l6ZVwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXNwYWNlclwiPiZuYnNwOzwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGUyXCI+e3RoaXMucHJvcHMuc3VidGl0bGUyfTwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3QtYm9keVwiPnt0aGlzLnByb3BzLmJvZHl9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+PC9MaW5rPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypPbiBjbGljazogY2hlY2sgZm9yIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLFxyXG5cdGlmIGl0IGRvZXNuJ3QgZXhpc3Q6IHJlcXVlc3QgaXQsXHJcblx0aWYgcGVybWlzc2lvbiBhdmFpbGFibGUsIHNob3cgYSBub3RpZmljYXRpb24qL1x0XHJcblx0aGFuZGxlQ2xpY2soZSl7XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdENsaWNrSGFuZGxlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+e3RoaXMucG9zdEVsZW1lbnRUeXBlKCl9PC9kaXY+XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFGQTtBQUxBO0FBQ0E7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQW1CQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBOzs7Ozs7O0FBM0NBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        