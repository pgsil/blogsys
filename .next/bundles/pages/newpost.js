
          window.__NEXT_REGISTER_PAGE('/newpost', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

/***/ 544:
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

var _MyLayout = __webpack_require__(546);

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

		_this.state = { title: "", subtitle: "", body: "", imgurl: "", redirect: false };

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
			var imgurlChk = this.state.imgurl.substring(0, 8) === "/images/",
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
						body: this.state.body,
						imgurl: this.state.imgurl
					})
				}).then(this.setState({ title: "", subtitle: "", body: "", imgurl: "" })).then(alert("Posted!")).then(this.setState({ redirect: true }));
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

/***/ }),

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

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXG5ld3Bvc3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9uZXdwb3N0LmpzPzYyM2JlZWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NeUxheW91dC5qcz82MjNiZWViIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzYyM2JlZWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21wSGVhZGVyLmpzPzYyM2JlZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcE5ld1Bvc3QgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge3RpdGxlOiBcIlwiLCBzdWJ0aXRsZTogXCJcIiwgYm9keTogXCJcIiwgaW1ndXJsOiBcIlwiLCByZWRpcmVjdDogZmFsc2V9O1xyXG5cclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudXBsb2FkSW1hZ2UgPSB0aGlzLnVwbG9hZEltYWdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZUlucHV0ID0gdGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRcclxuXHRoYW5kbGVTdWJtaXQoZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IGxlbkNoayA9IChpLCBsZW4pID0+IHtyZXR1cm4gKGkubGVuZ3RoID4gbGVuKX07XHJcblxyXG5cdFx0LypTaW1wbGUgY2hlY2sgdG8gc2VlIGlmIGltZ3VybCBzdGFydHMgd2l0aCAvaW1hZ2VzLyovXHJcblx0XHRsZXQgaW1ndXJsQ2hrID0gdGhpcy5zdGF0ZS5pbWd1cmwuc3Vic3RyaW5nKDAsIDgpID09PSBcIi9pbWFnZXMvXCIsXHJcblx0XHRcdHRpdGxlQ2hrID0gbGVuQ2hrKHRoaXMuc3RhdGUudGl0bGUsIDMpLFxyXG5cdFx0XHRzdWJ0aXRsZUNoayA9IGxlbkNoayh0aGlzLnN0YXRlLnN1YnRpdGxlLCAzKSxcclxuXHRcdFx0Ym9keUNoayA9IGxlbkNoayh0aGlzLnN0YXRlLmJvZHksIDMpO1xyXG5cclxuXHRcdC8qSWYgYWxsIGZpZWxkcyBwYXNzIHZhbGlkYXRpb24sIGRvIHRoZSBQT1NUKi9cclxuXHRcdGlmKGltZ3VybENoayAmJiB0aXRsZUNoayAmJiBzdWJ0aXRsZUNoayAmJiBib2R5Q2hrKXtcclxuXHRcdFx0ZmV0Y2goJy9hcGkvbWFrZXBvc3QnLCB7XHJcblx0XHRcdCAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdCAgaGVhZGVyczoge1xyXG5cdFx0XHQgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0ICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCAgfSxcclxuXHRcdFx0ICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdCAgICB0aXRsZTogdGhpcy5zdGF0ZS50aXRsZSxcclxuXHRcdFx0ICAgIHN1YnRpdGxlOiB0aGlzLnN0YXRlLnN1YnRpdGxlLFxyXG5cdFx0XHQgICAgYm9keTogdGhpcy5zdGF0ZS5ib2R5LFxyXG5cdFx0XHQgICAgaW1ndXJsOiB0aGlzLnN0YXRlLmltZ3VybFxyXG5cdFx0XHQgIH0pXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKHRoaXMuc2V0U3RhdGUoe3RpdGxlOiBcIlwiLCBzdWJ0aXRsZTogXCJcIiwgYm9keTogXCJcIiwgaW1ndXJsOiBcIlwifSkpXHJcblx0XHRcdC50aGVuKGFsZXJ0KFwiUG9zdGVkIVwiKSlcclxuXHRcdFx0LnRoZW4odGhpcy5zZXRTdGF0ZSh7cmVkaXJlY3Q6IHRydWV9KSk7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRhbGVydChcIk1ha2Ugc3VyZSB5b3UgaGF2ZSBhIHRpdGxlLCBzdWJ0aXRsZSwgdmFsaWQgaW1hZ2UgYW5kIGJvZHkuXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LypVcGxvYWRzIGFuIGltYWdlIHRvIHRoZSBiYWNrZW5kKi9cclxuXHQvKkJhY2tlbmQgc2VuZHMgYmFjayBhIHN0cmluZyBmb3IgdGhlIGltYWdlIHBhdGhcclxuXHRPUiBhbiBlcnJvclxyXG5cdENsaWVudCBsYXRlciB2YWxpZGF0ZXMgdGhpcyBpbWFnZSBwYXRoIGFuZFxyXG5cdHdvbid0IHN1Ym1pdCBhIG5ldyBwb3N0IHVubGVzcyBpdHMgdmFsaWQqL1xyXG5cdHVwbG9hZEltYWdlKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG5cdFx0ZGF0YS5hcHBlbmQoJ2ZpbGUnLCBlLnRhcmdldC5zYW1wbGVGaWxlLmZpbGVzWzBdKTtcclxuXHJcblx0XHRmZXRjaCgnL2FwaS91cGxvYWRpbWFnZScsIHtcclxuXHRcdCAgbWV0aG9kOiAnUE9TVCcsXHJcblx0XHQgIGJvZHk6IGRhdGFcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcclxuXHRcdC50aGVuKCh1cGxvYWRlZEltYWdlVXJsKSA9PiB0aGlzLnNldFN0YXRlKHtpbWd1cmw6IHVwbG9hZGVkSW1hZ2VVcmx9KSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVJbnB1dChldmVudCkge1xyXG5cdFx0Y29uc3QgXHR0YXJnZXQgPSBldmVudC50YXJnZXQsXHJcblx0XHRcdFx0dmFsdWUgPSB0YXJnZXQudmFsdWUsXHJcblx0XHRcdFx0bmFtZSA9IHRhcmdldC5uYW1lO1xyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRbbmFtZV06IHZhbHVlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcdFxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdXNoIG1hcmdpbjFlbVwiPlx0XHRcdFx0XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRUaXRsZTpcclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cInRpdGxlXCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHJcblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0U3VidGl0bGU6XHJcblx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnN1YnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzdWJ0aXRsZVwiXHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXR9IC8+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHRcdDxici8+XHJcblxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEJvZHk6XHJcblx0XHRcdFx0XHRcdDx0ZXh0YXJlYSB0eXBlPVwidGV4dGFyZWFcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHRhcmVhXCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5ib2R5fVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJib2R5XCJcclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH0gLz5cclxuXHRcdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdEltYWdlIFVSTDpcclxuXHRcdFx0XHRcdFx0PGlucHV0IFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlucHV0IGlucHV0LWltZ3VybFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuaW1ndXJsfVxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJpbWd1cmxcIiAvPlx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy51cGxvYWRJbWFnZX0+XHJcblxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInNhbXBsZUZpbGVcIiBjbGFzc05hbWU9XCJ1cGxvYWQtYnV0dG9uXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIC8+XHJcblxyXG5cdFx0XHRcdFx0PGJyLz5cclxuXHJcblx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCBJbWFnZVwiIC8+XHJcblx0XHRcdCAgIDwvZm9ybT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9uZXdwb3N0LmpzP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgQ29tcEhlYWRlciBmcm9tICcuL0NvbXBIZWFkZXInO1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiAyMCxcclxuICBwYWRkaW5nOiAyMCxcclxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG5cdCAgPEhlYWQ+XHJcblxyXG5cdCAgPHRpdGxlPkJsb2dzeXM8L3RpdGxlPlxyXG5cdCAgXHJcblx0ICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL2J1bG1hLm1pbi5jc3NcIi8+XHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvcHVzaHkuY3NzXCIvPlxyXG5cclxuXHQgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDMwMCw0MDAsNTAwLDcwMFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcblx0ICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIi8+XHJcblxyXG5cdCAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIi8+XHJcblx0ICA8L0hlYWQ+XHJcbiAgICA8Q29tcEhlYWRlci8+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015TGF5b3V0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTVcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnB1c2h5ID0gdGhpcy5wdXNoeS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5wdXNoeVJlbW92ZSA9IHRoaXMucHVzaHlSZW1vdmUuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qVG9nZ2xlIHB1c2gtcmlnaHQgbWVudSB2aXNpYmlsaXR5IGJ5IGFkZGluZy9yZW1vdmluZyBjc3MgY2xhc3MqL1xyXG5cdHB1c2h5KCl7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJwdXNoeS1vcGVuLWxlZnRcIik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHVzaHktbWVudS1idG5cIilbMF0uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEgZmEtYXJyb3ctbGVmdCBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cIjtcclxuXHJcblx0fVxyXG5cdHB1c2h5UmVtb3ZlKCl7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwdXNoeS1vcGVuLWxlZnRcIik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHVzaHktbWVudS1idG5cIilbMF0uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEgZmEtYmFycyBmYS0yeCcgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cIjtcclxuXHR9XHRcclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1tYXN0ZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwicHVzaHktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0ICAgIFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndlYmVkaWEtaW1nIGhhcy10ZXh0LWNlbnRlcmVkIHB1c2hcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZXZlbC1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwdXNoeS1tZW51LWJ0blwiIG9uQ2xpY2s9e3RoaXMucHVzaHl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFycyBmYS0yeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3dlYmVkaWEucG5nXCIgYWx0PVwiVW0gU2l0ZSBkbyBXZWJlZGlhIEdyb3VwXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXIgZGVza3RvcGhlYWRlciBwdXNoXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyIGxldmVsXCI+XHJcblx0XHRcdFx0XHQgIDxwIGNsYXNzTmFtZT1cImxldmVsLWl0ZW0gaGFzLXRleHQtY2VudGVyZWQgaGVhZGVyLWxpbmstaXRlbVwiPlxyXG5cdFx0XHRcdFx0ICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibGluayBpcy1pbmZvXCI+TG9yZW0gSXBzdW08L0xpbms+XHJcblx0XHRcdFx0XHQgIDwvcD5cclxuXHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICA8TGluayBocmVmPVwiL25ld3Bvc3RcIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbSBJcHN1bTwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cclxuXHRcdFx0XHRcdCAgPHAgY2xhc3NOYW1lPVwibGV2ZWwtaXRlbSBoYXMtdGV4dC1jZW50ZXJlZCBoZWFkZXItbGluay1pdGVtXCI+XHJcblx0XHRcdFx0XHQgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsaW5rIGlzLWluZm9cIj5Mb3JlbXNpdCBEbzwvTGluaz5cclxuXHRcdFx0XHRcdCAgPC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwicHVzaHkgcHVzaHktbGVmdFwiPlxyXG5cdFx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInB1c2h5LWNvbnRlbnRcIj5cclxuXHRcdFx0XHQgICAgICAgIDx1bD5cdFx0XHRcdCAgICAgICAgICAgIFxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj5Ib21lPC9saT48L0xpbms+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdwb3N0XCI+PGxpIGNsYXNzTmFtZT1cInB1c2h5LWxpbmtcIj5BZG1pbjwvbGk+PC9MaW5rPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwdXNoeS1saW5rXCI+PGEgaHJlZj1cIiNcIj5Mb3JlbSBJcHN1bTwvYT48L2xpPlxyXG5cdFx0XHRcdCAgICAgICAgPC91bD5cclxuXHRcdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdFx0PC9uYXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1vdmVybGF5XCIgb25DbGljaz17dGhpcy5wdXNoeVJlbW92ZX0+PC9kaXY+XHJcblx0XHRcdDwvZGl2Pik7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db21wSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTs7QUFFQTtBQUVBO0FBSEE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQUZBO0FBb0JBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBS0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQU1BO0FBQ0E7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQVNBO0FBQUE7QUFFQTtBQUFBO0FBU0E7QUFBQTtBQUVBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFJQTs7Ozs7OztBQTNIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7OztBQXJCQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        