
          window.__NEXT_REGISTER_PAGE('/page', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

var _reactImages = __webpack_require__(580);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\CompBigBanner.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\CompBigBanner.js"); } } })();

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(564);


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(565);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

var _MyLayout = __webpack_require__(568);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _CompPostsPost = __webpack_require__(571);

var _CompPostsPost2 = _interopRequireDefault(_CompPostsPost);

var _CompPostsPostFeatured = __webpack_require__(626);

var _CompPostsPostFeatured2 = _interopRequireDefault(_CompPostsPostFeatured);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function mapPosts(props) {
	var posts = props.json.posts;
	var tgtPage = props.page;
	var type = false;
	var postsOdd = [],
	    postsEven = [],
	    postFeatured = void 0,
	    postarray = [];

	tgtPage = tgtPage * 5;

	var startInd = posts.length - 1 - tgtPage;
	var endInd = posts.length - (tgtPage + 5);

	var paginationDone = false;

	for (var i = startInd; i >= endInd; i--) {

		if (posts[i]) {
			var component = _react2.default.createElement(_CompPostsPost2.default, {
				key: "post-" + i,
				type: type,
				title: posts[i].title,
				imgurl: posts[i].imgurl,
				subtitle: posts[i].subtitle,
				subtitle2: posts[i].subtitle2,
				body: posts[i].body,
				jsonid: i });

			/*is it the first post of the page?*/
			if (i === startInd) {
				var featured = _react2.default.createElement(_CompPostsPostFeatured2.default, {
					key: "post-" + i,
					type: type,
					title: posts[i].title,
					imgurl: posts[i].imgurl,
					subtitle: posts[i].subtitle,
					subtitle2: posts[i].subtitle2,
					body: posts[i].body,
					jsonid: i });

				postFeatured = featured;
			}
			/*if it's not the first post of the page, separate into columns*/
			else {
					if (i % 2 === 0) {
						postsEven.push(component);
					} else {
						postsOdd.push(component);
					}
				}
		} else {
			paginationDone = true;
		}
	}
	return _react2.default.createElement('div', { className: 'CompPostsMain container' }, _react2.default.createElement('div', { className: 'has-text-centered push' }, postFeatured), _react2.default.createElement('div', { className: 'columns is-desktop push' }, _react2.default.createElement('div', { className: 'column' }, postsEven), _react2.default.createElement('div', { className: 'column' }, postsOdd)), _react2.default.createElement('div', null, props.page == 0 ? null : _react2.default.createElement(_link2.default, { prefetch: true, as: "/page/" + (parseInt(props.page) - 1).toString(), href: "/page?page=" + (parseInt(props.page) - 1), className: 'link is-info' }, _react2.default.createElement('button', { className: 'button is-success' }, 'Previous Page')), paginationDone ? null : _react2.default.createElement(_link2.default, { prefetch: true, as: "/page/" + (parseInt(props.page) + 1).toString(), href: "/page?page=" + (parseInt(props.page) + 1), className: 'link is-info' }, _react2.default.createElement('button', { className: 'button is-success' }, 'Next Page'))), _react2.default.createElement('br', null));
};

var PostsPage = function PostsPage(props) {
	return _react2.default.createElement(_MyLayout2.default, null, mapPosts(props));
};

PostsPage.getInitialProps = async function (context) {
	var res = await (0, _isomorphicUnfetch2.default)("http://localhost:3000/api/getposts");
	var data = await res.json();

	return {
		json: data,
		page: context.query.page
	};
};

exports.default = PostsPage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\pages\\page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\pages\\page.js"); } } })();
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
    })(module.exports.default || module.exports, "/page")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Header = __webpack_require__(569);

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

var layoutStyle = {};

