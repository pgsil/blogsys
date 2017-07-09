'use strict';

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _router = require("next\\dist\\lib\\router\\index.js");

var _router2 = _interopRequireDefault(_router);

var _MyLayout = require("../components/MyLayout.js");

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