
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Header = __webpack_require__(547);

var _Header2 = _interopRequireDefault(_Header);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _CompHeader = __webpack_require__(550);

var _CompHeader2 = _interopRequireDefault(_CompHeader);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

var Layout = function Layout(props) {
	return _react2.default.createElement('div', { style: layoutStyle }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Blogsys'), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/bulma.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/pushy.css' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/font-awesome.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/styles.css' })), _react2.default.createElement(_CompHeader2.default, null), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\MyLayout.js"); } } })();

/***/ }),

/***/ 547:
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

/***/ 550:
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

var CompHeader = function (_Component) {
	_inherits(CompHeader, _Component);

	function CompHeader(props) {
		_classCallCheck(this, CompHeader);

		var _this = _possibleConstructorReturn(this, (CompHeader.__proto__ || Object.getPrototypeOf(CompHeader)).call(this));

		_this.pushy = _this.pushy.bind(_this);
		_this.pushyRemove = _this.pushyRemove.bind(_this);
		return _this;
	}

	/*Toggle push-right menu visibility by adding/removing css class*/

	_createClass(CompHeader, [{
		key: 'pushy',
		value: function pushy() {
			document.body.classList.add("pushy-open-left");
			document.getElementsByClassName("pushy-menu-btn")[0].innerHTML = "<i class='fa fa-arrow-left fa-2x' aria-hidden='true'></i>";
		}
	}, {
		key: 'pushyRemove',
		value: function pushyRemove() {
			document.body.classList.remove("pushy-open-left");
			document.getElementsByClassName("pushy-menu-btn")[0].innerHTML = "<i class='fa fa-bars fa-2x' aria-hidden='true'></i>";
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'header-master' }, _react2.default.createElement('div', { id: 'pushy-container' }), _react2.default.createElement('div', { className: 'webedia-img has-text-centered push' }, _react2.default.createElement('div', { className: 'level' }, _react2.default.createElement('div', { className: 'level-left' }, _react2.default.createElement('div', { className: 'pushy-menu-btn', onClick: this.pushy }, _react2.default.createElement('i', { className: 'fa fa-bars fa-2x', 'aria-hidden': 'true' }))), _react2.default.createElement('div', { className: 'level-item' }, _react2.default.createElement('img', { src: '/static/images/webedia.png', alt: 'Um Site do Webedia Group' })))), _react2.default.createElement('div', { className: 'header desktopheader push' }, _react2.default.createElement('div', { className: 'header-wrapper level' }, _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/newpost', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Loremsit Do')))), _react2.default.createElement('nav', { className: 'pushy pushy-left' }, _react2.default.createElement('div', { className: 'pushy-content' }, _react2.default.createElement('ul', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('li', { className: 'pushy-link' }, 'Home')), _react2.default.createElement(_link2.default, { href: '/newpost' }, _react2.default.createElement('li', { className: 'pushy-link' }, 'Admin')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum'))))), _react2.default.createElement('div', { className: 'site-overlay', onClick: this.pushyRemove }));
		}
	}]);

	return CompHeader;
}(_react.Component);

exports.default = CompHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\CompHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\CompHeader.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(556);


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(557);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _MyLayout = __webpack_require__(546);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _CompPostsPost = __webpack_require__(558);

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
	return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('div', { className: 'container' }, mapPosts(props)));
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

/***/ 558:
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

