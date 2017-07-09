
          window.__NEXT_REGISTER_PAGE('/newpost', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(628);


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _router = __webpack_require__(70);

var _router2 = _interopRequireDefault(_router);

var _MyLayout = __webpack_require__(568);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}return obj;
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

var CompNewPost = function (_Component) {
	_inherits(CompNewPost, _Component);

	function CompNewPost(props) {
		_classCallCheck(this, CompNewPost);

		var _this = _possibleConstructorReturn(this, (CompNewPost.__proto__ || Object.getPrototypeOf(CompNewPost)).call(this));

		_this.state = { title: "", subtitle: "", subtitle2: "", body: "", imgurl: "", redirect: false };

		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.uploadImage = _this.uploadImage.bind(_this);
		_this.handleInput = _this.handleInput.bind(_this);
		return _this;
	}

	_createClass(CompNewPost, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();

			var lenChk = function lenChk(i, len) {
				return i.length > len;
			};

			/*Simple check to see if imgurl starts with /images/*/
			var imgurlChk = this.state.imgurl.substring(0, 15) === "/static/images/",
			    titleChk = lenChk(this.state.title, 3),
			    subtitleChk = lenChk(this.state.subtitle, 3),
			    bodyChk = lenChk(this.state.body, 3);

			/*If all fields pass validation, do the POST*/
			if (imgurlChk && titleChk && subtitleChk && bodyChk) {
				fetch('/api/makepost', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						title: this.state.title,
						subtitle: this.state.subtitle,
						subtitle2: this.state.subtitle2,
						body: this.state.body,
						imgurl: this.state.imgurl
					})
				}).then(this.setState({ title: "", subtitle: "", subtitle2: "", body: "", imgurl: "" })).then(alert("Posted!")).then(console.log("routing")).then(_router2.default.push({ pathname: "/page", query: { page: 0 } }, as));
			} else {
				alert("Make sure you have a title, subtitle, valid image and body.");
			}
		}

		/*Uploads an image to the backend*/
		/*Backend sends back a string for the image path
  OR an error
  Client later validates this image path and
  won't submit a new post unless its valid*/

	}, {
		key: 'uploadImage',
		value: function uploadImage(e) {
			var _this2 = this;

			e.preventDefault();

			var data = new FormData();

			data.append('file', e.target.sampleFile.files[0]);

			fetch('/api/uploadimage', {
				method: 'POST',
				body: data
			}).then(function (res) {
				return res.text();
			}).then(function (uploadedImageUrl) {
				return _this2.setState({ imgurl: uploadedImageUrl });
			});
		}
	}, {
		key: 'handleInput',
		value: function handleInput(event) {
			var target = event.target,
			    value = target.value,
			    name = target.name;

			this.setState(_defineProperty({}, name, value));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('div', { className: 'container push margin1em' }, _react2.default.createElement('form', { onSubmit: this.handleSubmit }, _react2.default.createElement('label', { className: 'label' }, 'Title:', _react2.default.createElement('input', { type: 'text',
				className: 'input',
				value: this.state.title,
				name: 'title',
				onChange: this.handleInput })), _react2.default.createElement('br', null), _react2.default.createElement('label', { className: 'label' }, 'Subtitle:', _react2.default.createElement('input', { type: 'text',
				className: 'input',
				value: this.state.subtitle,
				name: 'subtitle',
				onChange: this.handleInput })), _react2.default.createElement('br', null), _react2.default.createElement('label', { className: 'label' }, 'Subtitle 2:', _react2.default.createElement('input', { type: 'text',
				className: 'input',
				value: this.state.subtitle2,
				name: 'subtitle2',
				onChange: this.handleInput })), _react2.default.createElement('br', null), _react2.default.createElement('label', { className: 'label' }, 'Body:', _react2.default.createElement('textarea', { type: 'textarea',
				className: 'textarea',
				value: this.state.body,
				name: 'body',
				onChange: this.handleInput })), _react2.default.createElement('br', null), _react2.default.createElement('label', { className: 'label' }, 'Image URL:', _react2.default.createElement('input', {
				type: 'text',
				className: 'input input-imgurl',
				value: this.state.imgurl,
				name: 'imgurl' })), _react2.default.createElement('br', null), _react2.default.createElement('input', { className: 'button is-primary', type: 'submit', value: 'Submit' })), _react2.default.createElement('form', { onSubmit: this.uploadImage }, _react2.default.createElement('input', { type: 'file', name: 'sampleFile', className: 'upload-button', accept: 'image/*' }), _react2.default.createElement('br', null), _react2.default.createElement('input', { className: 'button is-danger', type: 'submit', value: 'Upload Image' }))));
		}
	}]);

	return CompNewPost;
}(_react.Component);