var Layout = function Layout(props) {
	return _react2.default.createElement('div', { style: layoutStyle }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Blogsys'), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/bulma.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/pushy.css' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700', rel: 'stylesheet' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/font-awesome.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/styles.css' })), _react2.default.createElement(_CompHeader2.default, null), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\MyLayout.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_link2.default, { as: '/page/0', href: '/page?page=0' }, _react2.default.createElement('a', { style: linkStyle }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', { style: linkStyle }, 'About')));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\Header.js"); } } })();

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

var _link = __webpack_require__(547);

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
			return _react2.default.createElement('div', { className: 'header-master' }, _react2.default.createElement('div', { id: 'pushy-container' }), _react2.default.createElement('div', { className: 'webedia-img has-text-centered push' }, _react2.default.createElement('div', { className: 'level' }, _react2.default.createElement('div', { className: 'level-left' }, _react2.default.createElement('div', { className: 'pushy-menu-btn', onClick: this.pushy }, _react2.default.createElement('i', { className: 'fa fa-bars fa-2x', 'aria-hidden': 'true' }))), _react2.default.createElement('div', { className: 'level-item' }, _react2.default.createElement('img', { src: '/static/images/webedia.png', alt: 'Um Site do Webedia Group' })))), _react2.default.createElement('div', { className: 'header desktopheader push' }, _react2.default.createElement('div', { className: 'header-wrapper level' }, _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { as: '/', href: '/page?page=0', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/newpost', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Lorem Ipsum')), _react2.default.createElement('p', { className: 'level-item has-text-centered header-link-item' }, _react2.default.createElement(_link2.default, { href: '/', className: 'link is-info' }, 'Loremsit Do')))), _react2.default.createElement('nav', { className: 'pushy pushy-left' }, _react2.default.createElement('div', { className: 'pushy-content' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement(_link2.default, { as: '/', href: '/page?page=0' }, _react2.default.createElement('a', null, 'Home'))), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement(_link2.default, { href: '/newpost' }, _react2.default.createElement('a', null, 'Admin'))), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum')), _react2.default.createElement('li', { className: 'pushy-link' }, _react2.default.createElement('a', { href: '#' }, 'Lorem Ipsum'))))), _react2.default.createElement('div', { className: 'site-overlay', onClick: this.pushyRemove }));
		}
	}]);

	return CompHeader;
}(_react.Component);

exports.default = CompHeader;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\CompHeader.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\CompHeader.js"); } } })();

/***/ }),

/***/ 571:
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

var _reactRouter = __webpack_require__(553);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

var _CompBigBanner = __webpack_require__(555);

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
				return _react2.default.createElement(_link2.default, { as: '/viewpost/' + this.props.jsonid, href: '/post?id=' + this.props.jsonid }, _react2.default.createElement('div', { className: 'CompPost' }, _react2.default.createElement('div', { className: '' }, _react2.default.createElement('a', { href: '', className: 'CompPost-title' }, this.props.title)), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, this.props.subtitle), _react2.default.createElement('div', { className: 'has-text-centered' }, _react2.default.createElement(_CompBigBanner2.default, { imgUrl: this.props.imgurl,
					bgColor: '#ffffff',
					bgPos: 'center center',
					bgSizeOverride: 'cover' })), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, this.props.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, this.props.body)));
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

/***/ 626:
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

var _reactRouter = __webpack_require__(553);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

var _CompBigBanner = __webpack_require__(555);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\components\\CompPostsPostFeatured.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\components\\CompPostsPostFeatured.js"); } } })();