var _reactRouter = __webpack_require__(559);

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
				return _react2.default.createElement(_link2.default, { as: '/p/' + this.props.jsonid, href: '/post?id=' + this.props.jsonid }, _react2.default.createElement('div', { className: 'CompPost' }, _react2.default.createElement('div', { className: '' }, _react2.default.createElement('a', { href: '', className: 'CompPost-title' }, this.props.title)), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, this.props.subtitle), _react2.default.createElement('div', { className: 'has-text-centered' }, _react2.default.createElement('img', { src: this.props.imgurl, alt: 'ImageMissing', className: 'CompPost-image post-banner-size' })), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, this.props.body)));
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

},[555]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcz9mN2NkZjk4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2Y3Y2RmOTgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wSGVhZGVyLmpzP2Y3Y2RmOTgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjdjZGY5OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3QuanM/ZjdjZGY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBDb21wSGVhZGVyIGZyb20gJy4vQ29tcEhlYWRlcic7XHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBtYXJnaW46IDIwLFxyXG4gIHBhZGRpbmc6IDIwLFxyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcblx0ICA8SGVhZD5cclxuXHJcblx0ICA8dGl0bGU+QmxvZ3N5czwvdGl0bGU+XHJcblx0ICBcclxuXHQgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvYnVsbWEubWluLmNzc1wiLz5cclxuXHQgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9wdXNoeS5jc3NcIi8+XHJcblxyXG5cdCAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCw1MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuXHQgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuXHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3Mvc3R5bGVzLmNzc1wiLz5cclxuXHQgIDwvSGVhZD5cclxuICAgIDxDb21wSGVhZGVyLz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNVxyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHRcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucHVzaHkgPSB0aGlzLnB1c2h5LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnB1c2h5UmVtb3ZlID0gdGhpcy5wdXNoeVJlbW92ZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LypUb2dnbGUgcHVzaC1yaWdodCBtZW51IHZpc2liaWxpdHkgYnkgYWRkaW5nL3JlbW92aW5nIGNzcyBjbGFzcyovXHJcblx0cHVzaHkoKXtcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInB1c2h5LW9wZW4tbGVmdFwiKTtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwdXNoeS1tZW51LWJ0blwiKVswXS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYSBmYS1hcnJvdy1sZWZ0IGZhLTJ4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlwiO1xyXG5cclxuXHR9XHJcblx0cHVzaHlSZW1vdmUoKXtcclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInB1c2h5LW9wZW4tbGVmdFwiKTtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwdXNoeS1tZW51LWJ0blwiKVswXS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYSBmYS1iYXJzIGZhLTJ4JyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlwiO1xyXG5cdH1cdFxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW1hc3RlclwiPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJwdXNoeS1jb250YWluZXJcIj5cclxuXHRcdFx0XHQgICAgXHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid2ViZWRpYS1pbWcgaGFzLXRleHQtY2VudGVyZWQgcHVzaFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB1c2h5LW1lbnUtYnRuXCIgb25DbGljaz17dGhpcy5wdXNoeX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzIGZhLTJ4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd2ViZWRpYS5wbmdcIiBhbHQ9XCJVbSBTaXRlIGRvIFdlYmVkaWEgR3JvdXBcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlciBkZXNrdG9waGVhZGVyIHB1c2hcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXIgbGV2ZWxcIj5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgIDxMaW5rIGhyZWY9XCIvbmV3cG9zdFwiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtc2l0IERvPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJwdXNoeSBwdXNoeS1sZWZ0XCI+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicHVzaHktY29udGVudFwiPlxyXG5cdFx0XHRcdCAgICAgICAgPHVsPlx0XHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPkhvbWU8L2xpPjwvTGluaz5cclxuXHRcdFx0XHQgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3Bvc3RcIj48bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPkFkbWluPC9saT48L0xpbms+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48YSBocmVmPVwiI1wiPkxvcmVtIElwc3VtPC9hPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICA8L3VsPlxyXG5cdFx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0XHQ8L25hdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaXRlLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLnB1c2h5UmVtb3ZlfT48L2Rpdj5cclxuXHRcdFx0PC9kaXY+KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbXBIZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBDb21wUG9zdHNQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcFBvc3RzUG9zdC5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYXBQb3N0cyhwcm9wcyl7XHJcblx0bGV0IHBvc3RzID0gcHJvcHMuanNvbi5wb3N0cztcclxuXHJcblx0bGV0IHR5cGUgPSBmYWxzZTtcclxuXHJcblx0bGV0IHBvc3RhcnJheSA9IFtdO1xyXG5cclxuXHRmb3IgKHZhciBpID0gcG9zdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gPENvbXBQb3N0c1Bvc3QgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJwb3N0LVwiICsgaX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3RzW2ldLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWd1cmw9e3Bvc3RzW2ldLmltZ3VybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VidGl0bGU9e3Bvc3RzW2ldLnN1YnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTI9e3Bvc3RzW2ldLnN1YnRpdGxlMn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9keT17cG9zdHNbaV0uYm9keX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0anNvbmlkPXtpfSAvPlxyXG5cclxuXHRcdHBvc3RhcnJheS5wdXNoKGNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm5cdHBvc3RhcnJheTtcclxuXHRcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuXHQ8TGF5b3V0Plx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHR7bWFwUG9zdHMocHJvcHMpfVxyXG5cdFx0PC9kaXY+XHJcblx0PC9MYXlvdXQ+XHJcbik7XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0cG9zdHNcIik7XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRqc29uOiBkYXRhXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wUG9zdHNQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qUmVuZGVyIGNvbXBvbmVudCBiYXNlZCBvbiBpdHMgdHlwZS4gRmVhdHVyZWQgYXJlIHRoZSBmaXJzdCBwb3N0cyBvZiBlYWNoIHBhZ2UqL1xyXG5cdC8qcHJvcHMgYXJlIG1hbmRhdG9yeSBmb3IgY29ycmVjdCBmdW5jdGlvbmluZyBvZiB0aGUgY29tcG9uZW50Ki9cdFxyXG5cdHBvc3RFbGVtZW50VHlwZSgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy50eXBlID09IGZhbHNlKXtcclxuXHRcdFx0LypOb3JtYWwgcG9zdHMqL1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gKFx0XHJcblx0XHRcdFx0PExpbmsgYXM9e2AvcC8ke3RoaXMucHJvcHMuanNvbmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3RoaXMucHJvcHMuanNvbmlkfWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RcIj5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIkNvbXBQb3N0LXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9hPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlXCI+e3RoaXMucHJvcHMuc3VidGl0bGV9PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWd1cmx9IGFsdD1cIkltYWdlTWlzc2luZ1wiIGNsYXNzTmFtZT1cIkNvbXBQb3N0LWltYWdlIHBvc3QtYmFubmVyLXNpemVcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zcGFjZXJcIj4mbmJzcDs8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlMlwiPnt0aGlzLnByb3BzLnN1YnRpdGxlMn08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LWJvZHlcIj57dGhpcy5wcm9wcy5ib2R5fTwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PjwvTGluaz5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qT24gY2xpY2s6IGNoZWNrIGZvciBub3RpZmljYXRpb24gcGVybWlzc2lvbixcclxuXHRpZiBpdCBkb2Vzbid0IGV4aXN0OiByZXF1ZXN0IGl0LFxyXG5cdGlmIHBlcm1pc3Npb24gYXZhaWxhYmxlLCBzaG93IGEgbm90aWZpY2F0aW9uKi9cdFxyXG5cdGhhbmRsZUNsaWNrKGUpe1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RDbGlja0hhbmRsZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9Pnt0aGlzLnBvc3RFbGVtZW50VHlwZSgpfTwvZGl2PlxyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29tcFBvc3RzUG9zdC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7OztBQXJCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBRkE7QUFMQTtBQUNBO0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7OztBQUVBO0FBQUE7QUFFQTtBQUNBO0FBbUJBO0FBRUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7Ozs7QUEzQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        