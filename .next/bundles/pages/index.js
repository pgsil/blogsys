
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

var _CompHeader = __webpack_require__(570);

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

/***/ }),

/***/ 570:
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
			return _react2.default.createElement('div', { className: 'header-master' }, _react2.default.createElement('div', { id: 'pushy-container' }), _react2.default.createElement('div', { className: 'webedia-img has-text-centered push' }, _react2.default.createElement('div', { className: 'level' }, _react2.default.createElement('div', { className: 'level-left' }, _react2.default.createElement('div', { className: 'pushy-menu-btn', onClick: this.pushy }, _react2.default.createElement('i', { className: 'fa fa-bars fa-2x', 'aria-hidden': 'true' }))), _react2.default.createElement('div', { className: 'level-item' }, _react2.default.createElement('img', { src: '/images/webedia.png', alt: 'Um Site do Webedia Group' })))), _react2.default.createElement('div', { className: 'header desktopheader push' }, _react2.default.createElement('div', { className: 'header-wrapper level' }, _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/newpost', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Loremsit Do')))), _react2.default.createElement('nav', { className: 'pushy pushy-left' }, _react2.default.createElement('div', { className: 'pushy-content' }, _react2.default.createElement('ul', null, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('li', { className: 'pushy-link' }, 'Home')), _react2.default.createElement(_link2.default, { href: '/newpost' }, _react2.default.createElement('li', { className: 'pushy-link' }, 'Admin')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum'))))), _react2.default.createElement('div', { className: 'site-overlay', onClick: this.pushyRemove }));
		}
	}]);

	return CompHeader;
}(_react.Component);

exports.default = CompHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\CompHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\CompHeader.js"); } } })();

