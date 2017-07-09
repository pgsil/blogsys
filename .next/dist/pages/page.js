'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _CompPostsPost = require('../components/CompPostsPost.js');

var _CompPostsPost2 = _interopRequireDefault(_CompPostsPost);

var _CompPostsPostFeatured = require('../components/CompPostsPostFeatured.js');

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