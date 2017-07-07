webpackHotUpdate(6,{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(553);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = __webpack_require__(552);

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

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wMjc2NTAwYThhYzRmZmM3Yjc1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz81OTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5jb25zdCBQb3N0ID0gIChwcm9wcykgPT4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3QtdGl0bGVcIj57cHJvcHMucG9zdGRhdGEudGl0bGV9PC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlXCI+e3Byb3BzLnBvc3RkYXRhLnN1YnRpdGxlfTwvZGl2PlxyXG5cclxuICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wb3N0ZGF0YS5pbWd1cmx9IGFsdD1cImF5eVwiIC8+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zcGFjZXJcIj4mbmJzcDs8L2Rpdj5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXN1YnRpdGxlMlwiPntwcm9wcy5wb3N0ZGF0YS5zdWJ0aXRsZTJ9PC9kaXY+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1ib2R5XCI+e3Byb3BzLnBvc3RkYXRhLmJvZHl9PC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuKVxyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0cG9zdHNcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGluZGV4ID0gY29udGV4dC5xdWVyeS5pZDtcclxuXHJcbiAgY29uc3QgcG9zdGRhdGEgPSBkYXRhLnBvc3RzW2luZGV4XTtcclxuXHJcbiAgcmV0dXJuIHsgcG9zdGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcG9zdC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==