/***/ })

},[548]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzQ3ZjEyMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzM0N2YxMjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MzQ3ZjEyMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3QuanM/MzQ3ZjEyMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBIZWFkZXIuanM/MzQ3ZjEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBDb21wUG9zdHNQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcFBvc3RzUG9zdC5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYXBQb3N0cyhwcm9wcyl7XHJcblx0bGV0IHBvc3RzID0gcHJvcHMuanNvbi5wb3N0cztcclxuXHJcblx0bGV0IHR5cGUgPSBmYWxzZTtcclxuXHJcblx0bGV0IHBvc3RhcnJheSA9IFtdO1xyXG5cclxuXHRmb3IgKHZhciBpID0gcG9zdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gPENvbXBQb3N0c1Bvc3QgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJwb3N0LVwiICsgaX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3RzW2ldLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWd1cmw9e3Bvc3RzW2ldLmltZ3VybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VidGl0bGU9e3Bvc3RzW2ldLnN1YnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTI9e3Bvc3RzW2ldLnN1YnRpdGxlMn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9keT17cG9zdHNbaV0uYm9keX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0anNvbmlkPXtpfSAvPlxyXG5cclxuXHRcdHBvc3RhcnJheS5wdXNoKGNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm5cdHBvc3RhcnJheTtcclxuXHRcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuXHQ8TGF5b3V0Plx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHR7bWFwUG9zdHMocHJvcHMpfVxyXG5cdFx0PC9kaXY+XHJcblx0PC9MYXlvdXQ+XHJcbik7XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0cG9zdHNcIik7XHJcblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRqc29uOiBkYXRhXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBDb21wSGVhZGVyIGZyb20gJy4vQ29tcEhlYWRlcic7XHJcblxyXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcclxuICBtYXJnaW46IDIwLFxyXG4gIHBhZGRpbmc6IDIwLFxyXG4gIGJvcmRlcjogJzFweCBzb2xpZCAjREREJ1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcblx0ICA8SGVhZD5cclxuXHJcblx0ICA8dGl0bGU+QmxvZ3N5czwvdGl0bGU+XHJcblx0ICBcclxuXHQgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvYnVsbWEubWluLmNzc1wiLz5cclxuXHQgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9wdXNoeS5jc3NcIi8+XHJcblxyXG5cdCAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCw1MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuXHQgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuXHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3Mvc3R5bGVzLmNzc1wiLz5cclxuXHQgIDwvSGVhZD5cclxuICAgIDxDb21wSGVhZGVyLz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNVxyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBQb3N0c1Bvc3QgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LypSZW5kZXIgY29tcG9uZW50IGJhc2VkIG9uIGl0cyB0eXBlLiBGZWF0dXJlZCBhcmUgdGhlIGZpcnN0IHBvc3RzIG9mIGVhY2ggcGFnZSovXHJcblx0Lypwcm9wcyBhcmUgbWFuZGF0b3J5IGZvciBjb3JyZWN0IGZ1bmN0aW9uaW5nIG9mIHRoZSBjb21wb25lbnQqL1x0XHJcblx0cG9zdEVsZW1lbnRUeXBlKCl7XHJcblx0XHRpZih0aGlzLnByb3BzLnR5cGUgPT0gZmFsc2Upe1xyXG5cdFx0XHQvKk5vcm1hbCBwb3N0cyovXHRcdFx0XHJcblx0XHRcdHJldHVybiAoXHRcclxuXHRcdFx0XHQ8TGluayBhcz17YC9wLyR7dGhpcy5wcm9wcy5qc29uaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7dGhpcy5wcm9wcy5qc29uaWR9YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdFwiPlx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj48YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiQ29tcFBvc3QtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2E+PC9kaXY+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGVcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZX08L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXt0aGlzLnByb3BzLmltZ3VybH0gYWx0PVwiSW1hZ2VNaXNzaW5nXCIgY2xhc3NOYW1lPVwiQ29tcFBvc3QtaW1hZ2UgcG9zdC1iYW5uZXItc2l6ZVwiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXNwYWNlclwiPiZuYnNwOzwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGUyXCI+e3RoaXMucHJvcHMuc3VidGl0bGUyfTwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3QtYm9keVwiPnt0aGlzLnByb3BzLmJvZHl9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+PC9MaW5rPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypPbiBjbGljazogY2hlY2sgZm9yIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLFxyXG5cdGlmIGl0IGRvZXNuJ3QgZXhpc3Q6IHJlcXVlc3QgaXQsXHJcblx0aWYgcGVybWlzc2lvbiBhdmFpbGFibGUsIHNob3cgYSBub3RpZmljYXRpb24qL1x0XHJcblx0aGFuZGxlQ2xpY2soZSl7XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdENsaWNrSGFuZGxlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+e3RoaXMucG9zdEVsZW1lbnRUeXBlKCl9PC9kaXY+XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wdXNoeSA9IHRoaXMucHVzaHkuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMucHVzaHlSZW1vdmUgPSB0aGlzLnB1c2h5UmVtb3ZlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKlRvZ2dsZSBwdXNoLXJpZ2h0IG1lbnUgdmlzaWJpbGl0eSBieSBhZGRpbmcvcmVtb3ZpbmcgY3NzIGNsYXNzKi9cclxuXHRwdXNoeSgpe1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicHVzaHktb3Blbi1sZWZ0XCIpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInB1c2h5LW1lbnUtYnRuXCIpWzBdLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhIGZhLWFycm93LWxlZnQgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+XCI7XHJcblxyXG5cdH1cclxuXHRwdXNoeVJlbW92ZSgpe1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicHVzaHktb3Blbi1sZWZ0XCIpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInB1c2h5LW1lbnUtYnRuXCIpWzBdLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhIGZhLWJhcnMgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+XCI7XHJcblx0fVx0XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWFzdGVyXCI+XHJcblx0XHRcdFx0PGRpdiBpZD1cInB1c2h5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdCAgICBcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3ZWJlZGlhLWltZyBoYXMtdGV4dC1jZW50ZXJlZCBwdXNoXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHVzaHktbWVudS1idG5cIiBvbkNsaWNrPXt0aGlzLnB1c2h5fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnMgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1hZ2VzL3dlYmVkaWEucG5nXCIgYWx0PVwiVW0gU2l0ZSBkbyBXZWJlZGlhIEdyb3VwXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZGVza3RvcGhlYWRlciBwdXNoXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyIGxldmVsXCI+XHJcblx0XHRcdFx0XHQgIDxwIGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gaGFzLXRleHQtY2VudGVyZWQgaGVhZGVyLWxpbmstaXRlbVwiPlxyXG5cdFx0XHRcdFx0ICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibGluayBpcy1pbmZvXCI+TG9yZW0gSXBzdW08L0xpbms+XHJcblx0XHRcdFx0XHQgIDwvcD5cclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICA8TGluayBocmVmPVwiL25ld3Bvc3RcIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbXNpdCBEbzwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwicHVzaHkgcHVzaHktbGVmdFwiPlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInB1c2h5LWNvbnRlbnRcIj5cclxuXHRcdFx0XHQgICAgICAgIDx1bD5cdFx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj5Ib21lPC9saT48L0xpbms+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdwb3N0XCI+PGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj5BZG1pbjwvbGk+PC9MaW5rPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgPC91bD5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0PC9uYXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1vdmVybGF5XCIgb25DbGljaz17dGhpcy5wdXNoeVJlbW92ZX0+PC9kaXY+XHJcblx0XHRcdDwvZGl2Pik7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFGQTtBQUxBO0FBQ0E7QUFRQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQW1CQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBOzs7Ozs7O0FBM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7OztBQXJCQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        