/***/ })

},[563]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHBhZ2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBCaWdCYW5uZXIuanM/ZDU5NjgyZSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLmpzP2Q1OTY4MmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcz9kNTk2ODJlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzP2Q1OTY4MmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wSGVhZGVyLmpzP2Q1OTY4MmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzP2Q1OTY4MmUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0RmVhdHVyZWQuanM/ZDU5NjgyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlnaHRib3ggZnJvbSAncmVhY3QtaW1hZ2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBCaWdCYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0ICAgICBzdXBlcigpO1xyXG5cclxuXHQgICAgIHRoaXMuc3RhdGUgPSB7bGlnaHRib3hJc09wZW46IGZhbHNlfTtcclxuXHQgICAgIHRoaXMub3BlbkxpZ2h0Ym94ID0gdGhpcy5vcGVuTGlnaHRib3guYmluZCh0aGlzKTtcclxuXHQgICAgIHRoaXMuY2xvc2VMaWdodGJveCA9IHRoaXMuY2xvc2VMaWdodGJveC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0LyppZiBwcm9wcy5kYXJrZW4gaXMgdHJ1ZSwgaXQgZGFya2VucyB0aGUgaW1hZ2UqL1xyXG5cdC8qdXNlZnVsIGZvciBoYXZpbmcgdGV4dCBpbiBmcm9udCBvZiB0aGUgaW1hZ2UqL1xyXG5cdGdldERhcmtlbigpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5kYXJrZW4pe1xyXG5cdFx0XHRsZXQgdXJsc3RyID0gJ3VybCgnKyB0aGlzLnByb3BzLmltZ1VybCArICcpJztcclxuXHRcdFx0cmV0dXJuIFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41NSksIHJnYmEoMCwgMCwgMCwgMC41NSkgKSxcIiArIHVybHN0cjtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHJldHVybiAndXJsKCcrIHRoaXMucHJvcHMuaW1nVXJsICsgJyknO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKmNoZWNrcyBpZiB0aGlzLnByb3BzLmNvbnRlbnRzIGlzIHZhbGlkKi9cclxuXHRnZXRDb250ZW50cygpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy5jb250ZW50cyl7XHJcblx0XHRcdHJldHVybiB0aGlzLnByb3BzLmNvbnRlbnRzO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0cmV0dXJuIDxkaXY+Jm5ic3A7PC9kaXY+XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG9wZW5MaWdodGJveChldmVudCl7XHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0Y3VycmVudEltYWdlOiAwLFxyXG5cdFx0XHRsaWdodGJveElzT3BlbjogdHJ1ZSxcclxuXHRcdH0pO1xyXG5cdH1cdFxyXG5cdGNsb3NlTGlnaHRib3goKXtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRjdXJyZW50SW1hZ2U6IDAsXHJcblx0XHRcdGxpZ2h0Ym94SXNPcGVuOiBmYWxzZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHRcclxuXHRcdHJldHVybiAoXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmlnLWJhbm5lciBoYXMtdGV4dC1jZW50ZXJlZCBpcy1tb2JpbGUgcG9zdC1iYW5uZXItc2l6ZVwiIHN0eWxlPXt7IFx0XHJcblx0XHRcdFx0YmFja2dyb3VuZDogdGhpcy5nZXREYXJrZW4oKSxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kU2l6ZTogdGhpcy5wcm9wcy5iZ1NpemVPdmVycmlkZSxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvcHMuYmdDb2xvcixcclxuXHRcdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMucHJvcHMuYmdQb3MsXHJcblx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0XHRoZWlnaHQ6IHRoaXMucHJvcHMuaGVpZ2h0LFxyXG5cdFx0XHRcdHdpZHRoOiB0aGlzLnByb3BzLndpZHRoT3ZlcnJpZGV9fSBvbkNsaWNrPXt0aGlzLm9wZW5MaWdodGJveH0+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiem9vbS13cmFwcGVyIGxldmVsIGlzLW1vYmlsZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldmVsLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvem9vbS5wbmdcIiBhbHQ9XCJ6b29tIGluXCIgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSB6b29tLWltZ1wiIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0e3RoaXMuZ2V0Q29udGVudHMoKX1cclxuXHJcblxyXG5cdFx0XHRcdDxMaWdodGJveFxyXG5cdFx0XHQgICAgICAgIGltYWdlcz17W3sgc3JjOiB0aGlzLnByb3BzLmltZ1VybCB9XX1cclxuXHRcdFx0ICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubGlnaHRib3hJc09wZW59XHJcblx0XHRcdCAgICAgICAgb25DbGlja1ByZXY9e3RoaXMuZ290b1ByZXZpb3VzfVxyXG5cdFx0XHQgICAgICAgIG9uQ2xpY2tOZXh0PXt0aGlzLmdvdG9OZXh0fVxyXG5cdFx0XHQgICAgICAgIG9uQ2xvc2U9e3RoaXMuY2xvc2VMaWdodGJveH1cclxuXHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29tcEJpZ0Jhbm5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJztcclxuaW1wb3J0IENvbXBQb3N0c1Bvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0LmpzJztcclxuaW1wb3J0IENvbXBQb3N0c1Bvc3RGZWF0dXJlZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3RGZWF0dXJlZC5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYXBQb3N0cyhwcm9wcyl7XHJcblx0bGV0IHBvc3RzID0gcHJvcHMuanNvbi5wb3N0cztcclxuXHRsZXQgdGd0UGFnZSA9IHByb3BzLnBhZ2U7XHJcblx0bGV0IHR5cGUgPSBmYWxzZTtcclxuXHRsZXQgcG9zdHNPZGQgPSBbXSwgcG9zdHNFdmVuID0gW10sIHBvc3RGZWF0dXJlZCwgcG9zdGFycmF5ID0gW107XHJcblxyXG5cdHRndFBhZ2UgPSB0Z3RQYWdlKjU7XHRcclxuXHRcclxuXHRsZXQgc3RhcnRJbmQgPSAoKHBvc3RzLmxlbmd0aCAtIDEpIC0gdGd0UGFnZSk7XHJcblx0bGV0IGVuZEluZCA9IChwb3N0cy5sZW5ndGggLSAodGd0UGFnZSArIDUpKTtcclxuXHJcblx0bGV0IHBhZ2luYXRpb25Eb25lID0gZmFsc2U7XHJcblxyXG5cclxuXHRmb3IgKHZhciBpID0gc3RhcnRJbmQ7IGkgPj0gZW5kSW5kOyBpLS0pIHtcclxuXHJcblx0XHRpZihwb3N0c1tpXSl7XHJcblx0XHRcdGxldCBjb21wb25lbnQgPSA8Q29tcFBvc3RzUG9zdCBcclxuXHRcdFx0XHRrZXk9e1wicG9zdC1cIiArIGl9XHJcblx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHR0aXRsZT17cG9zdHNbaV0udGl0bGV9XHJcblx0XHRcdFx0aW1ndXJsPXtwb3N0c1tpXS5pbWd1cmx9XHJcblx0XHRcdFx0c3VidGl0bGU9e3Bvc3RzW2ldLnN1YnRpdGxlfVxyXG5cdFx0XHRcdHN1YnRpdGxlMj17cG9zdHNbaV0uc3VidGl0bGUyfVxyXG5cdFx0XHRcdGJvZHk9e3Bvc3RzW2ldLmJvZHl9XHJcblx0XHRcdFx0anNvbmlkPXtpfSAvPlxyXG5cdFx0XHRcclxuXHRcdFx0LyppcyBpdCB0aGUgZmlyc3QgcG9zdCBvZiB0aGUgcGFnZT8qL1xyXG5cdFx0XHRpZihpID09PSBzdGFydEluZCl7XHJcblx0XHRcdFx0bGV0IGZlYXR1cmVkID0gPENvbXBQb3N0c1Bvc3RGZWF0dXJlZCBcclxuXHRcdFx0XHRcdGtleT17XCJwb3N0LVwiICsgaX1cclxuXHRcdFx0XHRcdHR5cGU9e3R5cGV9XHJcblx0XHRcdFx0XHR0aXRsZT17cG9zdHNbaV0udGl0bGV9XHJcblx0XHRcdFx0XHRpbWd1cmw9e3Bvc3RzW2ldLmltZ3VybH1cclxuXHRcdFx0XHRcdHN1YnRpdGxlPXtwb3N0c1tpXS5zdWJ0aXRsZX1cclxuXHRcdFx0XHRcdHN1YnRpdGxlMj17cG9zdHNbaV0uc3VidGl0bGUyfVxyXG5cdFx0XHRcdFx0Ym9keT17cG9zdHNbaV0uYm9keX1cclxuXHRcdFx0XHRcdGpzb25pZD17aX0gLz5cclxuXHJcblx0XHRcdFx0cG9zdEZlYXR1cmVkID0gZmVhdHVyZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0LyppZiBpdCdzIG5vdCB0aGUgZmlyc3QgcG9zdCBvZiB0aGUgcGFnZSwgc2VwYXJhdGUgaW50byBjb2x1bW5zKi9cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRpZihpJTIgPT09IDApe1xyXG5cdFx0XHRcdFx0cG9zdHNFdmVuLnB1c2goY29tcG9uZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHBvc3RzT2RkLnB1c2goY29tcG9uZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHBhZ2luYXRpb25Eb25lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuXHQoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0c01haW4gY29udGFpbmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWQgcHVzaFwiPntwb3N0RmVhdHVyZWR9PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtZGVza3RvcCBwdXNoXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdHtwb3N0c0V2ZW59XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcblx0XHRcdFx0XHR7cG9zdHNPZGR9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7cHJvcHMucGFnZSA9PSAwID8gbnVsbCA6IDxMaW5rIHByZWZldGNoIGFzPXtcIi9wYWdlL1wiICsgKHBhcnNlSW50KHByb3BzLnBhZ2UpIC0gMSkudG9TdHJpbmcoKX0gaHJlZj17XCIvcGFnZT9wYWdlPVwiICsgKHBhcnNlSW50KHByb3BzLnBhZ2UpIC0gMSl9IGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPjxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIj5QcmV2aW91cyBQYWdlPC9idXR0b24+PC9MaW5rPn1cclxuXHRcdFx0XHR7cGFnaW5hdGlvbkRvbmUgPyBudWxsIDogPExpbmsgcHJlZmV0Y2ggYXM9e1wiL3BhZ2UvXCIgKyAocGFyc2VJbnQocHJvcHMucGFnZSkgKyAxKS50b1N0cmluZygpfSBocmVmPXtcIi9wYWdlP3BhZ2U9XCIgKyAocGFyc2VJbnQocHJvcHMucGFnZSkgKyAxKX0gY2xhc3NOYW1lPVwibGluayBpcy1pbmZvXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtc3VjY2Vzc1wiPk5leHQgUGFnZTwvYnV0dG9uPjwvTGluaz59XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8YnIvPlxyXG5cdFx0PC9kaXY+KTtcdFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBvc3RzUGFnZSA9IChwcm9wcykgPT4gKFxyXG5cdDxMYXlvdXQ+XHRcclxuXHRcdHttYXBQb3N0cyhwcm9wcyl9XHJcblx0PC9MYXlvdXQ+XHJcbik7XHJcblxyXG5Qb3N0c1BhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRwb3N0c1wiKTtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGpzb246IGRhdGEsXHJcblx0XHRwYWdlOiBjb250ZXh0LnF1ZXJ5LnBhZ2VcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0c1BhZ2VcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcGFnZS5qcz9lbnRyeSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IENvbXBIZWFkZXIgZnJvbSAnLi9Db21wSGVhZGVyJztcclxuXHJcbmNvbnN0IGxheW91dFN0eWxlID0ge1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XHJcblx0ICA8SGVhZD5cclxuXHJcblx0ICA8dGl0bGU+QmxvZ3N5czwvdGl0bGU+XHJcblx0ICBcclxuXHQgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvYnVsbWEubWluLmNzc1wiLz5cclxuXHQgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9wdXNoeS5jc3NcIi8+XHJcblxyXG5cdCAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCw1MDAsNzAwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuXHQgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cclxuXHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3Mvc3R5bGVzLmNzc1wiLz5cclxuXHQgIDwvSGVhZD5cclxuICAgIDxDb21wSGVhZGVyLz5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNVxyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8TGluayBhcz1cIi9wYWdlLzBcIiBocmVmPVwiL3BhZ2U/cGFnZT0wXCI+XHJcbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5BYm91dDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5wdXNoeSA9IHRoaXMucHVzaHkuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMucHVzaHlSZW1vdmUgPSB0aGlzLnB1c2h5UmVtb3ZlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHQvKlRvZ2dsZSBwdXNoLXJpZ2h0IG1lbnUgdmlzaWJpbGl0eSBieSBhZGRpbmcvcmVtb3ZpbmcgY3NzIGNsYXNzKi9cclxuXHRwdXNoeSgpe1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicHVzaHktb3Blbi1sZWZ0XCIpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInB1c2h5LW1lbnUtYnRuXCIpWzBdLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhIGZhLWFycm93LWxlZnQgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+XCI7XHJcblxyXG5cdH1cclxuXHRwdXNoeVJlbW92ZSgpe1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicHVzaHktb3Blbi1sZWZ0XCIpO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInB1c2h5LW1lbnUtYnRuXCIpWzBdLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhIGZhLWJhcnMgZmEtMngnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+XCI7XHJcblx0fVx0XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbWFzdGVyXCI+XHJcblx0XHRcdFx0PGRpdiBpZD1cInB1c2h5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdCAgICBcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3ZWJlZGlhLWltZyBoYXMtdGV4dC1jZW50ZXJlZCBwdXNoXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV2ZWwtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHVzaHktbWVudS1idG5cIiBvbkNsaWNrPXt0aGlzLnB1c2h5fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnMgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXZlbC1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy93ZWJlZGlhLnBuZ1wiIGFsdD1cIlVtIFNpdGUgZG8gV2ViZWRpYSBHcm91cFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyIGRlc2t0b3BoZWFkZXIgcHVzaFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlciBsZXZlbFwiPlxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBhcz1cIi9cIiBocmVmPVwiL3BhZ2U/cGFnZT0wXCIgY2xhc3NOYW1lPVwibGluayBpcy1pbmZvXCI+TG9yZW0gSXBzdW08L0xpbms+XHJcblx0XHRcdFx0XHQgIDwvcD5cclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICA8TGluayBocmVmPVwiL25ld3Bvc3RcIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbXNpdCBEbzwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwicHVzaHkgcHVzaHktbGVmdFwiPlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInB1c2h5LWNvbnRlbnRcIj5cclxuXHRcdFx0XHQgICAgICAgIDx1bD5cdFx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PExpbmsgYXM9XCIvXCIgaHJlZj1cIi9wYWdlP3BhZ2U9MFwiPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48TGluayBocmVmPVwiL25ld3Bvc3RcIj48YT5BZG1pbjwvYT48L0xpbms+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxhIGhyZWY9XCIjXCI+TG9yZW0gSXBzdW08L2E+PC9saT5cclxuXHRcdFx0XHQgICAgICAgIDwvdWw+XHJcblx0XHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHRcdDwvbmF2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpdGUtb3ZlcmxheVwiIG9uQ2xpY2s9e3RoaXMucHVzaHlSZW1vdmV9PjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj4pO1xyXG5cdH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29tcEhlYWRlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBDb21wQmlnQmFubmVyIGZyb20gJy4vQ29tcEJpZ0Jhbm5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wUG9zdHNQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qUmVuZGVyIGNvbXBvbmVudCBiYXNlZCBvbiBpdHMgdHlwZS4gRmVhdHVyZWQgYXJlIHRoZSBmaXJzdCBwb3N0cyBvZiBlYWNoIHBhZ2UqL1xyXG5cdC8qcHJvcHMgYXJlIG1hbmRhdG9yeSBmb3IgY29ycmVjdCBmdW5jdGlvbmluZyBvZiB0aGUgY29tcG9uZW50Ki9cdFxyXG5cdHBvc3RFbGVtZW50VHlwZSgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy50eXBlID09IGZhbHNlKXtcclxuXHRcdFx0LypOb3JtYWwgcG9zdHMqL1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gKFx0XHJcblx0XHRcdFx0PExpbmsgYXM9e2Avdmlld3Bvc3QvJHt0aGlzLnByb3BzLmpzb25pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHt0aGlzLnByb3BzLmpzb25pZH1gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0XCI+XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPjxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJDb21wUG9zdC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvYT48L2Rpdj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zdWJ0aXRsZVwiPnt0aGlzLnByb3BzLnN1YnRpdGxlfTwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdFx0PENvbXBCaWdCYW5uZXIgaW1nVXJsPXt0aGlzLnByb3BzLmltZ3VybH0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJnQ29sb3I9XCIjZmZmZmZmXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJnUG9zPVwiY2VudGVyIGNlbnRlclwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiZ1NpemVPdmVycmlkZT1cImNvdmVyXCIgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3BhY2VyXCI+Jm5ic3A7PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zdWJ0aXRsZTJcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZTJ9PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1ib2R5XCI+e3RoaXMucHJvcHMuYm9keX08L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj48L0xpbms+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKk9uIGNsaWNrOiBjaGVjayBmb3Igbm90aWZpY2F0aW9uIHBlcm1pc3Npb24sXHJcblx0aWYgaXQgZG9lc24ndCBleGlzdDogcmVxdWVzdCBpdCxcclxuXHRpZiBwZXJtaXNzaW9uIGF2YWlsYWJsZSwgc2hvdyBhIG5vdGlmaWNhdGlvbiovXHRcclxuXHRoYW5kbGVDbGljayhlKXtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0Q2xpY2tIYW5kbGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT57dGhpcy5wb3N0RWxlbWVudFR5cGUoKX08L2Rpdj5cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbXBQb3N0c1Bvc3QuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgQ29tcEJpZ0Jhbm5lciBmcm9tICcuL0NvbXBCaWdCYW5uZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcFBvc3RzUG9zdEZlYXR1cmVkIGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qUmVuZGVyIGNvbXBvbmVudCBiYXNlZCBvbiBpdHMgdHlwZS4gRmVhdHVyZWQgYXJlIHRoZSBmaXJzdCBwb3N0cyBvZiBlYWNoIHBhZ2UqL1xyXG5cdC8qcHJvcHMgYXJlIG1hbmRhdG9yeSBmb3IgY29ycmVjdCBmdW5jdGlvbmluZyBvZiB0aGUgY29tcG9uZW50Ki9cdFxyXG5cdHBvc3RFbGVtZW50VHlwZSgpe1xyXG5cdFx0aWYodGhpcy5wcm9wcy50eXBlID09IGZhbHNlKXtcclxuXHRcdFx0LypOb3JtYWwgcG9zdHMqL1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gKFx0XHJcblx0XHRcdFx0PExpbmsgcHJlZmV0Y2ggYXM9e2Avdmlld3Bvc3QvJHt0aGlzLnByb3BzLmpzb25pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHt0aGlzLnByb3BzLmpzb25pZH1gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0RmVhdHVyZWRcIj5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+PGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIkNvbXBQb3N0RmVhdHVyZWQtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2E+PC9kaXY+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RGZWF0dXJlZC1zdWJ0aXRsZVwiPnt0aGlzLnByb3BzLnN1YnRpdGxlfTwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIj5cclxuXHRcdFx0XHRcdFx0PENvbXBCaWdCYW5uZXIgaW1nVXJsPXt0aGlzLnByb3BzLmltZ3VybH0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJnQ29sb3I9XCIjZmZmZmZmXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJnUG9zPVwiY2VudGVyIGNlbnRlclwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiZ1NpemVPdmVycmlkZT1cImNvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiNTAwcHhcIiAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdEZlYXR1cmVkLXNwYWNlclwiPiZuYnNwOzwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3RGZWF0dXJlZC1zdWJ0aXRsZTJcIj57dGhpcy5wcm9wcy5zdWJ0aXRsZTJ9PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdEZlYXR1cmVkLWJvZHlcIj57dGhpcy5wcm9wcy5ib2R5Lmxlbmd0aCA+IDE0MCA/IHRoaXMucHJvcHMuYm9keS5zdWJzdHIoMCwgMTQwKSArIFwiLi4uXCIgOiB0aGlzLnByb3BzLmJvZHl9PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+PC9MaW5rPlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypPbiBjbGljazogY2hlY2sgZm9yIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uLFxyXG5cdGlmIGl0IGRvZXNuJ3QgZXhpc3Q6IHJlcXVlc3QgaXQsXHJcblx0aWYgcGVybWlzc2lvbiBhdmFpbGFibGUsIHNob3cgYSBub3RpZmljYXRpb24qL1x0XHJcblx0aGFuZGxlQ2xpY2soZSl7XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdENsaWNrSGFuZGxlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+e3RoaXMucG9zdEVsZW1lbnRUeXBlKCl9PC9kaXY+XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wUG9zdHNQb3N0RmVhdHVyZWQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFIQTs7OztBQUtBO0FBQUE7QUFFQTtBQUVBO0FBSEE7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7QUFuRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFiQTtBQWVBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBbENBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFzQkE7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBO0FBREE7QUFMQTtBQUNBO0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7OztBQXJCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFHQTtBQVFBO0FBRUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7Ozs7QUE5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7O0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFHQTtBQVFBO0FBRUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7Ozs7QUEvQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        