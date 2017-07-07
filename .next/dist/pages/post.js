'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('div', { className: 'CompPost-title' }, props.postdata.title), _react2.default.createElement('div', { className: 'CompPost-subtitle' }, props.postdata.subtitle), _react2.default.createElement('img', { src: props.postdata.imgurl, alt: 'ayy' }), _react2.default.createElement('div', { className: 'CompPost-spacer' }, '\xA0'), _react2.default.createElement('div', { className: 'CompPost-subtitle2' }, props.postdata.subtitle2), _react2.default.createElement('div', { className: 'CompPost-body' }, props.postdata.body));
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