exports.default = CompNewPost;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\webdev\\blogsys\\pages\\newpost.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\webdev\\blogsys\\pages\\newpost.js"); } } })();
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
    })(module.exports.default || module.exports, "/newpost")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[627]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXG5ld3Bvc3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzczMmE4ZTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NzMyYThlMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBIZWFkZXIuanM/MGIzYTYyMSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdwb3N0LmpzPzBiM2E2MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgQ29tcEhlYWRlciBmcm9tICcuL0NvbXBIZWFkZXInO1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e2xheW91dFN0eWxlfT5cclxuXHQgIDxIZWFkPlxyXG5cclxuXHQgIDx0aXRsZT5CbG9nc3lzPC90aXRsZT5cclxuXHQgIFxyXG5cdCAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9idWxtYS5taW4uY3NzXCIvPlxyXG5cdCAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL3B1c2h5LmNzc1wiLz5cclxuXHJcblx0ICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjEwMCwzMDAsNDAwLDUwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG5cdCAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxyXG5cclxuXHQgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIvPlxyXG5cdCAgPC9IZWFkPlxyXG4gICAgPENvbXBIZWFkZXIvPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBsaW5rU3R5bGUgPSB7XHJcbiAgbWFyZ2luUmlnaHQ6IDE1XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGFzPVwiL3BhZ2UvMFwiIGhyZWY9XCIvcGFnZT9wYWdlPTBcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnB1c2h5ID0gdGhpcy5wdXNoeS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5wdXNoeVJlbW92ZSA9IHRoaXMucHVzaHlSZW1vdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qVG9nZ2xlIHB1c2gtcmlnaHQgbWVudSB2aXNpYmlsaXR5IGJ5IGFkZGluZy9yZW1vdmluZyBjc3MgY2xhc3MqL1xyXG5cdHB1c2h5KCl7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJwdXNoeS1vcGVuLWxlZnRcIik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHVzaHktbWVudS1idG5cIilbMF0uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEgZmEtYXJyb3ctbGVmdCBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cIjtcclxuXHJcblx0fVxyXG5cdHB1c2h5UmVtb3ZlKCl7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwdXNoeS1vcGVuLWxlZnRcIik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHVzaHktbWVudS1idG5cIilbMF0uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEgZmEtYmFycyBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cIjtcclxuXHR9XHRcclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tYXN0ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwicHVzaHktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndlYmVkaWEtaW1nIGhhcy10ZXh0LWNlbnRlcmVkIHB1c2hcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdXNoeS1tZW51LWJ0blwiIG9uQ2xpY2s9e3RoaXMucHVzaHl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3dlYmVkaWEucG5nXCIgYWx0PVwiVW0gU2l0ZSBkbyBXZWJlZGlhIEdyb3VwXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZGVza3RvcGhlYWRlciBwdXNoXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyIGxldmVsXCI+XHJcblx0XHRcdFx0XHQgIDxwIGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gaGFzLXRleHQtY2VudGVyZWQgaGVhZGVyLWxpbmstaXRlbVwiPlxyXG5cdFx0XHRcdFx0ICAgIDxMaW5rIGFzPVwiL1wiIGhyZWY9XCIvcGFnZT9wYWdlPTBcIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgIDxMaW5rIGhyZWY9XCIvbmV3cG9zdFwiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtIElwc3VtPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblxyXG5cdFx0XHRcdFx0ICA8cCBjbGFzc05hbWU9XCJsZXZlbC1pdGVtIGhhcy10ZXh0LWNlbnRlcmVkIGhlYWRlci1saW5rLWl0ZW1cIj5cclxuXHRcdFx0XHRcdCAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImxpbmsgaXMtaW5mb1wiPkxvcmVtc2l0IERvPC9MaW5rPlxyXG5cdFx0XHRcdFx0ICA8L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PG5hdiBjbGFzc05hbWU9XCJwdXNoeSBwdXNoeS1sZWZ0XCI+XHJcblx0XHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicHVzaHktY29udGVudFwiPlxyXG5cdFx0XHRcdCAgICAgICAgPHVsPlx0XHRcdFx0ICAgICAgICAgICAgXHJcblx0XHRcdFx0ICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj48TGluayBhcz1cIi9cIiBocmVmPVwiL3BhZ2U/cGFnZT0wXCI+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cclxuXHRcdFx0XHQgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHVzaHktbGlua1wiPjxMaW5rIGhyZWY9XCIvbmV3cG9zdFwiPjxhPkFkbWluPC9hPjwvTGluaz48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgPC91bD5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0PC9uYXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1vdmVybGF5XCIgb25DbGljaz17dGhpcy5wdXNoeVJlbW92ZX0+PC9kaXY+XHJcblx0XHRcdDwvZGl2Pik7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wSGVhZGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBOZXdQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcdFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHt0aXRsZTogXCJcIiwgc3VidGl0bGU6IFwiXCIsIHN1YnRpdGxlMjogXCJcIiwgYm9keTogXCJcIiwgaW1ndXJsOiBcIlwiLCByZWRpcmVjdDogZmFsc2V9O1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudXBsb2FkSW1hZ2UgPSB0aGlzLnVwbG9hZEltYWdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRcclxuXHRoYW5kbGVTdWJtaXQoZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IGxlbkNoayA9IChpLCBsZW4pID0+IHtyZXR1cm4gKGkubGVuZ3RoID4gbGVuKX07XHJcblxyXG5cdFx0LypTaW1wbGUgY2hlY2sgdG8gc2VlIGlmIGltZ3VybCBzdGFydHMgd2l0aCAvaW1hZ2VzLyovXHJcblx0XHRsZXQgaW1ndXJsQ2hrID0gdGhpcy5zdGF0ZS5pbWd1cmwuc3Vic3RyaW5nKDAsIDE1KSA9PT0gXCIvc3RhdGljL2ltYWdlcy9cIixcclxuXHRcdFx0dGl0bGVDaGsgPSBsZW5DaGsodGhpcy5zdGF0ZS50aXRsZSwgMyksXHJcblx0XHRcdHN1YnRpdGxlQ2hrID0gbGVuQ2hrKHRoaXMuc3RhdGUuc3VidGl0bGUsIDMpLFxyXG5cdFx0XHRib2R5Q2hrID0gbGVuQ2hrKHRoaXMuc3RhdGUuYm9keSwgMyk7XHJcblxyXG5cdFx0LypJZiBhbGwgZmllbGRzIHBhc3MgdmFsaWRhdGlvbiwgZG8gdGhlIFBPU1QqL1xyXG5cdFx0aWYoaW1ndXJsQ2hrICYmIHRpdGxlQ2hrICYmIHN1YnRpdGxlQ2hrICYmIGJvZHlDaGspe1xyXG5cdFx0XHRmZXRjaCgnL2FwaS9tYWtlcG9zdCcsIHtcclxuXHRcdFx0ICBtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ICBoZWFkZXJzOiB7XHJcblx0XHRcdCAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0ICB9LFxyXG5cdFx0XHQgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0ICAgIHRpdGxlOiB0aGlzLnN0YXRlLnRpdGxlLFxyXG5cdFx0XHQgICAgc3VidGl0bGU6IHRoaXMuc3RhdGUuc3VidGl0bGUsXHJcblx0XHRcdCAgICBzdWJ0aXRsZTI6IHRoaXMuc3RhdGUuc3VidGl0bGUyLFxyXG5cdFx0XHQgICAgYm9keTogdGhpcy5zdGF0ZS5ib2R5LFxyXG5cdFx0XHQgICAgaW1ndXJsOiB0aGlzLnN0YXRlLmltZ3VybFxyXG5cdFx0XHQgIH0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHRoaXMuc2V0U3RhdGUoe3RpdGxlOiBcIlwiLCBzdWJ0aXRsZTogXCJcIiwgc3VidGl0bGUyOiBcIlwiLCBib2R5OiBcIlwiLCBpbWd1cmw6IFwiXCJ9KSlcclxuXHRcdFx0LnRoZW4oYWxlcnQoXCJQb3N0ZWQhXCIpKVxyXG5cdFx0XHQudGhlbihjb25zb2xlLmxvZyhcInJvdXRpbmdcIikpXHJcblx0XHRcdC50aGVuKFJvdXRlci5wdXNoKHtwYXRobmFtZTogXCIvcGFnZVwiLCBxdWVyeToge3BhZ2U6IDB9fSwgYXM6IFwiL1wiKSlcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGFsZXJ0KFwiTWFrZSBzdXJlIHlvdSBoYXZlIGEgdGl0bGUsIHN1YnRpdGxlLCB2YWxpZCBpbWFnZSBhbmQgYm9keS5cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKlVwbG9hZHMgYW4gaW1hZ2UgdG8gdGhlIGJhY2tlbmQqL1xyXG5cdC8qQmFja2VuZCBzZW5kcyBiYWNrIGEgc3RyaW5nIGZvciB0aGUgaW1hZ2UgcGF0aFxyXG5cdE9SIGFuIGVycm9yXHJcblx0Q2xpZW50IGxhdGVyIHZhbGlkYXRlcyB0aGlzIGltYWdlIHBhdGggYW5kXHJcblx0d29uJ3Qgc3VibWl0IGEgbmV3IHBvc3QgdW5sZXNzIGl0cyB2YWxpZCovXHJcblx0dXBsb2FkSW1hZ2UoZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcblx0XHRkYXRhLmFwcGVuZCgnZmlsZScsIGUudGFyZ2V0LnNhbXBsZUZpbGUuZmlsZXNbMF0pO1xyXG5cclxuXHRcdGZldGNoKCcvYXBpL3VwbG9hZGltYWdlJywge1xyXG5cdFx0ICBtZXRob2Q6ICdQT1NUJyxcclxuXHRcdCAgYm9keTogZGF0YVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxyXG5cdFx0LnRoZW4oKHVwbG9hZGVkSW1hZ2VVcmwpID0+IHRoaXMuc2V0U3RhdGUoe2ltZ3VybDogdXBsb2FkZWRJbWFnZVVybH0pKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZUlucHV0KGV2ZW50KSB7XHJcblx0XHRjb25zdCBcdHRhcmdldCA9IGV2ZW50LnRhcmdldCxcclxuXHRcdFx0XHR2YWx1ZSA9IHRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHRuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFtuYW1lXTogdmFsdWVcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFx0XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB1c2ggbWFyZ2luMWVtXCI+XHRcdFx0XHRcclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFRpdGxlOlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwidGl0bGVcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSAvPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRTdWJ0aXRsZTpcclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc3VidGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cInN1YnRpdGxlXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0U3VidGl0bGUgMjpcclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc3VidGl0bGUyfVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzdWJ0aXRsZTJcIlxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0fSAvPlxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRCb2R5OlxyXG5cdFx0XHRcdFx0XHQ8dGV4dGFyZWEgdHlwZT1cInRleHRhcmVhXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0YXJlYVwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYm9keX1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiYm9keVwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9IC8+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRJbWFnZSBVUkw6XHJcblx0XHRcdFx0XHRcdDxpbnB1dCBcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1pbWd1cmxcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmltZ3VybH1cclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiaW1ndXJsXCIgLz5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMudXBsb2FkSW1hZ2V9PlxyXG5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJzYW1wbGVGaWxlXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJ1dHRvblwiIGFjY2VwdD1cImltYWdlLypcIiAvPlxyXG5cclxuXHRcdFx0XHRcdDxici8+XHJcblxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXJcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQgSW1hZ2VcIiAvPlxyXG5cdFx0XHQgICA8L2Zvcm0+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdCk7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbmV3cG9zdC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTs7OztBQUlBO0FBQUE7QUFDQTs7OztBQUlBO0FBQ0E7Ozs7Ozs7QUFyQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFIQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTkE7QUFGQTtBQXNCQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFKQTtBQUtBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFNQTtBQUNBO0FBT0E7QUFBQTtBQUVBO0FBQUE7QUFTQTtBQUFBO0FBRUE7QUFBQTtBQVNBO0FBQUE7QUFFQTtBQUFBO0FBU0E7QUFBQTtBQUVBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFJQTs7Ozs7OztBQXhJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        