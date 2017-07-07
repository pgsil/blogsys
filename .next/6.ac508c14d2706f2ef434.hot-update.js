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
}; /*import React, { Component } from 'react';
   
   import Layout from '../components/MyLayout.js'
   import fetch from 'isomorphic-unfetch'
   
   const Post =  (props) => (
       <Layout>
          <h1>{props.result.title}</h1>
       </Layout>
   )
   
   Post.getInitialProps = async function (context) {
     const { id } = context.query
     const res = await fetch("http://localhost:3000/api/getposts");
     const data = await res.json();
   
     const index = context.query.id;
   
     let result = data.posts[index];
   
     console.log(result.title)
   
     return { result }
   }
   
   export default Post*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5hYzUwOGMxNGQyNzA2ZjJlZjQzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz8yY2Y1YTc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmNvbnN0IFBvc3QgPSAgKHByb3BzKSA9PiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgPGgxPntwcm9wcy5yZXN1bHQudGl0bGV9PC9oMT5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9nZXRwb3N0c1wiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgY29uc3QgaW5kZXggPSBjb250ZXh0LnF1ZXJ5LmlkO1xyXG5cclxuICBsZXQgcmVzdWx0ID0gZGF0YS5wb3N0c1tpbmRleF07XHJcblxyXG4gIGNvbnNvbGUubG9nKHJlc3VsdC50aXRsZSlcclxuXHJcbiAgcmV0dXJuIHsgcmVzdWx0IH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuY29uc3QgUG9zdCA9ICAocHJvcHMpID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbXBQb3N0LXRpdGxlXCI+e3Byb3BzLnBvc3RkYXRhLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zdWJ0aXRsZVwiPntwcm9wcy5wb3N0ZGF0YS5zdWJ0aXRsZX08L2Rpdj5cclxuXHJcbiAgICAgICA8aW1nIHNyYz17cHJvcHMucG9zdGRhdGEuaW1ndXJsfSBhbHQ9XCJheXlcIiAvPlxyXG5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3Qtc3BhY2VyXCI+Jm5ic3A7PC9kaXY+XHJcblxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21wUG9zdC1zdWJ0aXRsZTJcIj57cHJvcHMucG9zdGRhdGEuc3VidGl0bGUyfTwvZGl2PlxyXG5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tcFBvc3QtYm9keVwiPntwcm9wcy5wb3N0ZGF0YS5ib2R5fTwvZGl2PlxyXG4gICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbilcclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2dldHBvc3RzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zdCBpbmRleCA9IGNvbnRleHQucXVlcnkuaWQ7XHJcblxyXG4gIGNvbnN0IHBvc3RkYXRhID0gZGF0YS5wb3N0c1tpbmRleF07XHJcblxyXG4gIHJldHVybiB7IHBvc3RkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==