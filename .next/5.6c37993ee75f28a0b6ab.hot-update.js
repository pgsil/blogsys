webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42YzM3OTkzZWU3NWYyOGEwYjZhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcyc7XHJcbmltcG9ydCBDb21wUG9zdHNQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcFBvc3RzUG9zdC5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYXBQb3N0cyhwcm9wcyl7XHJcblx0bGV0IHBvc3RzID0gcHJvcHMuanNvbi5wb3N0cztcclxuXHJcblx0bGV0IHR5cGUgPSBmYWxzZTtcclxuXHJcblx0bGV0IHBvc3RhcnJheSA9IFtdO1xyXG5cclxuXHRmb3IgKHZhciBpID0gcG9zdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuXHJcblx0XHRsZXQgY29tcG9uZW50ID0gPENvbXBQb3N0c1Bvc3QgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17XCJwb3N0LVwiICsgaX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e3Bvc3RzW2ldLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWd1cmw9e3Bvc3RzW2ldLmltZ3VybH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VidGl0bGU9e3Bvc3RzW2ldLnN1YnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTI9e3Bvc3RzW2ldLnN1YnRpdGxlMn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9keT17cG9zdHNbaV0uYm9keX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0anNvbmlkPXtpfSAvPlxyXG5cclxuXHRcdHBvc3RhcnJheS5wdXNoKGNvbXBvbmVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm5cdHBvc3RhcnJheTtcclxuXHRcclxufVxyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuXHQ8TGF5b3V0PlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDxsaW5rIGhyZWY9XCIvc3RhdGljcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcblx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0PGgxPnBvc3RzPC9oMT5cclxuXHRcdDx1bD5cclxuXHRcdHttYXBQb3N0cyhwcm9wcyl9XHJcblx0XHQ8L3VsPlxyXG5cdDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldHBvc3RzXCIpO1xyXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhgRGF0YSBmZXRjaGVkLmApO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0anNvbjogZGF0YVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFGQTtBQVBBO0FBQ0E7QUFVQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9