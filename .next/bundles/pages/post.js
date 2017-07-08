
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports =
webpackJsonp([7],{

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

var _link = __webpack_require__(543);

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

var _link = __webpack_require__(543);

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

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(546);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = __webpack_require__(557);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'CompPost-title' }, props.postdata.title), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, props.postdata.subtitle), _react2.default.createElement('img', { src: props.postdata.imgurl, alt: 'ayy' }), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, props.postdata.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, props.postdata.body)));
};

Post.getInitialProps = async function (context) {
  var id = context.query.id;

  var res = await (0, _isomorphicUnfetch2.default)("http://localhost:3000/api/getposts");
  var data = await res.json();

  var index = context.query.id;

  var postdata = data.posts[index];

  return { postdata: postdata };
};

exports.default = Post;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\pages\\post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\pages\\post.js"); } } })();
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
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[568]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXHBvc3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzZkOTFjMDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmQ5MWMwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBIZWFkZXIuanM/NmQ5MWMwNyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0LmpzPzZkOTFjMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgQ29tcEhlYWRlciBmcm9tICcuL0NvbXBIZWFkZXInO1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiAyMCxcclxuICBwYWRkaW5nOiAyMCxcclxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG5cdCAgPEhlYWQ+XHJcblxyXG5cdCAgPHRpdGxlPkJsb2dzeXM8L3RpdGxlPlxyXG5cdCAgXHJcblx0ICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL2J1bG1hLm1pbi5jc3NcIi8+XHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvcHVzaHkuY3NzXCIvPlxyXG5cclxuXHQgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDMwMCw0MDAsNTAwLDcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcblxyXG5cdCAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIi8+XHJcblx0ICA8L0hlYWQ+XHJcbiAgICA8Q29tcEhlYWRlci8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015TGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTVcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnB1c2h5ID0gdGhpcy5wdXNoeS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5wdXNoeVJlbW92ZSA9IHRoaXMucHVzaHlSZW1vdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qVG9nZ2xlIHB1c2gtcmlnaHQgbWVudSB2aXNpYmlsaXR5IGJ5IGFkZGluZy9yZW1vdmluZyBjc3MgY2xhc3MqL1xyXG5cdHB1c2h5KCl7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJwdXNoeS1vcGVuLWxlZnRcIik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHVzaHktbWVudS1idG5cIilbMF0uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEgZmEtYXJyb3ctbGVmdCBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cIjtcclxuXHJcblx0fVxyXG5cdHB1c2h5UmVtb3ZlKCl7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwdXNoeS1vcGVuLWxlZnRcIik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHVzaHktbWVudS1idG5cIilbMF0uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEgZmEtYmFycyBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cIjtcclxuXHR9XHRcclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tYXN0ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwicHVzaHktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndlYmVkaWEtaW1nIGhhcy10ZXh0LWNlbnRlcmVkIHB1c2hcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdXNoeS1tZW51LWJ0blwiIG9uQ2xpY2s9e3RoaXMucHVzaHl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3dlYmVkaWEucG5nXCIgYWx0PVwiVW0gU2l0ZSBkbyBXZWJlZGlhIEdyb3VwXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZGVza3RvcGhlYWRlciBwdXNoXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyIGxldmVsXCI+XHJcblx0XHRcdFx0XHQgIDxwIGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gaGFzLXRleHQtY2VudGVyZWQgaGVhZGVyLWxpbmstaXRlbVwiPlxyXG5cdFx0XHRcdFx0ICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibGluayBpcy1pbmZvXCI+TG9yZW0gSXBzdW08L0xpbms+XHJcblx0XHRcdFx0XHQgIDwvcD5cclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICA8TGluayBocmVmPVwiL25ld3Bvc3RcIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbXNpdCBEbzwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwicHVzaHkgcHVzaHktbGVmdFwiPlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInB1c2h5LWNvbnRlbnRcIj5cclxuXHRcdFx0XHQgICAgICAgIDx1bD5cdFx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj5Ib21lPC9saT48L0xpbms+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdwb3N0XCI+PGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj5BZG1pbjwvbGk+PC9MaW5rPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgPC91bD5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0PC9uYXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1vdmVybGF5XCIgb25DbGljaz17dGhpcy5wdXNoeVJlbW92ZX0+PC9kaXY+XHJcblx0XHRcdDwvZGl2Pik7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmNvbnN0IFBvc3QgPSAgKHByb3BzKSA9PiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC10aXRsZVwiPntwcm9wcy5wb3N0ZGF0YS50aXRsZX08L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGVcIj57cHJvcHMucG9zdGRhdGEuc3VidGl0bGV9PC9kaXY+XHJcblxyXG4gICAgICAgPGltZyBzcmM9e3Byb3BzLnBvc3RkYXRhLmltZ3VybH0gYWx0PVwiYXl5XCIgLz5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXNwYWNlclwiPiZuYnNwOzwvZGl2PlxyXG5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3VidGl0bGUyXCI+e3Byb3BzLnBvc3RkYXRhLnN1YnRpdGxlMn08L2Rpdj5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LWJvZHlcIj57cHJvcHMucG9zdGRhdGEuYm9keX08L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRwb3N0c1wiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgaW5kZXggPSBjb250ZXh0LnF1ZXJ5LmlkO1xyXG5cclxuICBjb25zdCBwb3N0ZGF0YSA9IGRhdGEucG9zdHNbaW5kZXhdO1xyXG5cclxuICByZXR1cm4geyBwb3N0ZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wb3N0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFVQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7Ozs7O0FBckJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        